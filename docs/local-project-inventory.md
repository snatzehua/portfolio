# Local project inventory

Reviewed 30 October 2026. Sources are sibling checkouts under `Documents/GitHub`; commit IDs identify inspected snapshots, while local working files may be newer. External repository links come from configured remotes; remote visibility was not checked. This is a curated selection, excluding duplicate checkouts, exercises, and projects with unclear publication scope.

The ten imported write-ups and revised GDELT page use their drafting date for `publishedAt`. Year-level `period` values describe the available project evidence, not a claim about exact start/end dates. Team entries describe the system; individual contributions still need the author's account. No experiments were rerun and no new performance figures were inferred.

| Portfolio entry | Local checkout / snapshot | Evidence and remaining review |
| --- | --- | --- |
| CareerSphere | `careersphere`, `90918a8` | README and architecture diagram: React role sphere, FastAPI tools, DuckDB skills data. Team project; confirm personal contribution. Duplicate `pyconsg-hackathon` not imported separately. |
| Systematic Portfolio | `systematic-portfolio`, `af13450` | README and Python implementation: fee-aware backtesting, next supplied close, synthetic examples. Synthetic examples are not investment results. |
| State of the Strait | `state-of-the-strait`, `ef301cf` | README, optical scripts, and Sentinel-2 preview. Cloud false positives and detection validation remain open. |
| Bank Account Fraud | `bt-4012-project-2026`, `34bac13` | Local README and `baf/` study/engineering code document temporal splits and consumed month-7 holdout. Current implementation is untracked locally, so no public code link is supplied. Confirm publication scope and ownership before adding one. |
| Bitcoin Fraud Graph | `bt-4012-competition-2026`, `9d4d13c` | README, experiment code, graph figure: LightGBM/GraphSAGE comparison and rank blend. Final private-leaderboard selection remains unconfirmed; no numerical result asserted. |
| JurAI | `techjam-2025`, `3b51e7c` | README, jury/critic/judge diagram, frontend and agent source. Team prototype; no legal reliability or speed claim. |
| Travlah | `bt3103-travlah`, `3fcb05a` | Vue itinerary, expense/payment and Firebase source; existing portfolio image. Team contribution needs confirmation. |
| Hack4Good Marketplace | `Hack4Good2025`, `da0790d` | User/admin routes and Python services: minimart, auctions, inventory and vouchers. No beneficiary identity or deployed impact inferred. |
| Local Calendar Assistant | `claude-pa`, `eabb968` | Local README, terminal agent and calendar tools: provider interface, Google Calendar/Tasks, SQLite. Implementation is untracked locally, so no public code link is supplied. |
| HMM POS Tagger | `pos-tagger`, `21e9893` | README, HMM/Viterbi code and probability/prediction artifacts. No measured accuracy supplied. |
| GDELT Sentiment | `c-finance`, `f38d2c9` | Current README distinguishes exploratory results from causal out-of-sample confirmation. Updated conclusion: no robust timing edge under the tested design. This page summarizes existing records, not a new run. |
| OpenClaw Network | Existing portfolio content | Retained ongoing exploration note; no matching local implementation inspected. |

Media provenance is recorded in `my-portfolio/public/images/projects/README.md`. Before deepening these pages, ask for specific contributions, alternatives tried, failure cases, dates, and links suitable for public readers. See backlog P01/P04.

## Editorial cleanup — 2 November 2026

All twelve project entries received a wording pass: shorter summaries, concrete implementation explanations, distinct outcomes, and project-specific limitations. Team work remains labelled as team work; no personal contribution or new measured result was inferred. Publication dates and project order remain unchanged.

The review used the current local READMEs for CareerSphere, Systematic Portfolio, State of the Strait, Bitcoin Fraud Detection, JurAI, the calendar assistant, and the POS tagger; the GDELT README and first BAF study findings were also consulted. Later BAF research has grown since the original import, but this is an editorial pass rather than a full audit or new execution of those experiments.

The Travlah cover now comes from the Vue checkout. The previous poster depicts a different stack and is not suitable evidence for this entry. The POS accuracy screenshot has insufficient evaluation context for a benchmark; it is replaced by a labelled method illustration. Two source figures add context to the satellite-detection and BAF explanations. See the media manifest for exact provenance.

Outstanding: first-hand contribution accounts, confirmed dates for OpenClaw, reproducible POS evaluation, final private competition selection, and public source visibility. These remain content follow-ups rather than facts to fill in automatically.

## Status vocabulary — 2 November 2026

Project status now uses only In progress, Completed, Paused, or Archived. The POS implementation, Bitcoin competition deliverables, and GDELT confirmatory study are marked Completed for their recorded scope; completion does not imply production readiness, a positive research finding, or a confirmed private leaderboard result. Unfinished prototypes, explorations, and ongoing implementations are mapped to In progress. This preserves their previous unfinished classification rather than asserting that every older project is actively maintained. No project is marked Paused or Archived without an explicit decision to put it on hold or retire it. The author can refine these assignments independently of project type and technologies.

## Full-width cover sources — 3 November 2026

The banner generation pass inspected the existing local repositories and retained source assets. It adds no new project outcomes or ownership claims. Saved synthetic backtest curves, BAF development prevalence, HMM transition estimates, a seeded layout of the actual anonymised Bitcoin graph, and the final GDELT model's documented OOS cost comparison provide deterministic plots. Logos, the existing Sentinel-2 scene, and clearly illustrative workflow graphics cover the remaining entries. OpenClaw still has no matching implementation checkout; its banner is explicitly a concept diagram. The checked-in cover-data README and output manifest record the full provenance and limitations.

## Full-résumé update — 15 November 2026

The author supplied `/Users/snatzehua/Documents/GitHub/resumes/full_resume/full_resume.tex` as the primary reference. Its active PROJECTS entries cover eleven projects. Supporting files under that résumé’s `projects/` directory supplied contribution splits, evaluation protocols and limits; brackets and open questions in those notes were not turned into invented personal motivations. Commented-out résumé entries were not treated as deletion instructions.

The portfolio now has eighteen entries: six new pages and five revised pages, with the earlier seven unrelated pages preserved. Newly written or revised entries use 15 November 2026 as their write-up date, independently of their actual project periods. The approved visual design and homepage selection remain unchanged.

| Résumé project | Portfolio slug | Update and evidence scope |
| --- | --- | --- |
| Room | `room` | New. Network dashboard and submission contribution; third-place hackathon result. The ambiguous team-size/count figures are omitted. Current teammate development is separated from the author’s hackathon work. |
| CareerSphere | `careersphere` | Revised. June 2026 hackathon deliverable, first place in Jobs & Skills, team of two; author’s live job ingestion separated from teammate’s scoring and frontend. Roughly 88k postings describes the saved project snapshot. |
| StashPA | `stashpa` | New. Link/video saving and historical Lambda deployment; no usage or retrieval-quality claims. Private source is not linked. |
| Please Help Me | `please-help-me` | New. Web scheduling app, greedy allocation, preview/apply/undo. Compared with current `please-help-me/README.md`; live integration acceptance and learned planning remain distinct from implemented local scheduling. Earlier Python assistant kept separately. |
| GDELT | `gdelt-sentiment` | Revised. 118M records and later 0.75 versus 0.67 Sharpe comparison, with −0.46 to +0.56 gap interval and reused-holdout caveat. Checked against `c-finance/research/wfo_v3/RESULTS.md`; negative confirmatory finding and old cover values retained as a different model/version. |
| Bitcoin fraud | `bitcoin-fraud-graph` | Revised. Individual entry, 15-step recency window, GAT blend and selected private ROC AUC 0.95113 from the supporting competition note. Not a deployment benchmark or claim about the best retrospectively observed submission. |
| JurAI | `jurai` | Revised. Next.js frontend and LightRAG ingestion contribution; team architecture remains team work. No legal-reliability benchmark inferred. |
| State of the Strait | `state-of-the-strait` | Revised. Singapore test added to earlier Hormuz exploration. `bunker/README.md` and `bunker/results.csv` directly checked: 82 evaluation months, total-count MAPE about 4.70% versus 4.68%, subgroup result exploratory. Private repository link removed. |
| Amazon recommender | `amazon-recommendation` | New. Sentiment contribution from résumé. MAP@10 0.454→0.697 and NDCG@10 0.534→0.704 retained with all-users protocol; no paired sentiment leave-one-out result supplied. Full dataset size distinguished from modelled samples. |
| Orbital Travla | `travla` | New. May–July 2024, team of two, Apollo level. Separate from `travlah`, the Vue course app. Existing Orbital poster supplies actual screenshots and article image. |
| Maze robot | `autonomous-robot` | New. Overall logic and colour-sensor contribution, calibrated near-100% colour result. Best-performing award is an author-supplied résumé claim, not independently verified here. Existing robot photograph preserved. No public code URL inferred from the misleading local remote. |

No model training, financial backtests or competition evaluations were rerun. This pass uses recorded results and author-supplied experience. Covers for Room, StashPA, Please Help Me and Amazon are explicitly method illustrations; Travla and the robot use existing project imagery. Supporting private source notes are not copied into the public app.

### Author-requested voice pass — 15 November 2026

All eighteen project records received a prose pass using `.agents/skills/kieran-voice/SKILL.md`. Summaries, result lines, section titles and paragraphs were revised; identifiers, dates, periods, roles, lifecycle status, tags, repository URLs, covers, image captions and section/block structure were preserved. First-person contribution statements use the supplied résumé and author notes; legacy team projects retain team or system descriptions where individual ownership is unspecified. OpenClaw’s prose now matches its existing Archived status. This is an editorial draft for the author’s review, not an independently established match to the author’s voice.

## Crop-yield research addition — 15 November 2026

Added `crop-yield-research`, bringing the collection to nineteen projects. Sources: sibling `crop-yield-research`, snapshot `ae7edcd` plus current local working files; root README, `maize/README.md`, `WORKFLOW_ASSESSMENT.md` (14 November), `WEATHER_SPATIAL_COMPARISON.md`, `PILOT.md` and the active sequence progress record. The portfolio uses the latest annual grain-and-seed yield target rather than promoting the original pilot specification as current. July expanded-weather MAE is 0.808 versus 0.816 t/ha on 20 region-years, with a 2025-exclusion comparison, mixed all-checkpoint outcomes, and no promoted model or independent validation. All numbers summarize saved research, not new experiments. Public repository visibility was checked and is private; no source link added. One contextual author-input slot remains for personal motive; no origin story inferred. Homepage featured selection is unchanged.

## Scheduler refresh — 16 November 2026

Renamed the `please-help-me` portfolio entry to Calendar & Task Scheduler and made its source record the homepage copy authority. Inspected the current README, `docs/workflow.md`, `docs/implementation-map.md`, `shared/scheduler.ts`, `server/adaptive.ts` and the real local interface, at `d513c9b` plus working files. The page now describes six heuristic candidate strategies and lexicographic ranking by constraint errors, cumulative deadline shortfalls, total known unallocated work, supported preferences, disruption and session count. This is not a global-optimality claim. Preference evidence and assessment/training infrastructure are implemented; real-world follow-through and useful trained-assessor quality remain unestablished. Live voice-provider and Canvas acceptance remain pending. Existing author-input gaps are retained. An isolated sample-week screenshot replaces the abstract homepage illustration and appears in the article and generated cover; no personal calendar or model call was used.

## Technical elaboration — 16 November 2026

Expanded eighteen project accounts with implementation detail and added an explicit implementation-context gap to the archived OpenClaw exploration. Existing project dates, outcomes, images and ownership boundaries are preserved. The pages now describe concrete transformations, algorithms, state transitions or evaluation design alongside their existing problem statements. Material author-only gaps remain labelled rather than inferred from code.

The scheduler received the deepest expansion: React/Vite/FullCalendar and Express/SQLite responsibilities; shared validation and time-zone handling; capacity interval operations; dependency-aware allocation; minimum-session fragment handling; the six-candidate ranking; transactional preview acceptance and guarded undo; recency-weighted preference groups; and the reviewed-assessment training/comparison boundary. Sources were the current package manifest, `shared/planning.ts`, `shared/scheduler.ts`, `server/plans.ts` and `docs/implementation-map.md` in the sibling `please-help-me` checkout. No private calendar records were read for this pass.

Other sources were the existing project records, author-supplied résumé project notes, and local README/code evidence: CareerSphere profile/skill/job flow; Systematic Portfolio fee sizing and data contracts; Bitcoin temporal graph validation; Amazon NeuMF and sentiment inputs; JurAI retrieval paths and frontend contribution; Room's hackathon Network-view account; StashPA message/video processing; Travla's itinerary and sync representation; Travlah event-component updates; Hack4Good auction-service reads and separate writes; Python calendar tool dispatch and source-aware reads; POS probability estimation and Viterbi decoding; mBot sensing/control; BAF controlled comparisons and policy separation; GDELT causal data/signal/backtest flow; ship candidate detection and aggregation; and maize feature aggregation and trend/residual ridge modelling. These are explanations of inspected implementations and recorded research, not new experiments, end-to-end acceptance or additional personal ownership claims.

## Implementation diagrams — 16 November 2026

Added twenty responsive, text-based flow diagrams across eighteen project pages. The scheduler has separate application, candidate-generation and preview/apply/undo diagrams. Other flows cover role matching, fee-aware orders, model blending, sentiment input, jury/critic retrieval, dependency visualisation, media extraction, trip state/sync, itinerary edits, auction writes, tool execution, Viterbi decoding, sensor handoff, temporal fraud evaluation, causal signal timing, radar aggregation and yield modelling. Existing screenshots and source diagrams remain. OpenClaw has no implementation diagram because its implementation context is still missing.

Diagram steps replace overlapping explanatory paragraphs rather than being appended to them. Captions preserve conditional routes, repeated stages, parallel inputs and empirical limits; they do not claim all components execute as independent services or convert research candidates into validated results. A shared server-rendered component uses ordered lists and selectable text, with horizontal flows on larger screens and vertical flows on phones. Content validation checks titles, captions and step content.

## Reuse of original technical documents — 16 November 2026

The scheduler’s three generic flow strips were replaced by the existing adaptive-planner implementation-map diagram, rendered directly from its Mermaid source. Its workflow document supplies the surrounding process/implementation qualifications. CareerSphere and JurAI now rely on their original team diagrams without an additional generic flow. The maize page uses the original forecast flow and detailed training/prediction example, with baseline-version and evaluation-scope captions. Bitcoin uses the project’s temporal data-audit figure in the validation section. Suitable source figures were not found in the inspected document locations for the other pages, whose explanatory flows remain. Full-size links make dense diagrams inspectable. Media provenance and exact hashes are recorded under `public/images/projects/technical/sources.json`.

## Featured research/writeup refresh — 19 November 2026

The current-state refresh supersedes the earlier source snapshots above where they differ. See
[the source review](writeup-source-audit-2026-11-19.md) and
[completion evidence](research-and-writing-progress.md).

- State of the Strait now includes the fixed repair study, matched controls and a separately frozen
  October check. Revised history MAPE is 3.896%; the selected petroleum candidate is 3.736% against
  3.931% for its control on the inspected 82 months, but petroleum did not improve the additional
  month. Original study results remain visible and no general satellite advantage is claimed.
- Crop Yield Research now follows the legacy maize work through the broader all-crop production
  track and the 18 November phase archive. Targets, cohorts, units, provisional outcomes and source
  availability limitations stay distinct; metadata status is Paused to match the current source.
- Calendar & Task Scheduler explains the complete workflow and separates implemented planning,
  user-preference evidence, the synthetic assessor test and unmeasured real-world outcomes.
- CareerSphere separates Kieran's ingestion work from teammate/team scoring and serving, and
  describes the canonical MotherDuck store versus the deployed baked DuckDB snapshot.

The requested writing uses short context-specific titles and connected matter-of-fact explanations.
Manual factual metadata, original section IDs and all earlier article figures were retained.
