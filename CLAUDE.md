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

- `/` is a short home overview with four previews, ordered Projects, Background, Lifestyle, and Extras, linking to `/projects`, `/experience`, `/lifestyle`, and `/writing`. Full timelines, galleries, project lists, and article lists render only on their section pages. Legacy `?section=...` URLs redirect to the section routes; home fragment anchors still locate each overview.
- `/projects/[slug]` and `/writing/[slug]` render individual entries; registered entries are prerendered. Unknown entries return a 404. Article Back links return to `/projects` or `/writing` (labelled Extras). Extras is a working display name; existing writing routes and content records remain stable.
- `src/components/portfolio/portfolio-frame.tsx` is mounted once in the root layout and supplies the persistent menu, backdrop, animated greeting banner, and route transitions. It delays ordinary same-origin route-link navigation by 280ms for the outgoing transition, while preserving same-page anchors, modifier clicks, downloads, and external links. `portfolio-shell.tsx` supplies each route’s board container. `home-overview.tsx` renders previews; `section-page.tsx` wraps each full section. Desktop uses a fixed side menu; mobile uses a header with navigation and contacts. `src/content/navigation.ts` defines parent routes and child links. Overview is the parent of the four sections in a nested list with indented child links. Sidebar expansion is derived only from the selected route, with no separate buttons or independent disclosure state; children jump to anchors on full section pages. Long mobile submenus are height-limited and scroll independently so entry content remains reachable. The portrait is decorative. The sidebar uses washed plywood; only the main panel uses the original white pegboard, as a flat surface with no layered edge or cast shadow. The greeting banner spans the entire width from the sidebar edge to the right browser edge, with no top gap on Overview, and shrinks out on section pages; the sidebar name and bio are restored. Sidebar groups animate between 0fr and 1fr with inert collapsed content. The home link is labelled Overview. Reduced-motion preferences bypass the route delay and animations.
- Window scrolling is the primary content scroll container. `scroll-memory.tsx` remembers the home position, while native fragment navigation takes priority when a URL has a hash. Keep `html`/`body` overscroll disabled; do not introduce nested scrolling for the main sections.
- The 12-project collection includes ten entries imported from local repository evidence; see `docs/local-project-inventory.md` for snapshots and unresolved authorship/source visibility checks. GDELT reflects the repository’s negative confirmatory result, not its earlier exploratory outperformance.
- `src/content/projects/` and `src/content/writing/` contain one typed record per entry and an explicit index. `publishedAt` sorts newest first; project periods are separate metadata.
- `src/content/types.ts` defines metadata and article text/image/math blocks. `src/components/article/` renders the shared detail layout, contents links, figures, and KaTeX math.
- `src/content/media.ts` supplies intrinsic dimensions for article images. Optimized writing assets live in `public/images/writing/`; original assets remain available.
- Home overview panels share a fixed height at each responsive breakpoint. All four previews share a middle divider, switching to horizontal in the stacked layout. Projects, Lifestyle, and Extras use full-opacity image backgrounds behind their preview text, preserving the strong white text-side fade and vertical opacity mask. Lifestyle restores its forest backdrop and preview copy, with both polaroids at the far right of the right-hand component; the full blacksmithing section uses the same side-by-side arrangement on desktop and stacks on phones. The Background preview has no stock photograph and displays only the experience entry marked `isCurrent` (Govtech, author-confirmed).
- All four section pages share `section-header.tsx`, an opaque paper header containing their Overview link, title, description, and count. `SectionPage` supplies only the board wrapper; each shared header owns exactly one return link. Individual project and Extras entries use the same exported `PaperHeader`, including their Back link and metadata.
- Experience and Education data remain in `src/components/tab-viewer/entries/`. Both timelines render as year-grouped paper lists with aligned logos and simple row separators, with `#work-experience` and `#education` targets.
- Lifestyle uses an inline video and `PhotoGallery`, which opens images in a native dialog with next/previous, arrow keys, Escape, and native focus return.
- `/backend/api/resume-download` is the existing resume endpoint.
- `archive/` is excluded from TypeScript and contains earlier designs, not active routes.

Use `@/` for imports from `src/`. Keep metadata, content, and rendering separate. Update `BACKLOG.md` as work progresses; link evidence for numerical claims and do not fill unknown project details with invented facts. No MDX pipeline, CMS, or database is configured.
