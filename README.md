# Kieran Ho — portfolio

A Next.js portfolio with one continuous home page, an expandable desktop side menu, responsive mobile navigation, and dedicated pages for project case studies and writing.

## Run locally

Use npm from `my-portfolio/`:

```sh
npm install
npm run dev
```

The home page scrolls through Projects, Experience & Education, Writing, and Lifestyle in one document. The menu jumps to `/#projects`, `/#experience`, `/#writing`, and `/#lifestyle`; expandable groups link to project cards, both timelines, article cards, and individual interests. The active menu marker follows the scroll position. Old `/?section=...` links redirect to their equivalent anchors. Detail pages still use `/projects/<slug>` and `/writing/<slug>`, with Back links to the appropriate home-page section.

## Add or edit content

- Projects: one typed content file in `my-portfolio/src/content/projects/`; register it in that folder's `index.ts`.
- Writing: one typed content file in `my-portfolio/src/content/writing/`; register it in that folder's `index.ts`.
- Experience and Education: the corresponding files in `my-portfolio/src/components/tab-viewer/entries/`.
- Lifestyle: `my-portfolio/src/components/tab-viewer/lifestyle-panel.tsx`.
- Shared article rendering: `my-portfolio/src/components/article/`.
- Page layout and responsive styling: `my-portfolio/src/components/portfolio/` and `my-portfolio/src/components/sidebar/`.

`publishedAt` controls newest-first ordering. It describes the write-up, separately from the project's working period. The two initial project notes are dated 29 October 2026, when these pages were authored; older writing retains its existing month-level dates. These are editable content dates, not deployment timestamps.

Each article section has a stable, unique `id` for its contents link. Optional project `repository` and `demo` URLs appear only when supplied. Do not invent URLs, metrics, contribution details, or project outcomes.

The content uses typed TypeScript records and shared text/image/math blocks. MDX is not required or configured. Add a block type when a real content need arises.

Images belong in `my-portfolio/public/images/`. Add article-image dimensions to `my-portfolio/src/content/media.ts`. The writing images have optimized WebP copies under `public/images/writing/`; the original images remain available. Body images load only on article pages and use native lazy loading with reserved aspect ratios.

The shared shell displays the original mountain photograph once as a continuous backdrop. The borderless welcome area reveals that same image through a gradient. The sidebar and main reading panel use the original white pegboard pattern. The centered polaroid is decorative, without a link or pointer cursor; the forest path photograph heads Lifestyle. Detail pages omit the welcome area. Root and menu overscroll are disabled, and the main content uses the document scrollbar.

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
- [Project case-study template](docs/project-case-study-template.md): an outline for explaining decisions, experiments, and results.

The backlog and template are repository documents, not public website pages. Previous UI implementations remain recoverable in Git history; older archived pages are in `my-portfolio/archive/` and are not app routes.
