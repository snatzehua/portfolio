# Kieran Ho — portfolio

A Next.js portfolio with a compact home overview, four section pages, an expandable desktop side menu, responsive mobile navigation, and dedicated project case studies and articles.

## Run locally

Use npm from `my-portfolio/`:

```sh
npm install
npm run dev
```

The Overview previews Projects, Background (experience and education), Lifestyle, and Extras, in that order. Each overview opens its full section at `/projects`, `/experience`, `/lifestyle`, or `/writing` (Extras). Each section shows all its subsections in one document: both experience/education timelines and all three Lifestyle interests remain visible. Project and writing cards open `/projects/<slug>` and `/writing/<slug>`; their Back links return to the section page.

The sidebar presents Overview as the parent of the four indented sections, using nested lists and a branch line. It expands only the selected section. Selecting another section closes the previous group; selecting Overview closes all groups. There are no separate expansion buttons. Long submenus scroll within a compact area on phones. Subsection links go to anchors within the relevant section page, including when followed from Overview or another section. Individual entries stay highlighted while their detail page is open. Old `/?section=...` links redirect to the corresponding section page; home `/#projects` etc. still locate their overview.

“Extras” is the working label for writing, puzzles, competition efforts, and other work outside the main three sections. Its existing `/writing` and `/writing/<slug>` URLs and content records stay in place while the name is being considered.

## Add or edit content

- Projects: one typed content file in `my-portfolio/src/content/projects/`; register it in that folder's `index.ts`.
- Writing: one typed content file in `my-portfolio/src/content/writing/`; register it in that folder's `index.ts`.
- Experience and Education: the corresponding files in `my-portfolio/src/components/tab-viewer/entries/`.
- Lifestyle: `my-portfolio/src/components/tab-viewer/lifestyle-panel.tsx`.
- Shared article rendering: `my-portfolio/src/components/article/`.
- Page layout and responsive styling: `my-portfolio/src/components/portfolio/` and `my-portfolio/src/components/sidebar/`.

`publishedAt` controls newest-first ordering. It describes the write-up, separately from the project's working period. The project collection includes ten entries drafted from local repositories on 30 October 2026, an updated GDELT research summary, and the existing OpenClaw note; older writing retains its existing month-level dates. These are editable content dates, not deployment timestamps.

Each article section has a stable, unique `id` for its contents link. Optional project `repository` and `demo` URLs appear only when supplied. Do not invent URLs, metrics, contribution details, or project outcomes.

The content uses typed TypeScript records and shared text/image/math blocks. MDX is not required or configured. Add a block type when a real content need arises.

Images belong in `my-portfolio/public/images/`. Add article-image dimensions to `my-portfolio/src/content/media.ts`. The writing images have optimized WebP copies under `public/images/writing/`; the original images remain available. Body images load only on article pages and use native lazy loading with reserved aspect ratios.

The shared shell displays the original mountain photograph once as a continuous backdrop. The greeting banner is above Overview, spanning from the sidebar edge to the right browser edge without a top gap. The sidebar name and short bio are restored. The shared frame stays mounted between routes so the banner can shrink before navigation; incoming page content expands slightly and fades in. Sidebar submenus animate their height and opacity. Reduced-motion preferences skip these effects. The sidebar uses a softly washed plywood texture; see `public/images/textures/README.md` for source and CC0 attribution. The main panel retains the original white pegboard pattern, on a flat surface, without the layered edge or cast shadow. All four overview panels share one height at each responsive breakpoint. All four panels have a shared middle divider (horizontal in the stacked layout). Projects, Lifestyle, and Extras use full-size images at full opacity, with a strong white fade from the text toward the image edge and top/bottom fades. Lifestyle retains its forest backdrop and preview copy, with the two blacksmithing polaroids at the far right of that preview; the full blacksmithing write-up also places the browsable polaroids to the right on desktop, stacking them below on phones. Background shows only the current role; `isCurrent` in the experience entries controls it (Govtech internship, confirmed by the author). The centered polaroid is decorative, without a link or pointer cursor; the forest path photograph backs the Lifestyle overview preview. Background has no stock photograph. Root and menu overscroll are disabled, and the main content uses the document scrollbar.

All four section indexes and individual project/Extras entries share the paper surface from `section-header.tsx`. On section indexes, the Overview link, title, description, and count sit together on an opaque paper surface aligned with each page’s content. Individual entries place their Back link, title, summary, and metadata together on that same surface. Background uses two year-grouped paper lists, with aligned logos, consistent separators, and a current-role badge.

Projects can supply `coverSteps`, a three-label tuple for the shared cover diagram. Existing `cover` images remain a fallback; detailed results charts belong inside the case study. The project's `outcome` supplies both its card takeaway and the detail page's current-result summary.

## Checks

Run from `my-portfolio/`:

```sh
npm run check:content
npm run typecheck
npm run build
```

The content check catches duplicate/invalid slugs and section IDs, invalid dates, empty sections, missing images/dimensions, and incorrect ordering. Check navigation, Back links and scroll restoration, photo-viewer keyboard controls, and mobile layouts in a browser after changing behaviour.

## Planning

- [Portfolio backlog](BACKLOG.md): ideas, remaining content work, completed changes, and decisions.
- [Local project inventory](docs/local-project-inventory.md): source snapshots, imported entries, and remaining factual review.
- [Project case-study template](docs/project-case-study-template.md): an outline for explaining decisions, experiments, and results.

The backlog and template are repository documents, not public website pages. Previous UI implementations remain recoverable in Git history; older archived pages are in `my-portfolio/archive/` and are not app routes.
