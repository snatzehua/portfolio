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

- `/` has a polaroid beside the full introduction, a decorative Japan landscape behind the intro, then a rotating three-interest project heading (static with reduced motion) and three selected projects, a compact Writing section with a pinned article and recent posts, a compact Background section, then a forest Lifestyle banner with the two blacksmithing polaroids. Full sections stay at `/projects`, `/experience`, `/lifestyle`, and `/writing`. Legacy `?section=...` URLs redirect to those routes; home fragment anchors remain available.
- `/projects/[slug]` and `/writing/[slug]` prerender registered entries and return 404 for unknown slugs. Keep existing URLs, anchors, Back links and factual content.
- `src/components/portfolio/portfolio-frame.tsx` supplies the horizontal `site-header.tsx`, document main and contact footer. Route changes use standard Next.js links with a short opacity/position entrance; reduced motion bypasses it. There is no delayed navigation interception. Phone navigation has an explicit Menu/Close button with expanded state, closes on navigation and supports Escape/focus return.
- The approved design is warm off-white `#F7F5EF`, charcoal `#272B28`, deep green `#244F3E`, clear sans-serif type, generous space, fine rules and open image/text project layouts. Preserve the polaroids. Do not reintroduce the removed sidebar, plywood or pegboard without a new request. On 15 November the user explicitly requested a green handwritten intro name; use the existing Reenie Beanie font for that name, as the page h1. The sans-serif interest heading now introduces the projects below the intro. The course/university line was subsequently removed at the user’s request. The top-left navigation link reads Overview. The navigation and homepage sections follow Projects, Writing, Background, Lifestyle. The user requested a subtle intro background on 15 November; keep that landscape confined to the intro and lightly faded.
- `portfolio-shell.tsx` supplies route spacing. Shared styles live in `portfolio/styles.css`; homepage composition is in `home-overview.tsx`, and cards are shared through `project-card.tsx`. The calendar homepage entry uses an actual sample-week interface capture, displays the canonical “Please Help Me” title and links to the actual Please Help Me scheduler. Its write-up distinguishes six implemented candidate strategies from still-unmeasured real-world benefits. `home-projects.tsx` rotates alternative data, AI assistants and algorithm design after “Looking into,” with clay-brown words and a matching card highlight from the same state. It rotates automatically every 2.5 seconds with no click control; pauses for card hover, section focus, offscreen/hidden state and reduced motion. Satellite crop forecasting uses the saved Haut-Rhin Sentinel-2 context image. Room replaces CareerSphere in the selected homepage projects and uses its existing illustrative banner without cropping. Other project cards retain the provenance-backed generated banners.
- Window scrolling is the primary scroll container. `scroll-memory.tsx` remembers the home position; native fragment navigation takes priority. Preserve the section anchors and avoid nested main scrolling.
- The 19-project collection includes six additions and five revisions from the full résumé on 15 November 2026, alongside the earlier imported entries; see `docs/local-project-inventory.md` for snapshots and unresolved authorship/source visibility checks. GDELT preserves the negative confirmatory result and distinguishes the later exploratory Sharpe comparison. Keep results tied to their strategy version, evaluation protocol and holdout limits.
- `src/content/projects/` and `src/content/writing/` contain one typed record per entry and an explicit index. `publishedAt` sorts source records newest first; project periods are separate metadata. The Projects index uses curated Research, Applications and Coursework collections plus the homepage’s selected work, from `project-collections.ts`.
- Project status remains typed and validated source metadata but is not rendered on project cards or detail pages. Project headers omit the separate outcome summary and contents navigation; group role, period and tools/topics below the introduction, followed by optional source links.
- `src/content/types.ts` defines metadata and article text/image/math blocks. `src/components/article/` renders the shared detail layout, figures, and KaTeX math.
- Satellite crop forecasting now covers the legacy French maize-yield work and the later regional all-crop production-index study. Phase one was archived on 18 November 2026 and further modelling is on hold; no candidate is promoted. Keep maize t/ha separate from production-change percentage points, retrospective gains separate from availability-aware evidence, and the Bretagne 2022 failure visible. Its source repository is private.
- Every project requires a full-width `cover` and `coverAlt`. Project cards omit technology tags; the write-ups retain them. `scripts/generate-project-covers.mjs` builds nineteen 1600×600 WebP covers from checked-in source data and assets; `scripts/project-cover-data/README.md` records provenance and limitations. No `coverSteps` fallback remains.
- `src/content/media.ts` supplies intrinsic dimensions for article images. Optimized writing assets live in `public/images/writing/`; original assets remain available.
- Homepage and index grids collapse to one column on phones. Avoid fixed-height text containers and image fades over project text. Keep the forest banner text readable and the polaroids clear of its links.
- `section-header.tsx` is a shared unboxed section header. `PaperHeader` remains its compatibility export for articles. Project articles use a compact details row, a cover, and a readable body with a sticky left quick-navigation rail and collapsible section menu on smaller screens; Writing articles omit contents navigation; all typed text/image/math sections remain intact.
- Experience and Education data remain in `src/components/tab-viewer/entries/`. Both timelines render as date-range rows sorted by end year descending (Present first), then start year descending, with aligned logos and simple row separators. Current rows have a green side rule and light tint, with `#work-experience` and `#education` targets.
- Lifestyle uses an inline video and `PhotoGallery`, which opens images in a native dialog with next/previous, arrow keys, Escape, and native focus return.
- The résumé download was removed on 23 November 2026. Do not restore the old Drive proxy or public résumé PDF without a new request.
- `archive/` is excluded from TypeScript and contains earlier designs, not active routes.

For project writeups, follow `docs/project-case-study-template.md` alongside the local voice guidance. Audit the source documents, code, saved results and figures before drafting; connect context, decisions, implementation and evidence, and mark missing author rationale explicitly. Review the complete narrative after additions rather than patching individual gaps in isolation.

Use `@/` for imports from `src/`. Keep metadata, content, and rendering separate. Update `BACKLOG.md` as work progresses; link evidence for numerical claims and do not fill unknown project details with invented facts. No MDX pipeline, CMS, or database is configured.

- Project navigation uses each section’s `title` directly; retain stable `id` values. Legacy `navTitle` metadata is unused. The editor has no separate navigation-label input, and its picker/save toolbar stays sticky. Technical image blocks use `diagram-viewer.tsx` for an accessible zoomable dialog. Preserve original source images and editorial gap markers. Section headers have no polaroids; the homepage portrait and Lifestyle photographs remain.

- `/edit` and `/api/editor/projects` are development-only local writing tools. Save uses canonical project files, strict JSON parsing (no source evaluation), revision checks, an exclusive per-file lock, atomic replacement, and ignored private `.local-content-backups/*.ts.bak` backups. Preserve image/diagram blocks and immutable source metadata. Do not enable the editor in production. `npm run test:editor` exercises temporary fixtures. The default dev server binds to 127.0.0.1.

- On 19 November 2026 the user requested year-only project periods: use `YYYY` or an ascending `YYYY–YYYY` span. `publishedAt` remains an internal ISO sorting date and is not the displayed project period; writing and Background dates are unchanged. `project-dates.ts`, the content validator and local editor enforce the public period format.
- Public full writeups currently include State of the Strait, CareerSphere, Please Help Me (`please-help-me`), Satellite crop forecasting and GDELT. `project-writeups.ts` shows a WIP placeholder for the other fourteen projects while retaining their complete source drafts and editor previews. A WIP marker describes the writeup, not whether the project itself is finished. Do not delete preserved sections or reintroduce their full public bodies without an explicit content decision.

- On 23 November 2026 the author renamed Extras to Writing across navigation, homepage headings, page metadata and article back links. Keep `/writing`, its article slugs and archive intact. The homepage uses a compact full-width Writing layout with real published entries: smaller titles, original dates and two-line previews of each article’s opening text, with full prose kept in the articles. Sample article ideas and the experimental index/reading views remain development-only at `?preview=writing`.

- On 24 November 2026 the author approved publication of “State of Affairs” at `/writing/state-of-affairs`, with its supplied prose, three source links, corrected timeline wording and revised ending. It is explicitly pinned on the homepage through `WritingEntry.pinned`, independently of date ordering. Keep only one pinned entry. `ArticleSection.hideTitle` supports this continuous essay without introducing editorial subheadings.

- Writing previews on the homepage are full-area links with title-based accessible names, subtle hover/focus feedback and reduced-motion support. `writing-excerpt.ts` derives plain-text previews from the article opening (falling back to the first text block) and removes inline-link syntax to avoid nested links. Both homepage and archive previews are capped at two lines. “State of Affairs” includes the author-supplied DTU photograph after the exchange paragraph; the full frame is preserved and the optimized image also supplies its archive thumbnail.

- Writing article figures default to 85% of the reading-column width, centered, with narrower image limits preserved. This is the author-requested default for future Writing images; the scoped CSS rule includes the rationale. Project figures retain their existing sizing.
