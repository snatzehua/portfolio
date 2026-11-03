# Portfolio backlog

Updated: 2026-11-03

Purpose: make the portfolio easier to maintain and expand projects into case studies that show how decisions were made.

## How to use this log

- Add rough ideas to Inbox immediately; they do not need a full specification.
- Move an idea into Planned when its outcome is clear. Priorities below are recommendations, not commitments.
- Work on one item at a time. Mark it In progress, then Done with a date and commit reference when applicable.
- Keep completed items here. Git records file changes; this log records intent and what remains.
- Record decisions only when they affect future work, including why an alternative was rejected.

## Inbox

Add new ideas below, one per line:

- Expand Extras with Codeforces competitions and practice efforts once the author supplies the entries, dates, links, and any results.
- Choose the final name for Extras. Candidates: Extras, Explorations, Practice & Play, Side Quests.

## Planned

| ID | Priority | Item | Origin | Done when |
| --- | --- | --- | --- | --- |
| P01 | Next | Deepen project case studies with first-hand evidence | User requested deeper project explanations | The repository-grounded summaries are expanded with actual alternatives, experiments, failure cases, and concrete ownership; missing facts are supplied by the author. |
| P04 | Next | Finish the factual audit of project cards | Existing content needs author confirmation | Confirm individual contributions, exact dates, current status, and repository/demo visibility for the imported entries. GDELT now reflects its negative confirmatory result; no earlier outperformance claim remains. See the local project inventory. |
| P09 | Later | Improve media descriptions and education details | Follow-up from implementation | Replace generic photography alt text with scene descriptions; confirm GPA/year-of-study wording and any changed experience/education facts. |
| P10 | Next | Review component styling against the original design | User feedback: the current design still feels AI generated | Agree the component palette and treatment using the original neutral styling as a reference. Review diagram covers, tinted takeaway boxes, repeated labels, and navigation styling before another broad restyle. |

## In progress

None.

## Done

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

## Implemented structure

The Overview shows four compact previews in order: Projects, Background, Lifestyle, Extras. Each opens its complete section page, with all its subsections in one scroll. The active sidebar group expands automatically; child links jump to anchors within that section, and Overview returns to the overview. Each project and article has a detail page with a route back to its section page. Projects now contains 12 entries, including ten imported from local repository evidence. Deeper first-hand accounts and individual contribution confirmation remain in P01/P04.

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

Component review following the latest feedback: the original surfaces were white/`#fafafa`, headings `#111`, body text `#555`–`#666`, and tags `#f3f3f3`–`#f5f5f5`. The sage palette and repeated three-step diagrams were introduced during the redesign. Returning to the original neutral palette and using real project visuals are proposed directions for P10, not yet applied.

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
