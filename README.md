# Kieran Ho — portfolio

A Next.js portfolio with a warm off-white surface, horizontal navigation, a project-led homepage, original polaroids, and dedicated project case studies and articles.

## Run locally

Use npm from `my-portfolio/`:

```sh
npm install
npm run dev
```

The homepage introduces Kieran with the original polaroid portrait, then shows three selected projects, a compact Writing section with a pinned article and recent posts, a compact Background section, then a forest photograph with the two blacksmithing polaroids. The four full sections remain at `/projects`, `/experience`, `/lifestyle`, and `/writing`. Project and writing cards open `/projects/<slug>` and `/writing/<slug>`; Back links return to their section page.

The horizontal header links to the four sections and email. The name links to the homepage. At phone widths, a Menu button opens the same navigation; Escape closes it and returns focus. The active section stays highlighted on detail routes. Existing fragment anchors and legacy `/?section=...` redirects remain supported. The footer supplies contact links and a return to the top.

Writing is the home for learning notes, opinions, updates, puzzle walkthroughs and competition reflections. The author adopted this label on 23 November 2026. Existing `/writing` and `/writing/<slug>` URLs and content records are preserved; the homepage previews published posts with full-area links and two-line article openings, while sample article ideas and the experimental index remain development-only.

## Add or edit content

- Projects: one typed content file in `my-portfolio/src/content/projects/`; register it in that folder's `index.ts`.
- Writing: one typed content file in `my-portfolio/src/content/writing/`; register it in that folder's `index.ts`. Set `pinned: true` on at most one entry to keep it featured on the homepage independently of publication date. A section can set `hideTitle: true` for a continuous essay without added subheadings.
- Experience and Education: the corresponding files in `my-portfolio/src/components/tab-viewer/entries/`.
- Lifestyle: `my-portfolio/src/components/tab-viewer/lifestyle-panel.tsx`.
- Shared article rendering: `my-portfolio/src/components/article/`.
- Page layout and responsive styling: `my-portfolio/src/components/portfolio/` (including `site-header.tsx` and `styles.css`).

`publishedAt` controls the underlying newest-first ordering; the Projects page presents curated collections. It describes the write-up, separately from the project's working period. The collection has 19 projects. On 15 November 2026, the full résumé and its supporting project notes supplied six new entries and five revised entries; the older projects remain available. These are editable content dates, not deployment timestamps.

Project status is restricted to `In progress`, `Completed`, `Paused`, or `Archived` by the shared TypeScript type and content validator. `In progress` covers unfinished work; `Completed` means the stated implementation or study is finished, without implying production readiness. `Paused` means deliberately put on hold; `Archived` means retained for reference with no further development planned. Project type belongs in the description/role, and technologies belong in tags. Status remains validated source metadata and is not displayed on project cards or detail pages.

Each article section has a stable, unique `id` for direct section links. Optional project `repository` and `demo` URLs appear only when supplied. Do not invent URLs, metrics, contribution details, or project outcomes.

The content uses typed TypeScript records and shared text/image/math blocks. MDX is not required or configured. Add a block type when a real content need arises.

Images belong in `my-portfolio/public/images/`. Add article-image dimensions to `my-portfolio/src/content/media.ts`. The writing images have optimized WebP copies under `public/images/writing/`; the original images remain available. Body images load only on article pages and use native lazy loading with reserved aspect ratios.

The design follows the user-selected clean reference: warm off-white (`#F7F5EF`), charcoal (`#272B28`), deep green (`#244F3E`), humanist sans-serif typography, fine dividers and open project layouts. The old plywood sidebar, pegboard and mountain backdrop are no longer rendered. Original image files remain available.

The original portrait stays in its polaroid frame, with a restrained rotation. Both blacksmithing polaroids appear beside the forest homepage banner and remain browsable in Lifestyle. The photography grid and photo-viewer keyboard controls are preserved. The page uses the document scrollbar, with reduced-motion support for the short page entrance.

`home-overview.tsx` selects Satellite crop forecasting, CareerSphere and the Please Help Me scheduler. `project-card.tsx` uses the saved Haut-Rhin Sentinel-2 context image and team diagram for the first two homepage entries; the scheduler uses an actual calendar screenshot with built-in sample data. All three homepage project cards have matching image proportions. The “Looking into” project heading cycles through three interests and highlights the corresponding card; rotation is automatic every 2.5 seconds, with interaction pausing and reduced motion supported. All project-index cards retain their generated full-width banners, role and period. Detailed project records, results and provenance are unchanged; this redesign is not a factual refresh.

Section and article headers sit directly on the page surface. Project articles lead with the title and summary, followed by a divided details row for role, period and tools/topics, optional source links, then the cover and content. Status and the separate “Where it stands” summary are omitted. Project sections have a sticky quick-navigation rail using section headings and a collapsible mobile menu; factual source records and section anchors remain intact. Writing articles use the same simplified title-first header, a supporting subtitle and compact topic tags, with no contents navigation. Background shows work and education date ranges, sorted by end year then start year (newest first, Present first). Present rows use a green side rule and subtle tint. NUS contract and teaching roles are consolidated under one completed 2024–2026 work entry, with individual roles listed as bullets. Article images and galleries preserve their source captions and intrinsic dimensions.

Run `npm run generate:covers` from `my-portfolio/` to rebuild all nineteen 1600×600 WebP banners using deterministic SVG composition, source imagery, and checked-in data snapshots. The generator uses pinned Sharp 0.33.5. Banner URLs include their generated content hash so regenerated artwork refreshes immediately. Source provenance, data qualifications, and regeneration instructions are in `my-portfolio/scripts/project-cover-data/README.md` and `public/images/projects/banners/manifest.json`. No models, live APIs, personal calendars, or contact data are needed. Detailed article figures remain intact.

Use the [project banner guide](docs/project-banner-guide.md) for future items: it includes an authoring brief, context-specific style references, geometry rules, and the generation/review workflow. `npm run check:content` validates banner provenance and file integrity as well as content. `npm run preview:covers` generates an ignored contact sheet at `.banner-preview/projects.webp` for review at card size.

Polaroid rotations are restrained: the introduction portrait is −2°, gallery photos are ±2°, and the homepage blacksmithing pair is ±5°.

## Checks

The content validator includes Background titles, dates, details and logo files alongside project and writing records. The old résumé-download endpoint and bundled PDF were removed on 23 November 2026; the portfolio does not host a résumé download.

Run from `my-portfolio/`:

```sh
npm run check:content
npm run typecheck
npm run build
```

The content check catches duplicate/invalid slugs and section IDs, invalid dates, empty sections, missing images/dimensions, and incorrect ordering. Check navigation, Back links and scroll restoration, photo-viewer keyboard controls, and mobile layouts in a browser after changing behaviour.

## Planning

- [Writing concept](docs/writing-section-prototype.md): local prototype for a Writing section containing learning notes, opinions, updates and existing puzzles; preview with `/?preview=writing#writing` in development.
- [Application-readiness audit](docs/application-readiness-audit-2026-11-23.md): local fixes, remaining author-input notes, verification and the gap between the local version and the live domain.
- [Portfolio backlog](BACKLOG.md): ideas, remaining content work, completed changes, and decisions.
- [Local project inventory](docs/local-project-inventory.md): source snapshots, imported entries, and remaining factual review.
- [Project writeup structure](docs/project-case-study-template.md): source review, context, decisions and pivots, implementation, validation, results, figures, and editorial gap markers.
- [Featured writeup source review](docs/writeup-source-audit-2026-11-19.md): the November research repair, source updates and ownership/evidence boundaries across the four priority projects.

The backlog and template are repository documents, not public website pages. Previous UI implementations remain recoverable in Git history; older archived pages are in `my-portfolio/archive/` and are not app routes.

### Project browsing improvements — 18 November 2026

The Projects page leads with the same three selected projects as the homepage, then groups the remaining entries into Research, Applications and Coursework. Filters display the complete selected collection, including projects featured at the top of All. Each of the nineteen projects appears once per view; collection membership and selection live in `src/content/project-collections.ts` and are checked by content validation.

Quick-navigation labels match the section headings, with anchor IDs preserved. Original technical images expand into a native modal viewer with zoom, Fit reset, scroll-to-explore, keyboard focus management and an original-image link. Repeated copy was trimmed in six project pages without changing evidence or removing the nine author-input markers. Section headers remain text-only.

### Local writing editor

Start the development server from `my-portfolio` with `npm run dev -- --port 3100`, then open [localhost:3100/edit](http://localhost:3100/edit) or use **Edit content** in the footer. The dev server binds to this machine's loopback interface. The editor and its APIs return 404 in production.

Choose a project, edit its title, summary and section paragraphs, and use the adjacent live preview. The project picker and save controls stay sticky while scrolling; navigation labels follow section headings automatically. On phones, switch between Edit and Preview. Sections can be added and reordered; images and diagrams are preserved automatically, and sections containing them cannot be removed in the editor. Project details expands the role, period, outcome and topic fields. Saved source identity, publication dates, cover images and source links stay outside the editing controls.

**Save changes** validates the project and writes its canonical `src/content/projects/<file>.ts` source; the portfolio updates through normal development hot reload. Every successful save backs up the exact previous source to `my-portfolio/.local-content-backups/*.ts.bak` (ignored by Git). If another save or a source-file edit makes the browser copy stale, the editor keeps the draft and offers download/reload recovery. It also warns before switching projects or following links with unsaved edits.

Run `npm run test:editor` for the fixture-based persistence, authorization, backup, stale-save and media-preservation checks. Production build checks must run while the dev server is stopped, since both use `.next`.
