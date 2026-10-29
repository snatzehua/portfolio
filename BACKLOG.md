# Portfolio backlog

Updated: 2026-10-29

Purpose: make the portfolio easier to maintain and expand projects into case studies that show how decisions were made.

## How to use this log

- Add rough ideas to Inbox immediately; they do not need a full specification.
- Move an idea into Planned when its outcome is clear. Priorities below are recommendations, not commitments.
- Work on one item at a time. Mark it In progress, then Done with a date and commit reference when applicable.
- Keep completed items here. Git records file changes; this log records intent and what remains.
- Record decisions only when they affect future work, including why an alternative was rejected.

## Inbox

Add new ideas below, one per line:

- No additional ideas captured yet.

## Planned

| ID | Priority | Item | Origin | Done when |
| --- | --- | --- | --- | --- |
| P01 | First | Expand one project into a case study | User requested deeper project explanations | One project explains its problem, role, decisions, alternatives, evidence, limitations, and next steps, using the [template](docs/project-case-study-template.md). |
| P02 | First | Add a reusable project detail page | Suggested implementation for P01 | A card opens a shareable `/projects/<slug>` page; refresh, browser Back, return to Projects, and unknown slugs work; entering a detail page does not replay the home introduction. |
| P03 | First | Separate project summaries from long-form content | Suggested maintenance improvement | Typed metadata supplies the cards; one local content file supplies each case study; adding another project reuses the same layout without duplicating rendering code. |
| P04 | Next | Audit current project cards | Observed in current files | OpenClaw has relevant tags and imagery instead of the sentiment project's copies; titles, dates, status, repository/demo links, and personal contribution are checked. GDELT's reported outperformance links to its benchmark, period, evaluation method, and limitations. |
| P05 | Next | Make the reading layout responsive | Existing review finding | Project detail, Writing, and the timeline remain readable at 390px, tablet, and desktop widths; essential content is not clipped by fixed-width columns or trapped in nested scrolling. |
| P06 | Next | Reduce image loading and fix article expansion | Existing review finding | Writing's 26.1 MiB of source images are resized/compressed; collapsed articles defer body images; expanded content remains visible after delayed image/font loading. |
| P07 | Later | Share article presentation components | Suggested maintenance improvement | Project case studies and Writing reuse figures, captions, headings, and math presentation where useful, while retaining their different content purposes. |
| P08 | Later | Refresh repository guidance | Observed documentation drift | README and CLAUDE.md describe the actual single-page tab interface, current routes, content locations, and working checks; a single package manager/lockfile convention is documented. |

## In progress

None.

## Done

| Date | Item | Evidence |
| --- | --- | --- |
| 2026-10-29 | Establish the backlog and a reusable case-study outline | This file and [project-case-study-template.md](docs/project-case-study-template.md); documentation only. |

## Proposed approach

Keep the current project cards as a quick overview. Give substantial projects their own detail pages, with a consistent reading layout and a clear route back to Projects. Start with one case study before migrating other content.

Suggested content structure when P02/P03 are implemented:

```text
my-portfolio/src/
  content/projects/             # One long-form file per project
  components/project-detail/   # Shared case-study layout
  app/projects/[slug]/page.tsx # Shareable detail route
```

Keep stable project metadata together: slug, title, summary, dates, status, role, tags, image, and optional repository/demo links. Do not duplicate the full story in the project card.

Local MDX is a candidate for long-form content because it combines prose with reusable figures, code, and interactive components. Decide during P03 after drafting the first story; the current app does not have MDX configured. Reference: [Next.js 15 MDX guide](https://nextjs.org/docs/15/app/guides/mdx).

## Decisions

No implementation decisions recorded yet. The approach above is a recommendation.

Future entry format: `YYYY-MM-DD — Decision — Why — Affected backlog IDs`.

## Suggested first session

1. Choose the project with the clearest evidence and decisions you can explain.
2. Draft its story with the template before changing the interface.
3. Build only the detail layout and content support needed for that story.
4. Check the reading experience and direct link, then use the same structure for the next project.
