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

Next.js 15 App Router, React 19, TypeScript, and Tailwind. Most page content renders on the server; client components handle expandable menu groups, active-route and hash highlighting, home scroll memory, and the native-dialog photo viewer.

- `/` is a short home overview with four previews, linking to `/projects`, `/experience`, `/writing`, and `/lifestyle`. Full timelines, galleries, project lists, and article lists render only on their section pages. Legacy `?section=...` URLs redirect to the section routes; home fragment anchors still locate each overview.
- `/projects/[slug]` and `/writing/[slug]` render individual entries; registered entries are prerendered. Unknown entries return a 404. Article Back links return to `/projects` or `/writing`.
- `src/components/portfolio/portfolio-shell.tsx` supplies the shared menu and board container. `home-overview.tsx` renders previews; `section-page.tsx` wraps each full section. Desktop uses a fixed side menu; mobile uses a header with navigation and contacts. `src/content/navigation.ts` defines parent routes and child links. Sidebar groups automatically expand for the active route; children jump to anchors on full section pages. The portrait is decorative. The sidebar uses washed plywood; only the main panel uses the original white pegboard, with layered edge shadows giving it thickness.
- Window scrolling is the primary content scroll container. `scroll-memory.tsx` remembers the home position, while native fragment navigation takes priority when a URL has a hash. Keep `html`/`body` overscroll disabled; do not introduce nested scrolling for the main sections.
- `src/content/projects/` and `src/content/writing/` contain one typed record per entry and an explicit index. `publishedAt` sorts newest first; project periods are separate metadata.
- `src/content/types.ts` defines metadata and article text/image/math blocks. `src/components/article/` renders the shared detail layout, contents links, figures, and KaTeX math.
- `src/content/media.ts` supplies intrinsic dimensions for article images. Optimized writing assets live in `public/images/writing/`; original assets remain available.
- Experience and Education data remain in `src/components/tab-viewer/entries/`. Both timelines render sequentially, with `#work-experience` and `#education` targets.
- Lifestyle uses an inline video and `PhotoGallery`, which opens images in a native dialog with next/previous, arrow keys, Escape, and native focus return.
- `/backend/api/resume-download` is the existing resume endpoint.
- `archive/` is excluded from TypeScript and contains earlier designs, not active routes.

Use `@/` for imports from `src/`. Keep metadata, content, and rendering separate. Update `BACKLOG.md` as work progresses; link evidence for numerical claims and do not fill unknown project details with invented facts. No MDX pipeline, CMS, or database is configured.
