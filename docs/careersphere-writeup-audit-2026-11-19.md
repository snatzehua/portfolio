# CareerSphere writeup evidence — 19 November 2026

This pass changes only `src/content/projects/careersphere.ts` and this audit note.
It builds on the existing working-copy text; the original architecture figure, section identifiers,
headings and metadata are retained. No application experiments or live-service checks were run.

| Narrative detail | Evidence inspected | Boundary retained |
| --- | --- | --- |
| Hackathon purpose, team of two, first place and personal work | Existing project text; `resumes/full_resume/projects/careersphere.md`; source README | Kieran owns ingestion/profile-enrichment work; scoring, sphere and serving remain teammate/team work. Award is author-supplied. |
| Job-finder scope change | `careersphere/DECISIONS.md`, entry “Add live-jobs-ranked-by-fit” | Described as a team choice; structured posting skills enabled reuse of the existing analysis. |
| Profile-to-role example | README; `docs/algorithm_card.md`; chemical-engineering spike entry in `DECISIONS.md`; `docs/failure_cases.md` | Illustrative development input, not an accuracy result. Unmatched academic skills remain market-only. |
| Snapshot import | `scripts/03_ingest_jobs_snapshot.py` | Latest open/reopened snapshots, posting identifiers, source URLs, dates, salary fields and separate skill links. |
| Hosted updates | `scripts/08_update_live_jobs_motherduck.py`; `skillgraphsg/ingest/mcf/duckdb_live.py`; `scripts/04_build_mcf_skill_crosswalk.py` | MotherDuck writes and repeated-job replacement; uncertain crosswalks remain unmapped. |
| Data-store tradeoff | 24 June serving decision in `DECISIONS.md`; `docs/DEPLOY.md`; Dockerfile | Team-recorded lookup timings explain baked serving snapshot. Daily canonical-store writes do not refresh an existing deployment. |
| Matching failure and response | Day-one semantic spike and 24 June matching-overhaul entries in `DECISIONS.md` | False semantic friends and off-field role matches motivate documented changes; three-résumé check remains a targeted development check. |
| Software validation scope | `tests/test_mcf_duckdb_live.py`; `tests/test_tool_orchestrator.py`; README test description | Test definitions were inspected, not rerun. No new passing-test or recommendation-quality claim. |
| Original image | Visually inspected `careersphere/docs/architecture.png`; retained existing portfolio image block | Team diagram, not an empirical result. No media edits. |

The older data card says hosting is future work and lists five fallback jobs as its dated count.
The later deployment decision, current updater and Dockerfile supersede those implementation states;
the roughly 88,000 count remains the saved hackathon snapshot described in the later source records.

One author-input gap remains visible beside the ingestion account: the résumé note confirms a Cloud
SQL attempt and subsequent MotherDuck path but leaves the reason for that change unresolved.
The serving-layer explanation is documented separately and is not substituted for Kieran’s reason
for the earlier ingestion change.

The page closes at the completed hackathon scope, with source upkeep, automatic serving refresh and
recommendation evaluation identified as follow-up work. It makes no assertion about present hosting,
maintenance activity, current vacancy count or measured career outcomes.
