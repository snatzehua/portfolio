# Project visuals

Optimized WebP copies created on 30 October 2026 from local project files. These are project evidence, not stock images. Original source files remain in their respective checkouts; copying does not establish individual authorship.

| File | Source relative to the sibling GitHub checkouts | Notes |
| --- | --- | --- |
| `careersphere.webp` | `careersphere/docs/architecture.png` | CareerSphere team architecture diagram; used in the article. |
| `strait.webp` | `state-of-the-strait/figures/s2_rgb_2026-10-24.png` | Contains modified Copernicus Sentinel data (2026), accessed through Microsoft Planetary Computer. RGB preview, not a validated ship-detection result. |
| `bitcoin-graph.webp` | `bt-4012-competition-2026/docs/figures/1_network_snapshot.png` | Anonymized transaction-network visualization from the project. |
| `jurai.webp` | `techjam-2025/techjam-frontend/image.png` | Team pipeline diagram; used in the article. |

## Content and media cleanup — 2 November 2026

The website layout is unchanged. Covers and article figures have different jobs: covers identify a project; detailed evidence belongs inside its article. Existing source assets are preserved.

| File | Source | Treatment |
| --- | --- | --- |
| `careersphere-cover.svg` | `careersphere/static/favicon.svg` and `careersphere/docs/careersphere.png` | Original globe icon and embedded original wordmark on a dark field. Contains no UI screenshot or results claim. The detailed architecture remains in the article. |
| `travlah.webp` | `bt3103-travlah/public/travlah-logo.png` | Optimized original Vue-project wordmark. Replaces the unrelated older `travla.png` poster as this project's cover; the poster advertises a different stack and is preserved but unused. |
| `pos-tagger.svg` | Authored from the HMM structure in `pos-tagger/pos_tagger.py` | Vector method illustration showing hidden tags and observed words. Explicitly illustrative, not model output. Replaces the context-poor accuracy screenshot as cover; the original screenshot is preserved. |
| `strait-detections.webp` | `state-of-the-strait/figures/chips_2026-09-29.png` | Optimized full cutout strip, with the source README's ship/cloud interpretation in the caption. Contains modified Copernicus Sentinel data (2026), accessed through Microsoft Planetary Computer. |
| `baf-development.webp` | `bt-4012-project-2026/reports/baf-study-v1/monthly.png` | Optimized development-only exploratory chart. Caption identifies months 0–6 and excludes the held-out month. |

Raster copies preserve the source composition; only encoding and bounded downscaling change. Original diagrams stay available rather than being generated or recreated as purported evidence.

## Full-width banners — 3 November 2026

Project cards now use the twelve 1600×600 files under `banners/`. Rebuild with `npm run generate:covers`. See `scripts/project-cover-data/README.md` and `banners/manifest.json` for exact source qualifications, input hashes, output hashes, and descriptive alternatives. The small earlier assets remain available for article figures and generation inputs. `banner-sources/shopping-cart.png` is copied from the Hack4Good frontend's original `shopping_cart_icon.png`.

The contextual typography pass uses smaller corner metadata on State of the Strait, monospaced research labels on technical plots, serif report headings, humanist utility lettering, and the original project wordmarks. Per-cover direction and font fallbacks are recorded in `banners/manifest.json`; source data and qualifications are unchanged.

## Crop-yield research — 15 November 2026

| File | Source in sibling `crop-yield-research` checkout | Treatment |
| --- | --- | --- |
| `crop-yield-regions.png` | `maize/outputs/selected_pilot_regions.png` | Unmodified saved map; GISCO boundaries and Agreste aggregates. Study geography, not forecast or crop condition. |
| `crop-yield-checkpoints.png` | `maize/condition/v1/weather_spatial/weather_spatial_performance.png` | Unmodified saved May–September comparison, including provisional-2025 sensitivity. Repeatedly inspected historical evaluation, not fresh holdout evidence. |

Inspected source snapshot `ae7edcd` and current working documentation on 15 November 2026. No forecast model or experiment rerun. The project repository is private, so the portfolio does not expose a repository link.

## Homepage maize satellite image — 15 November 2026

`crop-yield-satellite.png` is a lossless PNG export of the complete cached 900×900 uint8 `rgb` array in `crop-yield-research/data/maize/asof/coverage_scl_audit/68_S2B_MSIL2A_20230713T102649_R108_T32ULU_20230713T201358_context_rgb.npz`. The same saved display array is used by the project research board. No pixels, colours or clouds were generated, removed or enhanced. The homepage displays a proportional crop, biased towards the lower fields; the article links the complete image. The agricultural context is not a maize-only crop mask or a crop-health result.

Contains modified Copernicus Sentinel data (2023), accessed through Microsoft Planetary Computer. Sentinel-2B acquisition 13 July 2023; Haut-Rhin, Alsace. Export: `Image.fromarray(np.load(source)["rgb"]).save(output)` using the research environment’s NumPy and Pillow, without running any research pipeline.

Source NPZ SHA-256: `464a1d2bd0df401f3358ce007733eef4016f6034b4b7167a5aad6049d80a3557`. Export PNG SHA-256: `0ffc30da93064a341eb984ebbb7ba806b76c0e16d742ff1fc9225dbd830343ba`.

## Calendar & Task Scheduler capture — 16 November 2026

`scheduler-sample-week.png` is a 1440×1000 browser capture of the actual `please-help-me` calendar UI (snapshot `d513c9b` plus working files). Start the app on a separate local port with `DATABASE_PATH` set to a fresh temporary SQLite file, then use its built-in **Try a sample week** action. The capture contains only generated demo tasks/events and no personal calendar records. No assistant, provider or external-source call was made. The homepage uses a proportional crop; the article shows the complete screenshot with a sample-data caption. The deterministic banner recipe embeds the same complete capture at uniform scale.

PNG SHA-256: `6f80a0b7542ba6a93afac3b48c35e175db0dbe78d0654e5fb7f8167f1d5c40e9`.

## Original technical documents — 16 November 2026

Replaced simplified portfolio flows where suitable original technical material exists. CareerSphere and JurAI reuse their previously imported team diagrams. Added the crop repository’s unmodified `maize/diagram/forecast_flow.png` and `walkthrough_model_detail.png`; captions identify the earlier 25/50-window baseline and single worked example rather than presenting them as the later 150-window experiment or new validation. The Bitcoin page adds the original `docs/figures/2_timeline.png` temporal data audit; it is a data figure, not a model-performance claim.

The scheduler image is rendered from the first Mermaid block in `please-help-me/docs/implementation-map.md`, with labels and edges unchanged. Its assessment/training branch describes implementation infrastructure, not a successfully trained model or established adherence gain. The process decomposition in `docs/workflow.md` was also consulted to preserve the proposed-harness boundary. The portfolio retains explanatory copy for acceptance and deterministic scheduling rather than treating the diagram as a complete implementation specification.

`technical/sources.json` records exact source paths and input/output hashes. `technical/scheduler-implementation.mmd` retains the extracted diagram source. Mermaid CLI 12.2.0 rendered the PNG at scale 2 with neutral theme, classic look, Arial 16px and HTML labels enabled on a white background. PNG output uses browser rendering so all labels remain visible across SVG viewers. Existing screenshots and evidence figures are preserved. Original project documents remain in their source repositories; whole private documents and personal data were not copied into the public site.

### Author-selected scheduler workflow

The scheduler article now uses the author's exact `Downloads/mermaid-diagram.png` export as `technical/scheduler-workflow.png`, without recolouring, cropping or redrawing. Its labels and connections correspond to `please-help-me/docs/workflow.md`. It replaces the implementation-map rendering and its extracted Mermaid file. The caption preserves the conceptual-process and proposed-harness boundary. Exact image and document hashes are retained in `technical/sources.json`.

## Strait detection examples — 18 November 2026

Two saved figures copied unmodified from the sibling `state-of-the-strait` checkout, without rerunning detection or research:

- `technical/strait-radar-detections.png` (2490×592): `bunker/validation/2025-10-26_AEBA.png`. Raw radar and detector boxes, with anchorage boundary. Red/blue encode medium-large/small candidates, as defined by `scripts/sg_validate.py`; thick boxes are inside the zone. This scene is not a claim of independently verified labels or detector accuracy.
- `technical/strait-ships-per-pass.png` (1430×1100): `bunker/figures/occupancy.png`. Individual pass counts by anchorage group and orbit track with three-month median. Not the final orbit-adjusted monthly model feature or a forecast performance figure.

Contains modified Copernicus Sentinel data (2016–2026), accessed through Microsoft Planetary Computer. The existing optical cutouts (`strait-detections.webp`) remain in the cloud false-positive section. All three figures can be expanded for inspection.

### Optical cutout grid — 18 November 2026

`strait-detections-grid.png` rearranges the six 240×240 display crops from `state-of-the-strait/figures/chips_2026-09-29.png` into three columns and two rows, preserving reading order and every crop pixel. Added numbered labels and paper-coloured gutters only. The source script creates 80×80 crops and enlarges them with nearest-neighbour interpolation; the grid adds no spatial detail. Cutouts 4 and 5 are identified as ships by the source README; others are clouds. Contains modified Copernicus Sentinel data (2026), accessed through Microsoft Planetary Computer.

### Singapore study geography — 18 November 2026

Unmodified saved figures from the sibling `state-of-the-strait` checkout:

- `technical/strait-singapore-overview.png` (2780×1500): `samples/singapore/s2_true_colour.png`. The source `samples/singapore/README.md` identifies Sentinel-2C, 22 August 2026, displayed at 20 m per pixel, extent 103.6–104.1° E and 1.20–1.47° N. Geographic context only, not a detection result.
- `technical/strait-singapore-anchorages.png` (1453×584): `bunker/figures/anchorages.png`. Sentinel-1 VV, 22 October 2026, with anchorage groups derived from MPA's chartlet. Six reconstructed chartlet boundaries and the separately hand-drawn OPL_E area are approximate. Different extent/date from the optical overview.

Contains modified Copernicus Sentinel data (2026), accessed through Microsoft Planetary Computer. No imagery retrieval or research pipeline rerun.

### Satellite-only forecast graph — 19 November 2026

`technical/strait-satellite-only-sales.png` (2340×1296) is copied from the sibling `state-of-the-strait/bunker/figures/satellite_only_bunker_sales.png`, generated reproducibly by `scripts/plot_sg_satellite_only.py` from `bunker/predictions.csv`. It uses the original primary model's 82 scored months, leaves excluded months as gaps and converts log sales in thousand tonnes to million tonnes with `exp(value) / 1000`. The lower panel uses `(exp(pred-truth)-1)*100`. The script checks the cohort and MAPE against saved results. It does not rerun models or fetch data. Sources: MPA revised monthly bunker sales and the project's derived Sentinel-1 ship counts. This is an exploratory historical follow-up, not a new holdout test.

### Exploratory count checks — 19 November 2026

`technical/strait-monthly-changes.png` (1920×1200), `technical/strait-rolling-correlations.png` and `technical/strait-lead-lag.png` (both 1920×880) are unmodified copies of the sibling `state-of-the-strait/bunker/figures/exploratory_*.png` outputs. Reproduce with `scripts/sg_exploratory_checks.py`; fixed scope and complete results are in `bunker/exploratory-count-checks.md`. Sources are cached Sentinel-1-derived counts with per-prediction-date orbit adjustments and revised MPA bunker sales. Percentage changes compare adjacent calendar months; shifting is performed on a complete monthly index to preserve gaps. All seven offsets and both rolling windows are shown, including the common-sample lag sensitivity. This is post-hoc descriptive work, not fresh validation or a changed forecasting model.

## Repair study and featured writeups — 19 November 2026

- `technical/strait-model-repairs.png` (2040×1360): unmodified `state-of-the-strait/bunker/model-repair/comparison.png`, generated by `scripts/sg_repair_models.py`. Selected original, calendar/history and petroleum comparisons on the same 82 months. The full 22 candidate/control rows are retained in the source study.
- `technical/strait-satellite-additions.png` (2040×850): unmodified `state-of-the-strait/bunker/model-repair/satellite_additions.png`. Differences against same-row, same-window history controls, not a comparison of unrelated training populations. The petroleum candidate is selected on already inspected historical data, and did not beat its control in the later-retrieved October check.
- `technical/crop-production-july.png` (1755×1552): unmodified `crop-yield-research/multicrop/phase1_package_v1/figures/exact_three_lag2_cp6.png`. Three exact regional matches, July forecasts, 2-year outcome-label delay, 27 region-years including provisional 2025. Target is economically weighted annual production change, not maize yield. Retrospective revised-archive comparison; no promoted model.
- `technical/crop-bretagne-timeline.png` (2100×1650): unmodified `crop-yield-research/multicrop/phase1_package_v1/figures/bretagne_decline_timeline.png`. Weather, FPAR and later official grass assessments diagnose the 2022 loss; September-published evidence is not a July input. Modelled root wetness is not a field measurement of irrigation.

The original source figures were visually inspected. No crop forecasting pipeline was rerun. Shipping repairs use cached detections and retain the original model results. Source/output byte equality and SHA-256 values are recorded in `output/writeup-revision-2026-11-19/media-provenance.json` in the portfolio checkout.
