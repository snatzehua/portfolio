const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const ts = require("typescript");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const { parse } = require("next/dist/compiled/node-html-parser");

const root = path.resolve(__dirname, "..");
const src = path.join(root, "src");

// Run real page components in this process without starting a dev server or using .next.
function compileLocal(module, filename) {
  const requireFromModule = module.require.bind(module);
  module.require = (id) => requireFromModule(id.startsWith("@/") ? path.join(src, id.slice(2)) : id);
  const { outputText } = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX,
      target: ts.ScriptTarget.ES2020, esModuleInterop: true,
    },
  });
  module._compile(outputText, filename);
}
Module._extensions[".ts"] = compileLocal;
Module._extensions[".tsx"] = compileLocal;
Module._extensions[".css"] = () => {};

const { projects } = require("../src/content/projects");
const { writingEntries } = require("../src/content/writing");
const { projectUrlSlug } = require("../src/content/project-path");
const { selectedProjectSlugs } = require("../src/content/project-collections");
const projectPage = require("../src/app/projects/[slug]/page");
const writingPage = require("../src/app/writing/[slug]/page");
const config = require("../next.config").default;

function render(component) {
  return parse(renderToStaticMarkup(component));
}

function checkCards(document, selector, directory, entries) {
  const links = document.querySelectorAll(selector);
  assert(links.length > 0, `Missing ${directory} cards`);
  return links.map(link => {
    const title = link.querySelector("h2,h3")?.textContent;
    const entry = entries.find(item => item.title === title);
    assert(entry, `Unrecognised ${directory} card title: ${title}`);
    assert.equal(link.getAttribute("href"), `/${directory}/${projectUrlSlug(entry)}`, `Wrong link for “${title}”`);
    return title;
  });
}

async function checkDetails(page, directory, entries) {
  const slugs = entries.map(projectUrlSlug);
  assert.equal(new Set(slugs).size, entries.length, `Duplicate ${directory} title-derived URL`);
  const params = await page.generateStaticParams();
  assert.deepEqual(params.map(param => param.slug).sort(), [...slugs].sort(), `Incorrect static ${directory} routes`);
  for (const entry of entries) {
    const slug = projectUrlSlug(entry);
    const input = { params: Promise.resolve({ slug }) };
    const document = render(await page.default(input));
    assert.equal(document.querySelector("h1")?.textContent, entry.title, `Wrong page at /${directory}/${slug}`);
    if (directory === "projects" && entry.slug !== slug) {
      await assert.rejects(page.default({ params: Promise.resolve({ slug: entry.slug }) }),
        error => error.digest?.includes(`;/projects/${slug};308;`), `Broken redirect from /projects/${entry.slug}`);
    }
  }
}

async function main() {
  // Pin public spelling rules independently of the implementation used to build links.
  for (const [title, expected] of [
    ["Bank Account Fraud: Training Data & Review Policy", "bank-account-fraud-training-data-and-review-policy"],
    ["Amodei's Experience Machine", "amodeis-experience-machine"],
    ["Travel — São Paulo & Lima", "travel-sao-paulo-and-lima"],
  ]) {
    assert.equal(projectUrlSlug({ title, slug: "internal-id" }), expected);
  }
  for (const [directory, view, selector, entries, page] of [
    ["projects", require("../src/components/tab-viewer/projects-panel").default, "a.project-card", projects, projectPage],
    ["writing", require("../src/components/tab-viewer/writing-panel").default, "a.writing-card", writingEntries, writingPage],
  ]) {
    const titles = checkCards(render(React.createElement(view)), selector, directory, entries);
    assert.deepEqual([...titles].sort(), entries.map(entry => entry.title).sort(), `Missing or duplicate ${directory} index link`);
    await checkDetails(page, directory, entries);
  }

  const home = render(React.createElement(require("../src/components/portfolio/home-overview").default));
  const featured = checkCards(home, "a.project-card", "projects", projects);
  assert.deepEqual(featured.sort(), projects.filter(entry => selectedProjectSlugs.includes(entry.slug)).map(entry => entry.title).sort());
  checkCards(home, "a.writing-preview", "writing", writingEntries);

  const redirects = await config.redirects();
  for (const [oldSlug, newSlug] of [
    ["subtiles-2", "jane-street-puzzle-february-2026"],
    ["shut-the-box", "jane-street-puzzle-november-2025"],
    ["what-would-we-still-want-to-make", "amodeis-experience-machine"],
  ]) {
    const rule = redirects.find(rule => rule.source === `/writing/${oldSlug}`);
    assert(rule?.permanent && rule.destination === `/writing/${newSlug}`, `Broken redirect from /writing/${oldSlug}`);
    assert(writingEntries.some(entry => entry.slug === newSlug), `Missing redirect destination /writing/${newSlug}`);
  }
  console.log(`Verified index and homepage links, detail routes and legacy redirects for ${projects.length} projects and ${writingEntries.length} articles.`);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
