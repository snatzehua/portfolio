# Kieran Ho — portfolio

A Next.js portfolio with a warm off-white surface, horizontal navigation, a project-led homepage, original polaroids, and dedicated project case studies and articles.

## Run locally

Use npm from `my-portfolio/`:

```sh
npm install
npm run dev
```

The homepage introduces Kieran with the original polaroid portrait, then shows three selected projects, a forest photograph with the two blacksmithing polaroids, and compact Background and Extras sections. The four full sections remain at `/projects`, `/experience`, `/lifestyle`, and `/writing`. Project and writing cards open `/projects/<slug>` and `/writing/<slug>`; Back links return to their section page.

The horizontal header links to the four sections and email. The name links to the homepage. At phone widths, a Menu button opens the same navigation; Escape closes it and returns focus. The active section stays highlighted on detail routes. Existing fragment anchors and legacy `/?section=...` redirects remain supported. The footer supplies contact links and a return to the top.

“Extras” is the working label for writing, puzzles, competition efforts, and other work outside the main three sections. Its existing `/writing` and `/writing/<slug>` URLs and content records stay in place while the name is being considered.

## Add or edit content

- Projects: one typed content file in `my-portfolio/src/content/projects/`; register it in that folder's `index.ts`.
- Writing: one typed content file in `my-portfolio/src/content/writing/`; register it in that folder's `index.ts`.
- Experience and Education: the corresponding files in `my-portfolio/src/components/tab-viewer/entries/`.
- Lifestyle: `my-portfolio/src/components/tab-viewer/lifestyle-panel.tsx`.
- Shared article rendering: `my-portfolio/src/components/article/`.
- Page layout and responsive styling: `my-portfolio/src/components/portfolio/` (including `site-header.tsx` and `styles.css`).

`publishedAt` controls newest-first ordering. It describes the write-up, separately from the project's working period. The project collection includes ten entries drafted from local repositories on 30 October 2026, an updated GDELT research summary, and the existing OpenClaw note; older writing retains its existing month-level dates. These are editable content dates, not deployment timestamps.

Project status is restricted to `In progress`, `Completed`, `Paused`, or `Archived` by the shared TypeScript type and content validator. `In progress` covers unfinished work; `Completed` means the stated implementation or study is finished, without implying production readiness. `Paused` means deliberately put on hold; `Archived` means retained for reference with no further development planned. Project type belongs in the description/role, and technologies belong in tags. A shared status badge appears on project cards, detail pages, and the featured overview. Its text/dot and pale background use dusty blue (`#365A78` / `#EDF3F8`) for In progress, forest green (`#3E6547` / `#EEF4EE`) for Completed, muted amber (`#806127` / `#FBF4E5`) for Paused, and warm grey (`#66645F` / `#F0EFEC`) for Archived.

Each article section has a stable, unique `id` for its contents link. Optional project `repository` and `demo` URLs appear only when supplied. Do not invent URLs, metrics, contribution details, or project outcomes.

The content uses typed TypeScript records and shared text/image/math blocks. MDX is not required or configured. Add a block type when a real content need arises.

Images belong in `my-portfolio/public/images/`. Add article-image dimensions to `my-portfolio/src/content/media.ts`. The writing images have optimized WebP copies under `public/images/writing/`; the original images remain available. Body images load only on article pages and use native lazy loading with reserved aspect ratios.

The design follows the user-selected clean reference: warm off-white (`#F7F5EF`), charcoal (`#272B28`), deep green (`#244F3E`), humanist sans-serif typography, fine dividers and open project layouts. The old plywood sidebar, pegboard and mountain backdrop are no longer rendered. Original image files remain available.

The original portrait stays in its polaroid frame, with a restrained rotation. Both blacksmithing polaroids appear beside the forest homepage banner and remain browsable in Lifestyle. The photography grid and photo-viewer keyboard controls are preserved. The page uses the document scrollbar, with reduced-motion support for the short page entrance.

`home-overview.tsx` selects State of the Strait, CareerSphere and the local calendar assistant. `project-card.tsx` uses the saved satellite preview and team diagram for the first two homepage entries; the calendar entry is text-only. All project-index cards retain their generated full-width banners, status, role and period. Detailed project records, results and provenance are unchanged; this redesign is not a factual refresh.

Section and article headers sit directly on the page surface. Project articles retain their metadata, current-result summary, source links and all content sections, with wrapping contents links and a cover image above the body. Background retains its year-grouped work and education lists. Article images and galleries preserve their source captions and intrinsic dimensions.

Run `npm run generate:covers` from `my-portfolio/` to rebuild all twelve 1600×600 WebP banners using deterministic SVG composition, source imagery, and checked-in data snapshots. The generator uses pinned Sharp 0.33.5. Banner URLs include their generated content hash so regenerated artwork refreshes immediately. Source provenance, data qualifications, and regeneration instructions are in `my-portfolio/scripts/project-cover-data/README.md` and `public/images/projects/banners/manifest.json`. No models, live APIs, personal calendars, or contact data are needed. Detailed article figures remain intact.

Use the [project banner guide](docs/project-banner-guide.md) for future items: it includes an authoring brief, context-specific style references, geometry rules, and the generation/review workflow. `npm run check:content` validates banner provenance and file integrity as well as content. `npm run preview:covers` generates an ignored contact sheet at `.banner-preview/projects.webp` for review at card size.

Polaroid rotations are restrained: the introduction portrait is −2°, gallery photos are ±2°, and the homepage blacksmithing pair is ±5°.

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
