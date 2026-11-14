# Repository guide

## Commands

Run from `my-portfolio/`; use npm and the committed `package-lock.json`.

```sh
npm install
npm run dev
npm run check:content
npm run typecheck
npm run build
npm run start
```

There is no unit-test framework. Use the content validator, TypeScript, production build, and browser checks appropriate to changed behaviour.

## Current architecture

- Approved baseline: on 2026-11-14 the user locked in the implemented design at `http://localhost:3100/`. Make subsequent changes incrementally from this implementation. Retain the polaroids and the current visual system unless the user explicitly changes direction; do not substitute the rejected mockup explorations. Reference screenshots: `output/playwright/redesign-home-desktop.png` and `output/playwright/redesign-home-mobile.png`.
Next.js 15 App Router, React 19, TypeScript, and Tailwind. Most page content renders on the server; client components handle active-route highlighting, home scroll memory, transitions, and the native-dialog photo viewer.

- `/` has a polaroid introduction, three selected projects, a forest Lifestyle banner with the two blacksmithing polaroids, and compact Background/Extras sections. Full sections stay at `/projects`, `/experience`, `/lifestyle`, and `/writing`. Legacy `?section=...` URLs redirect to those routes; home fragment anchors remain available.
- `/projects/[slug]` and `/writing/[slug]` prerender registered entries and return 404 for unknown slugs. Keep existing URLs, anchors, Back links and factual content.
- `src/components/portfolio/portfolio-frame.tsx` supplies the horizontal `site-header.tsx`, document main and contact footer. Route changes use standard Next.js links with a short opacity/position entrance; reduced motion bypasses it. There is no delayed navigation interception. Phone navigation has an explicit Menu/Close button with expanded state, closes on navigation and supports Escape/focus return.
- The approved design is warm off-white `#F7F5EF`, charcoal `#272B28`, deep green `#244F3E`, clear sans-serif type, generous space, fine rules and open image/text project layouts. Preserve the polaroids. Do not reintroduce the removed sidebar, plywood, pegboard, handwritten hero or mountain backdrop without a new request.
- `portfolio-shell.tsx` supplies route spacing. Shared styles live in `portfolio/styles.css`; homepage composition is in `home-overview.tsx`, and cards are shared through `project-card.tsx`. The calendar homepage entry is text-only; State of the Strait uses the saved satellite preview and CareerSphere the original team diagram. Other project cards retain the provenance-backed generated banners.
- Window scrolling is the primary scroll container. `scroll-memory.tsx` remembers the home position; native fragment navigation takes priority. Preserve the section anchors and avoid nested main scrolling.
- The 12-project collection includes ten entries imported from local repository evidence; see `docs/local-project-inventory.md` for snapshots and unresolved authorship/source visibility checks. GDELT reflects the repository’s negative confirmatory result, not its earlier exploratory outperformance.
- `src/content/projects/` and `src/content/writing/` contain one typed record per entry and an explicit index. `publishedAt` sorts newest first; project periods are separate metadata.
- `project-status-badge.tsx` renders the shared status treatment on cards, detail pages, and the featured overview. Allowed values are In progress, Completed, Paused, and Archived; use the named `ProjectStatus` type and preserve the approved muted palette.
- `src/content/types.ts` defines metadata and article text/image/math blocks. `src/components/article/` renders the shared detail layout, contents links, figures, and KaTeX math.
- Every project requires a full-width `cover` and `coverAlt`. Project cards omit technology tags; the write-ups retain them. `scripts/generate-project-covers.mjs` builds twelve 1600×600 WebP covers from checked-in source data and assets; `scripts/project-cover-data/README.md` records provenance and limitations. No `coverSteps` fallback remains.
- `src/content/media.ts` supplies intrinsic dimensions for article images. Optimized writing assets live in `public/images/writing/`; original assets remain available.
- Homepage and index grids collapse to one column on phones. Avoid fixed-height text containers and image fades over project text. Keep the forest banner text readable and the polaroids clear of its links.
- `section-header.tsx` is a shared unboxed section header. `PaperHeader` remains its compatibility export for articles. Project articles use wrapping anchor navigation and a cover above a readable body; all typed text/image/math sections remain intact.
- Experience and Education data remain in `src/components/tab-viewer/entries/`. Both timelines render as year-grouped paper lists with aligned logos and simple row separators, with `#work-experience` and `#education` targets.
- Lifestyle uses an inline video and `PhotoGallery`, which opens images in a native dialog with next/previous, arrow keys, Escape, and native focus return.
- `/backend/api/resume-download` is the existing resume endpoint.
- `archive/` is excluded from TypeScript and contains earlier designs, not active routes.

Use `@/` for imports from `src/`. Keep metadata, content, and rendering separate. Update `BACKLOG.md` as work progresses; link evidence for numerical claims and do not fill unknown project details with invented facts. No MDX pipeline, CMS, or database is configured.
