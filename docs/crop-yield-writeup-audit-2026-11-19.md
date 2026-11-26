# Crop Yield Research writeup audit — 19 November 2026

Scope: prose in `src/content/projects/crop-yield-research.ts`. No research files, model outputs, shared components or media were changed.

## Narrative and author evidence

The opening now starts with the author's supplied heatwave/disaster-effects aim, follows the French maize pilot and its measurement problems, then explains the later request for one regional overall-crop production-impact index and the earliest reasonably accurate forecasts. July priority, same-year comparisons, separation of independent and official-informed forecasts, and the decision to package phase one and stop model tuning are grounded in the supplied conversation context.

The previous `[missing motive]` marker is resolved by that author account. PlanetScope remains a considered source without an account or verified usable archive, not a completed acquisition. No feeling, commercial use, career motive or reconstructed discovery chronology has been added.

## Source map

All research paths below are relative to `/Users/snatzehua/Documents/GitHub/crop-yield-research/`.

| Narrative detail | Evidence read | Scope retained |
| --- | --- | --- |
| Current direction and archived status | `README.md`; `multicrop/PHASE_1_RESEARCH_SUMMARY.md`; `multicrop/phase1_package_v1/research_status.json` | Packaged 18 November 2026; model development on hold; no promoted candidate; no causal heat/export result |
| Maize target and measurement limitations | `maize/WORKFLOW_ASSESSMENT.md` in full, including appended follow-ups | Grain-and-seed yield in t/ha; same-year Centre grain pilot separate from regional forecast benchmark; no validated crop-health scale |
| Radar and original pipeline | `maize/radar/README.md` sensor definition/evaluation sections; `maize/RESEARCH_MAP.md` relevant mechanism and evidence entries; original article diagrams | Radar scattering separate from optical greenness; feature-level fusion; earlier-year fitting; seven-day weather cutoff; model contribution arithmetic separate from causal effects |
| Freshness and spatial weather experiments | `maize/WORKFLOW_ASSESSMENT.md` matched controls and spatial-weather sections | Sampled-site coverage/age, not regional crop area; 0.828→0.839 t/ha timing result; 0.816→0.808 weather comparison; 2025 exclusion; September failure; rejected scaling repair |
| All-crop target and direct implementation | `multicrop/PHASE_1_RESEARCH_SUMMARY.md`; `multicrop/AGGREGATE_SATELLITE_WEATHER.md` direct-model and calendar-follow-up sections; `multicrop/README.md` target context | Economically weighted volume, not tonnes/yield; cropland/rangeland FPAR; calendar and year-on-year changes jointly changed; economic shares do not label fields |
| Retrospective July scores | `multicrop/phase1_package_v1/data/final_scores.csv`; phase summary | Exact-three 27 cases in 2017–2025 per delay; 6.466/6.674 baseline, 5.912/5.978 calendar model, 5.649 two-year recent-stress; revised archive; no fresh holdout |
| Timing limitation | `multicrop/AGGREGATE_SATELLITE_WEATHER.md`; phase summary | Ninety-day holdback is a sensitivity, not measured latency; six-case copy-gated replay uses a different recipe and does not resolve long-history availability |
| Bretagne 2022 | `multicrop/BRETAGNE_2022_RESEARCH.md` in full; phase summary | −10.7% annual actual; forage −6.77 pp and horticulture/vegetables −2.88 pp are accounting contributions; July forecasts +1.49%, +5.77%, +7.89%; later publications diagnostic only |
| Restart criteria | Phase summary data requirements and `research_status.json` | Source vintages, compatible targets, cumulative forage observations and genuinely new confirmation evidence before further fitting |

## Preserved material

All project metadata was preserved exactly at rewrite time, including `publishedAt`, `period`, `role`, `status`, tags, cover and cover text, summary and outcome. Root-level date/WIP changes are outside this edit's scope.

All eight section IDs remain, in their existing order: `problem`, `evaluation`, `forecast-implementation`, `satellite`, `weather`, `production-track`, `failure-case`, `limits`. Existing short headings remain.

All seven image blocks were preserved exactly, including paths, captions, technical flags and width attributes: region map, forecast flow, model detail, Haut-Rhin context image, maize checkpoint comparison, all-crop July comparison and Bretagne timeline. Original useful comparison and failure prose remains, with connecting explanation added around it.

## Verification and limits

- Parsed the typed project object as JSON for targeted checks; the write operation asserted exact metadata, section-ID and image-block preservation against its starting contents.
- Verified all seven referenced local images exist.
- Checked all five reported all-crop July score/delay pairs against `final_scores.csv`, including cohort, scenario, 27 cases and checkpoint 6.
- Confirmed no question marks or unresolved `[missing motive]` markers in the resulting prose.
- `npm run check:content` was attempted and stopped at the separate scheduler's non-year-only period (`please-help-me/Aug 2026 — present`). Root agent owns the date cleanup and overall checks. No source test, acquisition, model fitting or research validation script was run.
- No figure/layout changes were made; final combined browser/type/build verification belongs to the root agent.

Remaining factual ambiguity is scientific rather than missing biography: actual historical release vintages, representative field/crop support, forage-output mapping, and generalisation to uninspected seasons remain unresolved and visible. The reason for choosing these exact five French pilot regions and any intended downstream trading or policy decision are not supplied; neither is needed to state the confirmed research aim, and neither has been invented. The preserved role metadata remains terse and should not be read as a new authorship claim for every research implementation detail.
