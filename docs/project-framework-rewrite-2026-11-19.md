# Project framework rewrite — 19 November 2026

Four isolated subagents rewrote the requested case studies using the existing case-study framework and local author-voice guidance. Each reviewed its assigned source project, retained useful original material and distinguished implementation, documented choices, empirical results and missing personal context. No application research experiments were added to make the accounts look stronger.

| Project | Assigned subagent | Source and editorial audit |
| --- | --- | --- |
| CareerSphere | careersphere_rewrite | [CareerSphere audit](careersphere-writeup-audit-2026-11-19.md) |
| Calendar & Task Scheduler | scheduler_rewrite | [Scheduler audit](scheduler-writeup-audit-2026-11-19.md) |
| Crop Yield Research | crop_yield_rewrite | [Crop audit](crop-yield-writeup-audit-2026-11-19.md) |
| GDELT Sentiment | gdelt_rewrite | [GDELT audit](gdelt-writeup-audit-2026-11-19.md) |

The scheduler entry is `please-help-me`; the older `local-calendar-assistant` is a separate project and now has a WIP article. The State of the Strait article body is unchanged.

## Narrative changes and remaining author input

- CareerSphere follows the skills-to-role problem, team responsibilities, live-job ingestion, matching failures, deployment tradeoffs and hackathon outcome. The rationale for the earlier Cloud SQL-to-MotherDuck change still needs author input.
- The scheduler follows the author's planning problem through constraints, alternative candidate plans, review/apply/undo, preference learning and the unresolved assessor evaluation. It discloses the fresh 13/14 source learning-test result, keeping the suspected time-dependent fixture explanation unconfirmed. Personal examples and the author's choice among alternative scheduling approaches remain editorial prompts.
- Crop research follows the disaster/heatwave question through maize measurements, satellite support, the aggregate production pivot, archived comparisons and the unresolved Bretagne miss. July retrospective gains are qualified by source-availability and reused-case limits; no candidate is promoted.
- GDELT separates early attractive rules from the negative cost-aware result and later reused-holdout exploration. Equal retuning gives real-tone Sharpe 0.32 versus price-only 0.66; the attractive fixed-setting result is not independent confirmation. The original personal trigger and present continuation decision remain author-input slots.

Existing section anchors and media are retained. Bracketed author-input prompts remain visible rather than inventing motives or decisions. These four accounts are rewritten drafts, not a claim that the author has approved every line.

## Public project policy

Five projects show their full article sections: State of the Strait and the four requested rewrites. The other fourteen show a single “Write-up in progress” section, and their cards show “Write-up WIP”. Their existing draft sections remain unchanged in source and available in the local editor. WIP describes the article, not whether the underlying project is completed.

The shared presentation helper is `src/content/project-writeups.ts`. The editor continues to preview full drafts and labels a draft whose public article is WIP.

## Dates

Every public project period is a four-digit year or an ascending year range joined by an en dash. Ongoing multi-year periods run through the current project year, 2026; “present”, months and days are removed. Hidden ISO publication dates remain unchanged because they control ordering. Writing and experience dates are outside this project-period change.

The content validator checks every project. The shared date helper also rejects invalid periods in both the editor and its save endpoint; editor tests cover months, calendar dates, “present”, reversed/repeated ranges, whitespace and noncanonical separators.

| Project slug | Before | After |
| --- | --- | --- |
| amazon-recommendation | Feb — May 2025 | 2025 |
| autonomous-robot | Oct — Nov 2023 | 2023 |
| bank-account-fraud | 2026 | 2026 |
| bitcoin-fraud-graph | Oct 2026 | 2026 |
| careersphere | Jun 2026 | 2026 |
| crop-yield-research | 2026 | 2026 |
| gdelt-sentiment | Aug 2025 — present | 2025–2026 |
| hack4good-marketplace | 2025 | 2025 |
| hmm-pos-tagger | 2025 | 2025 |
| jurai | Aug — Sep 2025 | 2025 |
| local-calendar-assistant | 2026 | 2026 |
| openclaw-network-mapping | Jan 2025 — present | 2025–2026 |
| please-help-me | Aug 2026 — present | 2026 |
| room | Sep 2026 | 2026 |
| stashpa | May — Jun 2026 | 2026 |
| state-of-the-strait | Oct 2026 — Nov 2026 | 2026 |
| systematic-portfolio | 2026 | 2026 |
| travla | May — Jul 2024 | 2024 |
| travlah | 2025 | 2025 |

## Verification

- Content checks pass for 19 projects, two writing entries and 19 banner outputs; all 19 periods are year-only.
- All 49 editor backend checks pass, including the added date cases.
- Type checking and production build pass. The build retains the existing hero-overlay image lint warning.
- Before/after comparison confirms all 19 hidden publication dates, State's article body and all fourteen WIP draft bodies are unchanged.
- All nineteen project cards and detail routes were checked in the production browser preview: HTTP 200, matching year-only periods, five full articles and fourteen WIP sections.
- Responsive and media results are recorded in the accompanying validation output. Local preview analytics requests return 404 because the Vercel deployment endpoint is absent locally; this is unrelated to project content.

Machine-readable evidence is in `output/project-framework-revision-2026-11-19/validation.json` and `preservation.json`; screenshots are under `output/playwright/framework-*`. The initial snapshot is retained for comparison. This pass does not commit, push or publish the existing working copy.
