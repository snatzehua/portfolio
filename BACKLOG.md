# Portfolio backlog

Updated: 2026-11-24

Purpose: make the portfolio easier to maintain and expand projects into case studies that show how decisions were made.

## How to use this log

- Add rough ideas to Inbox immediately; they do not need a full specification.
- Move an idea into Planned when its outcome is clear. Priorities below are recommendations, not commitments.
- Work on one item at a time. Mark it In progress, then Done with a date and commit reference when applicable.
- Keep completed items here. Git records file changes; this log records intent and what remains.
- Record decisions only when they affect future work, including why an alternative was rejected.

## Inbox

Add new ideas below, one per line:

- Expand Writing with Codeforces competitions and practice efforts once the author supplies the entries, dates, links, and any results.

## Planned

| ID | Priority | Item | Origin | Done when |
| --- | --- | --- | --- | --- |
| P01 | Next | Deepen project case studies with first-hand evidence | User requested deeper project explanations | The repository-grounded summaries are expanded with actual alternatives, experiments, failure cases, and concrete ownership; missing facts are supplied by the author. |
| P04 | Next | Finish the factual audit of project cards | Existing content needs author confirmation | Confirm individual contributions, exact dates, current status, and repository/demo visibility for the imported entries. GDELT now reflects its negative confirmatory result; no earlier outperformance claim remains. See the local project inventory. |
| P09 | Later | Improve media descriptions and education details | Follow-up from implementation | Replace generic photography alt text with scene descriptions; confirm GPA/year-of-study wording and any changed experience/education facts. |
| P10 | Next | Resolve the remaining public author-input notes | Application-readiness audit, 23 November 2026 | Supply the five missing personal-context answers or explicitly choose their public treatment. The reviewed portfolio was deployed and its public routes verified on 23 November 2026. |
| P11 | Next | Review the Writing layout and initial posts | Author requested a blog-style landing section, 23 November 2026 | Review the experimental index and reading layout separately from the published archive. The author approved “State of Affairs” as the first new reflection; keep sample ideas in the development preview. See `docs/writing-section-prototype.md`. |

## In progress

None.

## Done

- 2026-11-24: Matched homepage Writing previews to the project-card action and hover treatment: added “View article →” beneath each opening excerpt, reused the shared underline/arrow animation and title colour feedback, and removed the separate lift/background tint. Full-area links and reduced-motion support remain.

- 2026-11-24: Removed puzzle previews from the landing page at the author's request. The homepage Writing selection excludes entries tagged Puzzles and uses one full-width preview when only the pinned reflection is present. Both puzzle posts remain in the Writing archive and at their existing URLs.

- 2026-11-24: Published the complete Writing update through GitHub → Vercel, commit `eda9433`. “State of Affairs” is live at `https://snatzehua.com/writing/state-of-affairs` and pinned on the landing page. Verified Room selection, full-area previews, hover/focus and reduced-motion behaviour, two-line article openings, DTU photo/thumbnail and centered 85%-width figures on desktop and mobile. All 35 production route/status checks passed. Evidence: `output/deployment-2026-11-24/`.

- 2026-11-24: Made Writing article images 85% of the reading-column width and centered by default. Added an inline CSS comment and repository guidance so future figures inherit this sizing while narrower puzzle images keep their existing limit.

- 2026-11-24: Implemented the requested landing follow-up: Room replaces CareerSphere with its uncropped illustrative banner, every writing preview is a full-area accessible link, and writing cards/project arrows have hover/focus motion with reduced-motion support. Added the author’s DTU photo to “State of Affairs” and its archive thumbnail. Writing previews now use the article opening, capped at two lines on homepage and archive. Fixed the page transition’s hydration mismatch when reduced motion is enabled.

- 2026-11-24: Added the author-approved “State of Affairs” article with corrected source wording, its revised ending and repaired Markdown links. Added persistent homepage pin metadata and continuous-essay rendering. Reordered the menu and homepage to Projects, Writing, Background, Lifestyle, and reused the landing satellite photo in the crop project card. Published as `779248a`; Vercel succeeded and 35 live route/status checks passed.

- 2026-11-23: Made the homepage Writing section compact at the author's request: smaller headings, at most two summary lines per post, and no article-opening paragraphs or repeated Read post links. Article titles and All writing remain clickable; full posts are unchanged.

- 2026-11-23: Put the expanded Writing section on the normal local landing page after Projects, using real published entries and their original dates, summaries and opening text. Removed the duplicate compact list. Sample article ideas remain in the development preview; the Writing archive and URLs are preserved.

- 2026-11-23: Adopted Writing as the section name throughout navigation, the homepage, page titles, article Back links and the local concept. Preserved all existing `/writing` URLs and puzzle content. Updated current repository guidance; historical audit records retain the label used at the time.

- 2026-11-23: Prototyped a development-only Writing section, index and sample reading view at `?preview=writing`, using clearly marked editorial ideas alongside the two existing puzzle posts. The ordinary homepage, Extras navigation and published site remain unchanged. Recorded the integration options and proposed content approach in `docs/writing-section-prototype.md`.

- 2026-11-23: Published the reviewed portfolio through the existing GitHub → Vercel production connection, commit `5e3494a`. All 26 content routes respond successfully on `https://snatzehua.com`; the five full writeups have matching article bodies and the renamed scheduler/crop covers match their source hashes. Removed résumé URLs and development-only editor routes return 404. The five existing author notes remain visible as reviewed. Verification: `output/deployment-2026-11-23/`.

- 2026-11-23: Refined the crop project's display name to “Satellite crop forecasting”, retaining the weather context, source route and research content.

- 2026-11-23: Shortened the crop project's display title to “Crop forecasting”; weather and satellite context remain in the summary. Its route and research content are unchanged.

- 2026-11-23: Renamed Crop Yield Research to the author's chosen “Weather, satellites and crop forecasting”, including its cover. Retained `/projects/crop-yield-research` and the research account unchanged.

- 2026-11-23: Renamed Calendar & Task Scheduler to Please Help Me, including its deterministic cover title. Kept `/projects/please-help-me`, the project scope and article content unchanged.

- 2026-11-23: The author confirmed that Teaching & Contract Work has concluded. Updated its range to 2024–2026 and removed its current-role flag.

- 2026-11-23: Audited application readiness, refreshed Background against the current master résumé, added the Fintech research role, corrected stale education wording, removed three inaccessible source buttons and removed the old résumé endpoint/PDF at the author's request. Extended Background validation and checked the local production routes and responsive pages. The live site remains older; publication and the five author notes are still open. See `docs/application-readiness-audit-2026-11-23.md`.

- 2026-11-19: Completed the fixed Strait repair study and rewrote the four priority accounts in the requested short-heading, connected-explanation style. The revised history model reaches 3.896% MAPE; selected petroleum counts reach 3.736% against a 3.931% matched control, with the unfavourable additional October check retained. Crop research now includes its broader production-index work and archived phase; scheduler and CareerSphere distinguish implementation, evidence and ownership. Sources: `docs/writeup-source-audit-2026-11-19.md`; delivery checks: `output/writeup-revision-2026-11-19/validation.json`.

- 2026-11-19: Ran State of the Strait exploratory monthly-change, rolling-window and lead/lag checks; added three original diagnostic figures to the article. Same-month change correlation −0.086; 12-month rolling correlations change sign; one-month ship lead +0.149, without demonstrated forecast improvement. Full scope/results are in the research checkout’s `bunker/exploratory-count-checks.md`.

- 2026-11-19: Formalised the project writeup structure in `docs/project-case-study-template.md`, with source review, author rationale, study context, figures, pivots, validation and outcome boundaries. Linked it from the repository guide. Added the satellite-only follow-up to State of the Strait: 6.685% bunker-sales MAPE on the same 82 months, compared with 4.677% for history alone. Research specification and reproducible results remain in the sibling project’s `bunker/satellite-only-followup.md`.

- 2026-11-15 — Replace bare gap markers with descriptive labels such as `[missing motive]`, `[missing problem context]` and `[missing decision rationale]` in the voice skill. Convert the three calendar-page notes while preserving their specific author-input prompts.

- 2026-11-16 — Refresh Calendar & Task Scheduler from its current repo: canonical title/summary, six candidate strategies and ranked previews, implemented preference evidence and explicit remaining evaluation limits. Add a real calendar capture from an isolated sample-week database to the homepage, article and deterministic cover; align three image-card widths. Preserve source route and author-input markers.

- 2026-11-16 — Speed up the interest rotation to 2.5 seconds and remove its click control, pointer and hover underline. Keep highlights synchronized; pause on card interaction rather than hovering the heading. Reduced motion remains static.

- 2026-11-16 — Undo the green navigation trial at the author’s request; restore the open off-white header, dark/green links, fine divider and existing centre-out green underlines.

- 2026-11-16 — Trial a full-width deep-green navigation strip with warm-white links, underlines and focus outlines. Preserve content alignment and centre-out underline motion; use the same treatment for the expanded phone menu. Keep the trial visible for the author to assess.

- 2026-11-16 — Tighten the name/subtitle gap and increase subtitle tracking to .23em, retaining centred alignment.

- 2026-11-16 — Add the author-supplied “FINAL YEAR BUSINESS ANALYTICS STUDENT” under the name, in small uppercase sans-serif with wider letter spacing, centred beneath the name’s own width. Keep the live development server for save-to-preview updates.

- 2026-11-16 — Remove the draft intro subtext and its styling after the author rejected both the wording and the small muted treatment. Replacement copy and treatment remain undecided.

- 2026-11-16 — Add a restrained introduction line beneath the handwritten name: “Projects, experiments, and things I’m still figuring out.” Use small, regular, muted text, preserving the separate rotating project heading.

- 2026-11-16 — Match the rotating project heading to the shared homepage header typography: Inter, 650 weight, tight heading tracking and a shared line height; retain clay rotating text, synchronized highlights and responsive single-line sizing.

- 2026-11-16 — Move “Looking into” from the intro to replace Selected projects. Synchronise its three rotating interests with a restrained clay outline/tint on the corresponding project. Add manual advance, pause automatic changes during hover/focus and hidden/offscreen states, and honour reduced motion. Promote the handwritten name to the page h1; preserve the polaroid and landscape. Correct the scheduler card to `/projects/please-help-me`, the actual scheduler, rather than the older terminal assistant.

- 2026-11-15 — Increase intro background opacity again to 38% on desktop and 34% on phones, retaining the soft edge fade.

- 2026-11-15 — Increase the intro landscape opacity to 28% on desktop and 24% on phones at the author’s request, retaining the directional fade.

- 2026-11-15 — Replace State of the Strait with Crop Yield Research in the homepage selection, using the project’s actual cached Haut-Rhin Sentinel-2 RGB observation (13 July 2023). Export the full array losslessly, retain clouds, show a lower-biased proportional card crop, and add the full image with source credit to the write-up. State of the Strait remains in the project index.

- 2026-11-15 — Apply the approved landing copy: “Looking into” with alternative data / AI assistants / algorithm design in clay brown, keeping the fixed prefix charcoal. Reframe the calendar homepage card as Calendar & Task Scheduler, explicitly describing the scheduling exploration; retain its existing route and factual detail page without claiming an implemented optimiser.

- 2026-11-15 — Tighten the name-to-interest spacing to 8px, reduce the handwritten line box and slightly enlarge the name again; retain responsive sizing.

- 2026-11-15 — Remove the course/university line from the landing intro and enlarge the handwritten name to fill the freed space, with responsive sizing on phones.

- 2026-11-15 — Enlarge the green handwritten homepage name, reduce intro landscape opacity to 18% (14% on phones), and animate header-link underlines outward from the centre on hover/focus with persistent active-route indication. Reduced-motion rules disable the transition.

- 2026-11-15 — Apply the shared cleanup to Extras: remove index eyebrow, description and count row; simplify index cards, remove duplicate detail date/category and contents navigation, and group detail topic tags beneath the intro. Preserve puzzle subtitles, content, figures and section anchors.

- 2026-11-15 — Add Crop Yield Research as the nineteenth project, with a source-backed write-up, saved region/checkpoint figures and deterministic map banner. Keep the mixed July weather gains, missing validated satellite contribution and unfinished evaluation explicit; no experiments rerun or private repo link exposed.

- 2026-11-15 — Follow the author’s new intro direction: render the name in deep-green Reenie Beanie, give the course/university line smaller muted supporting type, and replace the repeated top-left name with Home. Retain the one-line interest rotation and polaroid.

- 2026-11-15 — Put the homepage “Interested in” prefix and rotating phrase on one line, with typography sized to the available text column; replace “exploring places” with “authentic travel.” Await clarification of the trailing incomplete request.

- 2026-11-15 — Simplify the Lifestyle header by removing its numbered eyebrow and the “3 interests” / “Travel · Photography · Blacksmithing” caption row; tighten title spacing and retain all lifestyle sections and polaroids.

- 2026-11-15 — Rename the combined NUS work entry to Contract Jobs at NUS and replace its bullets with the author-supplied CS1010, CP3880, PI3881 and Hostel Financial Claims roles; retain 2024–Present.

- 2026-11-15 — Refine Synapxe treatment per author correction: use circular clipping and a white background, preserving the white inside the logo circle while removing the square corners. This supersedes the multiply treatment below.

- 2026-11-15 — Blend the Synapxe logo’s white background into the timeline surface with a scoped multiply treatment, retaining the original logo asset.

- 2026-11-15 — Move dates into a compact single line below the organisation in each timeline header; remove the separate date column. Increase logos to 72px (64px on phones), centred alongside the taller header; preserve single-year dates, sorting, current-entry highlighting and bullets aligned under logos.

- 2026-11-15 — Collapse identical start/end years to one year in both timelines. Date-placement alternatives remain under review after the user rejected the stacked range.

- 2026-11-15 — Stack timeline dates as start / dash / end in a narrow left column, remove the dot before Present and align all date text consistently. Add the author-supplied A-level result (83.75/90.00) as the first Raffles bullet.

- 2026-11-15 — Apply author-confirmed RSAF (2022–2022), Glass (2025–2025) and Raffles (2015–2020) ranges. Consolidate all three NUS work entries into one 2024–Present entry, preserving each role and its work in a separate bullet. Current NUS work sorts below GovTech by start year; the homepage continues to feature the newest current role. All timeline entries now have confirmed ranges.

- 2026-11-15 — Add start/end-year fields and sort Background entries by end year, then start year, descending with Present first. Mark résumé-confirmed NUS education (2023–Present) and GovTech (2026–Present) with a green side rule and tint; populate Synapxe and DTU ranges. Other date ranges and the scope of current NUS work roles await author clarification; retain existing single years meanwhile.

- 2026-11-15 — Remove the Background description and role/education counts, including the header caption. Align timeline bullet lists with the logo column instead of indenting them under the title; preserve all work and education entries.

- 2026-11-15 — Expand travel to “exploring places,” tighten the portrait/text gap, extend the intro background to the viewport’s right edge and raise its opacity towards that edge.

- 2026-11-15 — Refine the intro: remove its pause control, keep three unique rotating interests, shorten the bio to avoid repeating the headline, and trial the existing Japan landscape as a faint, edge-faded background confined to the intro. Keep the polaroid left and reduced-motion fallback.

- 2026-11-15 — Place the homepage portrait polaroid to the left of the entire introduction. Replace the static slogan with “Interested in” and vertically rotating problem solving / travel / how things work; include pause/resume, a stable accessible heading and a static reduced-motion presentation.

- 2026-11-15 — Simplify project presentation: remove visible status badges, “Where it stands” and “On this page”; remove the redundant project publication line. Group role, period and tools/topics under the summary, distinguish source links, and retain covers, section anchors, factual records and the approved warm design. Writing navigation is unchanged.

- 2026-11-15 — Extend `kieran-voice` with context-sensitive `[...]` author-input markers. For project accounts, use problem → solution → demonstrated competencies to identify material gaps in motive, rationale and decision making. Add the author-supplied time-blocking motive to both calendar pages; leave three targeted notes for still-missing preferences and design-choice reasoning. Retain the distinction between the intended calendar and implemented behaviour.

- 2026-11-15 — Apply the user-requested `kieran-voice` skill across all eighteen project summaries, current-result lines and write-ups. Replace report-like narration with conversational explanations, preserve established contributions and result qualifications, and retain metadata, URLs, anchors, media and the approved design. Treat this as a draft voice pass for the author to review.

- 2026-11-15 — Import the active full-résumé project selection: create Room, StashPA, Please Help Me, Amazon recommendations, Orbital Travla and the maze robot; revise CareerSphere, Bitcoin, JurAI, GDELT and State of the Strait with supplied contributions and results. Preserve older entries, URL identities and the locked design. Eighteen projects now have generated covers and detail pages. See the résumé source mapping in `docs/local-project-inventory.md`.

- 2026-11-14 — P10: Implement the user-selected warm, clean reference with horizontal navigation, open selected projects, warm off-white/charcoal/deep green styling, and original polaroids in the introduction and Lifestyle. Keep routes, project facts, articles and galleries. Replace the old plywood/pegboard presentation and delayed navigation. Validate with content/type/build checks and desktop/mobile browser review.

| Date | Item | Evidence |
| --- | --- | --- |
| 2026-10-29 | Establish the backlog and a reusable case-study outline | This file and [project-case-study-template.md](docs/project-case-study-template.md); documentation only. |
| 2026-10-29 | Save the starting state on a branch | `codex/portfolio-case-studies`, baseline commit `a47c901`. |
| 2026-10-29 | P02: Add shareable project and writing detail pages | `/projects/<slug>` and `/writing/<slug>`, Back links, contents links, direct loading, and missing-entry pages. |
| 2026-10-29 | P03: Separate content from UI | One typed file per project/article under `src/content/`; shared layouts and explicit indexes. |
| 2026-10-29 | P05: Make the reading layout responsive | Single-column timeline; 390px mobile, tablet, and desktop browser checks. |
| 2026-10-29 | P06: Reduce writing image weight and remove clipping | 26.14 MiB of original writing images have 1.51 MiB of WebP derivatives; original images retained. Full articles live on dedicated pages, with lazy images and natural height. |
| 2026-10-29 | P07: Share article presentation | Project and Writing pages share headings, figures, captions, math, contents links, and footer navigation. |
| 2026-10-29 | P08: Refresh repository guidance | README, CLAUDE.md, npm scripts, and one npm lockfile convention; add `check:content`. |
| 2026-10-29 | Make Lifestyle media browsable | Inline travel video; image viewer with next/previous, keyboard controls, and focus return. |
| 2026-10-29 | Reintroduce original background photography and portrait | Mountain photo behind the layout and in the Projects welcome banner; original polaroid above the menu; forest photo in the Lifestyle header. Original assets are unchanged. |
| 2026-10-29 | Refine hierarchy and readability | One continuous mountain backdrop, a compact welcome area and Projects heading, larger and darker text, matching project diagrams, and visible current-result takeaways. Detailed chart retained in the GDELT case study. |
| 2026-10-29 | Center and resize the sidebar polaroid | 120px desktop portrait centered within the 244px sidebar; 84px on short desktop screens and 56px in the mobile header. Browser checks confirm alignment and that navigation fits. |
| 2026-10-30 | Apply six navigation and surface refinements | Decorative portrait with a default cursor; original white pegboard on sidebar/main panel; overscroll disabled; borderless introduction; one continuous home page; expandable menu groups with anchor links and active-section tracking. Legacy section URLs redirect to anchors; detail pages remain available. |
| 2026-10-30 | Add a compact home overview and dedicated section pages | Four home previews; `/projects`, `/experience`, `/writing`, `/lifestyle`; automatic menu expansion, subsection anchors, Home links, and article returns to section indexes. |
| 2026-10-30 | Try plywood navigation and a thicker pegboard container | CC0 Poly Haven plywood texture with a pale CSS wash; original hole pattern retained; painted board edge and cast shadow supply depth. |
| 2026-10-30 | Refine Overview, navigation, and greeting | Lifestyle precedes Extras (working name for Writing); Home is labelled Overview; greeting replaces the sidebar name on translucent black; main banner and profile bio removed; pegboard restored to a flat surface. |
| 2026-10-30 | Restore the greeting, unify previews, and animate navigation | Banner above Overview; sidebar name/bio restored; equal-height cards with white-washed full-size images behind preview text; Background shows the author-confirmed current Govtech role. Persistent layout animates banner closure before route changes, page entrance, and sidebar disclosures; fragment links settle after animations. |
| 2026-10-30 | Simplify selection and improve photo/text presentation | Remove expansion buttons and derive submenu visibility from the selected section. Strengthen preview text contrast with a white gradient and darker text. Place both blacksmithing polaroids to the right of Lifestyle overview copy and the full blacksmithing write-up. |
| 2026-10-30 | Unify overview dividers and restore the Lifestyle composition | All four previews share a middle divider. Restore Lifestyle forest image and copy, with the polaroids at the far right of that preview. Reduce image whitening while retaining the strong white fade from the text and the top/bottom fades. |
| 2026-10-30 | Make Overview the navigation parent | Nest all four section links beneath Overview, with indentation and a branch line; preserve selection-driven subsection expansion and responsive columns. |
| 2026-10-30 | Trial a paper header on Projects and soften the overview fade | Group the Overview link, title, description, and count on one opaque paper surface aligned with the project cards. Other section headers remain under review. Reduce text-side image whitening slightly while keeping the directional fade. |
| 2026-10-30 | Extend the banner, share all section headers, and add Background imagery | Greeting reaches from the sidebar to the right browser edge with no top gap; all four section pages share the paper header. Add an optimized Unsplash study-room image by Clay Banks to Background’s overview preview, with source/license recorded. |
| 2026-10-30 | Remove the stock photo, share entry headers, import local projects, and tidy Background | All project/Extras detail headers use the shared paper surface; 12 project entries with local-source inventory; GDELT conclusion corrected from its current README; year-grouped work/education lists replace connector lines. |
| 2026-11-02 | Clean project content and media without changing layout | Edit all 12 entries for direct explanations and specific limits; replace mismatched Travlah and POS covers; use a CareerSphere identity cover and retain its detailed diagram in the article; add sourced BAF and satellite figures. Original assets preserved. |
| 2026-11-02 | Restrict project labels to lifecycle status | Shared allowed values: Developing, Completed, Paused, Archived. Replace project-type labels; enforce the vocabulary in TypeScript and content validation. |
| 2026-11-02 | Rename Developing and apply status colours | In progress replaces Developing. Shared badges use dusty blue, forest green, muted amber, and warm grey for In progress, Completed, Paused, and Archived across cards, detail headers, and the overview. |
| 2026-11-03 | Move handwritten annotations beside relevant content | Remove the Projects closing slogan. Add three small notes with drawn arrows: above project cards, beside the Japan video, and beneath the blacksmithing polaroids. Reuse the existing handwriting font; notes remain in document flow and preserve media controls. |
| 2026-11-03 | Remove the doodle annotation trial | Remove all three notes, arrows, and their shared component/styles at the author’s request. The earlier Projects closing slogan remains removed. |
| 2026-11-03 | Fill project banners, simplify cards/navigation, and soften polaroids | All 12 projects have deterministic full-width banners from source imagery, data, logos, or documented concepts, with regeneration/provenance files. Hide technology tags on project cards; retain them in write-ups. Reduce portrait/gallery rotation. Remove nested sidebar entries while preserving all write-up routes and anchors, as clarified by the author. |
| 2026-11-03 | Vary banner typography by context | State of the Strait uses a small corner sensor stamp. Technical plots use monospaced labels; research/legal plates use serif headings; utility banners use humanist lettering; original wordmarks remain intact. Regenerate the reviewed assets with unchanged source data and record each treatment in the manifest. Version banner URLs by content hash to prevent stale artwork. |

| 2026-11-03 | Align banner compositions and clarify GDELT heading | Reposition CareerSphere’s original globe/wordmark on a shared centreline. Centre the JurAI, Calendar, HMM, GDELT, and Connected notes text blocks in their left halves. Rename the GDELT banner to “GDELT Sentiment Analysis for Trades”; preserve data, charts, original branding, and page layout. |

## Implemented structure

Banner workflow update, 2026-11-03: restore the Bitcoin graph's native proportions with uniform scaling and a compact side title/legend. Add a reusable layout helper, enforce exact artboard size at export, validate output/source/recipe hashes through `check:content`, and generate an ignored card-size review sheet with `preview:covers`. The [banner guide](docs/project-banner-guide.md) formalises the brief, source selection, contextual styling, integration, and visual review for future projects.

The homepage shows the polaroid introduction, three selected projects, a forest Lifestyle banner with blacksmithing polaroids, and compact Background and Extras sections. Horizontal navigation opens each full section page. Existing fragment anchors remain usable. Each project and article has a detail page with a route back to its section page. Projects contains 12 entries, including ten imported from local repository evidence. Deeper first-hand accounts and individual contribution confirmation remain in P01/P04.

Current content structure:

```text
my-portfolio/src/
  content/projects/             # One long-form file per project
  components/article/          # Shared project and article layout
  app/projects/[slug]/page.tsx # Shareable detail route
```

Keep stable project metadata together: slug, title, summary, dates, status, role, tags, image, and optional repository/demo links. Do not duplicate the full story in the project card.

The first implementation uses typed content records and a shared block renderer to preserve the existing text/image/KaTeX pipeline without adding dependencies. MDX remains an option if future content needs justify it.

## Decisions

- 2026-11-14 — The user approved the implemented design running at `http://localhost:3100/` as the baseline. Future work should make incremental updates from this implementation; preserve its warm off-white/charcoal/deep-green palette, horizontal navigation, open project layouts and original polaroids unless the user explicitly requests a change. The rejected mockup variations are not the baseline. Checkpoint screenshots are `output/playwright/redesign-home-desktop.png` and `output/playwright/redesign-home-mobile.png`.

Current design decision (2026-11-14): the user selected the original “Quiet contemporary” concept image, clarified that this was the intended vibe, and authorized implementation while explicitly retaining polaroids. That concrete image supersedes the later rejected Personal studio explorations. Use warm off-white, charcoal, deep green, horizontal navigation, open project layouts and personal photography. Keep the portrait and blacksmithing polaroids; preserve existing content and source evidence.

- 2026-10-29 — Retain four main content areas and separate project/article routes. Later refined at the user's request into one continuous home page with expandable anchor navigation and the original white pegboard surfaces. — P02, P05, P10.
- 2026-10-29 — Use typed local content files and shared article blocks. — The existing content already uses text/image/math blocks; this supports immediate migration without an additional authoring toolchain. — P03, P07.
- 2026-10-29 — Preserve original media and add optimized copies. — Avoid losing source material while reducing image loading. — P06.
- 2026-10-29 — Use this backlog as the work log. — Keep intent and follow-up work beside the code; completed implementation is recorded in Git. — P01, P08.

- 2026-10-30 — Replace the full-content home scroll with previews and full section routes. — Keep the overview short while allowing every section to grow; all subsections remain visible on the section page. Add pale plywood navigation and give the pegboard depth through its sides and edges, following the user's clarification.

- 2026-10-30 — Use Extras as a provisional display label for broader work and practice; retain existing writing URLs until the name settles. Move Lifestyle ahead of it, relocate the greeting to the menu, label Home as Overview, and remove the pegboard depth at the user's request.

- 2026-10-30 — Restore the greeting above the overview, shorten Experience & Education to Background, and show only the current Govtech internship there (confirmed by the author). Use equal-height previews with image backdrops and add coordinated page, banner, and menu transitions. The pegboard remains flat.

Future entry format: `YYYY-MM-DD — Decision — Why — Affected backlog IDs`.

## Suggested next content session

1. Choose the project with the clearest evidence and decisions you can explain.
2. Draft its story with the template before changing the interface.
3. Add evidence and only extend the shared content blocks if the story needs it.
4. Run the content check and build, then review the reading experience and direct link.

## 19 November 2026 — Framework rewrite and project-date consistency

- Completed four separately delegated, source-audited writeups: CareerSphere, Calendar & Task Scheduler, Crop Yield Research and GDELT. Preserve their stable anchors and original figures; author-context gaps remain explicit where unresolved.
- Standardized all nineteen public project periods to years or year ranges. Added content and local-editor validation to prevent months, days, Present and reversed ranges. Internal publication dates still support sorting.
- Kept State of the Strait’s article body unchanged. The other fourteen public project pages show a writeup-WIP placeholder; their full drafts remain in source and the local editor.
- Validation and source notes: `docs/project-framework-rewrite-2026-11-19.md` and `output/project-framework-revision-2026-11-19/validation.json`. These checks establish delivery/source consistency, not author approval of every voice choice or new product/research performance.
