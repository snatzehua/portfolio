import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
import ts from 'typescript';
import { checkProjectCovers } from './check-project-covers.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cache = new Map();
// Content modules are local TypeScript data; evaluate their CommonJS output without a second build.
function loadContent(filename) {
  const full = path.resolve(root, filename);
  if (cache.has(full)) return cache.get(full);
  const source = fs.readFileSync(full, 'utf8');
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } });
  const module = { exports: {} };
  cache.set(full, module.exports);
  const localRequire = (specifier) => {
    assert(specifier.startsWith('.'), 'Content must use local imports');
    const target = path.resolve(path.dirname(full), specifier);
    return loadContent(fs.existsSync(`${target}.ts`) ? `${target}.ts` : path.join(target, 'index.ts'));
  };
  new Function('require', 'module', 'exports', outputText)(localRequire, module, module.exports);
  return module.exports;
}
const { projects } = loadContent('src/content/projects/index.ts');
const { writingEntries } = loadContent('src/content/writing/index.ts');
const { media } = loadContent('src/content/media.ts');
const { projectStatuses } = loadContent('src/content/types.ts');
for (const [kind, entries] of [['projects', projects], ['writing', writingEntries]]) {
  const slugs = new Set();
  for (const entry of entries) {
    assert(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(entry.slug), `Invalid ${kind} slug`);
    assert(!slugs.has(entry.slug), `Duplicate ${kind} slug: ${entry.slug}`);
    slugs.add(entry.slug);
    assert(/^\d{4}-\d{2}(?:-\d{2})?$/.test(entry.publishedAt), `Invalid date: ${entry.slug}`);
    const completeDate = entry.publishedAt.length === 7 ? `${entry.publishedAt}-01` : entry.publishedAt;
    const parsedDate = new Date(`${completeDate}T00:00:00Z`);
    assert(!Number.isNaN(parsedDate.valueOf()) && parsedDate.toISOString().startsWith(completeDate), `Invalid calendar date: ${entry.slug}`);
    assert(entry.title && entry.summary && entry.sections.length, `Missing content: ${entry.slug}`);
    if (kind === 'projects') {
      assert(entry.cover && entry.coverAlt?.trim(), `Missing project banner or description: ${entry.slug}`);
      assert(projectStatuses.includes(entry.status), `Invalid project status: ${entry.slug}/${entry.status}`);
    }
    const ids = new Set();
    for (const section of entry.sections) {
      assert(/^[a-z0-9-]+$/.test(section.id) && !ids.has(section.id), `Invalid/duplicate section: ${entry.slug}/${section.id}`);
      ids.add(section.id);
      assert(section.title && section.blocks.length, `Empty section: ${entry.slug}/${section.id}`);
      for (const block of section.blocks) {
        if (block.type !== 'image') { assert(block.content.trim(), `Empty content in ${entry.slug}`); continue; }
        assert(block.src.startsWith('/images/') && fs.existsSync(path.join(root, 'public', block.src)), `Missing image: ${block.src}`);
        assert(media[block.src]?.width > 0 && media[block.src]?.height > 0, `Missing image dimensions: ${block.src}`);
      }
    }
    for (const image of [entry.cover, entry.banner].filter(Boolean)) {
      assert(fs.existsSync(path.join(root, 'public', image)), `Missing cover: ${image}`);
    }
  }
  assert(entries.every((entry, i) => i === 0 || entry.publishedAt <= entries[i - 1].publishedAt), `${kind} must be newest first`);
  console.log(`${kind}: ${entries.length} entries; slugs, dates, sections, and images checked.`);
}
await checkProjectCovers(projects.map(project => project.cover));
