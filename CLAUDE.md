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

Next.js 15 App Router, React 19, TypeScript, and Tailwind. Most page content renders on the server; client components handle timeline switching, list scroll memory, and the native-dialog photo viewer.

- `/` opens directly to Projects. The home page reads a `section` query parameter for Experience & Education, Writing, and Lifestyle.
- `/projects/[slug]` and `/writing/[slug]` render individual entries; registered entries are prerendered. Unknown entries return a 404.
- `src/components/portfolio/portfolio-shell.tsx` supplies the shared menu and page container. Desktop uses a fixed side menu; mobile uses a header with navigation and contacts.
- Window scrolling is the primary scroll container. `scroll-memory.tsx` preserves each overview's position for return navigation.
- `src/content/projects/` and `src/content/writing/` contain one typed record per entry and an explicit index. `publishedAt` sorts newest first; project periods are separate metadata.
- `src/content/types.ts` defines metadata and article text/image/math blocks. `src/components/article/` renders the shared detail layout, contents links, figures, and KaTeX math.
- `src/content/media.ts` supplies intrinsic dimensions for article images. Optimized writing assets live in `public/images/writing/`; original assets remain available.
- Experience and Education data remain in `src/components/tab-viewer/entries/`. Their shared panel renders one timeline at a time.
- Lifestyle uses an inline video and `PhotoGallery`, which opens images in a native dialog with next/previous, arrow keys, Escape, and native focus return.
- `/backend/api/resume-download` is the existing resume endpoint.
- `archive/` is excluded from TypeScript and contains earlier designs, not active routes.

Use `@/` for imports from `src/`. Keep metadata, content, and rendering separate. Update `BACKLOG.md` as work progresses; link evidence for numerical claims and do not fill unknown project details with invented facts. No MDX pipeline, CMS, or database is configured.
