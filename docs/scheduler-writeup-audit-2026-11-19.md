# Scheduler writeup source audit — 19 November 2026

Scope: only `src/content/projects/please-help-me.ts`, the canonical Calendar & Task Scheduler entry. No scheduler source, private calendar database, shared media or other project entry was changed. Existing manual metadata, all seven section IDs, both original image blocks and their captions were preserved. The opening author motive and contextual author-input slots were retained.

## Evidence map

Source checkout: `/Users/snatzehua/Documents/GitHub/please-help-me` (current working files, not just an old commit).

| Account detail | Primary evidence | Scope |
| --- | --- | --- |
| Origin and ownership | Existing portfolio opening; résumé note `resumes/full_resume/projects/claude-pa.md`, calendar-app and My part sections | Author wants delegated time blocking and one definitive preference-aware calendar; built app/engine. Older Python terminal project remains separate. No invented daily-use history. |
| Local records and interface | README, package.json, shared/model.ts indirectly through inspected planning/scheduling imports, saved interface image | Tasks, events and work sessions have separate meanings; React/FullCalendar, Express and SQLite. Local single-user persistence. |
| Capacity and greedy placement | shared/planning.ts, shared/scheduler.ts | Union/subtract recurring commitments and breaks; daily cap/buffer; dependencies, earliest starts, session bounds; fragment avoidance; preservation fallback. Capacity alone is not schedulability. |
| Alternative selection | server/adaptive.ts | Six heuristic configurations from one snapshot; ordered error/deadline/total-shortfall vector before preference, replaced sessions and session count. No global optimality or measured cross-user comparison. |
| Apply and undo | server/plans.ts | Frozen state hash; learning revision/expiry/start checks; transactional session/history/undo writes; undo refuses later changes. |
| Learning evidence | server/learning.ts; docs/implementation-map.md | Distinct-session choices, cutoff exclusion, support/recency defaults; acceptance weaker than direct edits; observed markers and actual work remain distinct. |
| Fixed comparison | tests/learning.test.ts, packing recovery and accepted-candidate evaluation cases | Morning 90-minute / afternoon 45-minute windows, short task due first, long task needs 90 uninterrupted minutes. Known unallocated effort 90→0 on this fixture only. Fresh run passed both tests. |
| Assessment boundary | docs/implementation-map.md, résumé direction | Live tool proposal documented; planning acceptance and training review separate; estimates not established accurate. |
| Training outcome | docs/implementation-map.md, schema-grounded smoke checkpoints and acceptance blockers | One synthetic test case: reference schema-valid, random base and tuned adapter invalid; quality gate failed. Zero reviewed pilot examples is explicitly the 15 November audit, not a new live database query. |
| Next research boundary | docs/workflow.md, docs/simulation-personas.md, docs/simulation-protocol.md | Five fictional month-long profiles and temporal cases specified; initial previews not actor execution. Sequential runner, clock integration and independent evaluator proposed. |

Read portfolio CLAUDE.md, complete case-study template and local voice guidance before rewriting. Also read the existing source-audit and inventory records. No external claims required web research.

## Fresh verification and open issue

- Portfolio `npm run check:content`: passed, 19 projects and 2 writing entries, including banner/image checks.
- Scheduler `node_modules/.bin/tsx --test tests/learning.test.ts`: 13 passed, 1 failed.
- Failed test: `supported implicit choices change session timing and length while preserving effort and constraints`; expected `personal-fit`, received `baseline` at line 173.
- Inspection shows the fixture creates historical session placements with normal current-time `Store.save` history timestamps, then generates candidates as of `2026-11-16T08:00:00Z`. `personalPatterns` excludes observations after that cutoff. This suggests a date-dependent fixture cause, but it was not verified through a controlled-clock rerun. No production defect or complete fix was asserted, and no source changes were made.
- Packing comparison, cutoff exclusion, distinct-session learning, assessment confirmation, accepted-override evaluation, controlled alternatives, training export and normal HTTP apply/undo checks passed in that targeted run.
- The article discloses the failed test rather than repeating the source document's historical all-tests-pass checkpoint as current evidence.

Outstanding author-input slots: concrete previous planning failure and important habits; alternatives personally considered and reason for choosing heuristics. Those remain editorial gaps, not invented rationale. Real usage, a reviewed assessor dataset, useful tuned-model quality and provider/Canvas acceptance remain distinct from software checks. Parent integration owns type/build and visual checks.
