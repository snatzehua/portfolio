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
const { isYearOnlyProjectPeriod } = loadContent('src/content/project-dates.ts');
const { fullProjectWriteupSlugs, visibleProjectSections } = loadContent('src/content/project-writeups.ts');
const { projectCollections, selectedProjectSlugs } = loadContent('src/content/project-collections.ts');
const { experienceEntries } = loadContent('src/components/tab-viewer/entries/experience-entries.ts');
const { educationEntries } = loadContent('src/components/tab-viewer/entries/education-entries.ts');
assert(writingEntries.filter(entry => entry.pinned).length <= 1, 'Only one Writing entry may be pinned on the homepage');
assert(writingEntries.every(entry => entry.pinned === undefined || typeof entry.pinned === 'boolean'), 'Writing pinned metadata must be boolean');
for (const [kind, entries] of [['experience', experienceEntries], ['education', educationEntries]]) {
  for (const entry of entries) {
    assert(entry.title?.trim() && entry.subtitle?.trim(), `Missing ${kind} title or organisation`);
    assert(entry.image?.startsWith('/images/') && fs.existsSync(path.join(root, 'public', entry.image)), `Missing ${kind} logo: ${entry.image}`);
    assert(Number.isInteger(entry.startYear) && entry.startYear >= 1900, `Invalid ${kind} start year: ${entry.title}`);
    assert(entry.endYear === 'Present' || Number.isInteger(entry.endYear) && entry.endYear >= entry.startYear, `Invalid ${kind} end year: ${entry.title}`);
    assert(entry.details.length && entry.details.every(detail => detail.trim()), `Missing ${kind} details: ${entry.title}`);
    if (entry.isCurrent) assert(entry.endYear === 'Present', `Current ${kind} entry must end at Present: ${entry.title}`);
  }
  console.log(`${kind}: ${entries.length} entries; titles, dates, details and logos checked.`);
}
const projectSlugs = new Set(projects.map(project => project.slug));
assert(new Set(fullProjectWriteupSlugs).size === fullProjectWriteupSlugs.length && fullProjectWriteupSlugs.every(slug => projectSlugs.has(slug)), 'Published writeups must name unique registered projects');
const collectionSlugs = projectCollections.flatMap(group => group.slugs);
assert(collectionSlugs.length === new Set(collectionSlugs).size, 'A project belongs to more than one collection');
assert(collectionSlugs.length === projects.length && collectionSlugs.every(slug => projectSlugs.has(slug)), 'Collections must cover every project exactly once');
assert(selectedProjectSlugs.length === new Set(selectedProjectSlugs).size && selectedProjectSlugs.every(slug => projectSlugs.has(slug)), 'Invalid selected project slugs');
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
      assert(isYearOnlyProjectPeriod(entry.period), `Project period must be year-only (YYYY or YYYY–YYYY): ${entry.slug}/${entry.period}`);
      if (fullProjectWriteupSlugs.includes(entry.slug)) assert.deepEqual(visibleProjectSections(entry), entry.sections, `Full writeup changed: ${entry.slug}`);
      else assert(visibleProjectSections(entry).length === 1 && visibleProjectSections(entry)[0].id === 'writeup-in-progress', `Missing WIP placeholder: ${entry.slug}`);
      assert(entry.cover && entry.coverAlt?.trim(), `Missing project banner or description: ${entry.slug}`);
      assert(projectStatuses.includes(entry.status), `Invalid project status: ${entry.slug}/${entry.status}`);
    }
    const ids = new Set();
    for (const section of entry.sections) {
      assert(/^[a-z0-9-]+$/.test(section.id) && !ids.has(section.id), `Invalid/duplicate section: ${entry.slug}/${section.id}`);
      ids.add(section.id);
      assert(section.title && section.blocks.length, `Empty section: ${entry.slug}/${section.id}`);
      if (section.navTitle !== undefined) assert(section.navTitle.trim() && section.navTitle.length <= 40, `Invalid short navigation label: ${entry.slug}/${section.id}`);
      for (const block of section.blocks) {
        if (block.type === 'diagram') {
          assert(block.title?.trim() && block.caption?.trim(), `Missing diagram context: ${entry.slug}/${section.id}`);
          assert(Array.isArray(block.steps) && block.steps.length >= 2 && block.steps.length <= 4, `Invalid diagram steps: ${entry.slug}/${section.id}`);
          for (const step of block.steps) assert(step.label?.trim() && step.detail?.trim(), `Empty diagram step: ${entry.slug}/${section.id}`);
          continue;
        }
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
console.log(`Project periods: ${projects.length}/${projects.length} year-only; ${fullProjectWriteupSlugs.length} full writeups and ${projects.length - fullProjectWriteupSlugs.length} preserved drafts shown as WIP.`);
await checkProjectCovers(projects.map(project => project.cover));
