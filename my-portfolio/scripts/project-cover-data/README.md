# Deterministic project banners

Updated 3 November 2026. All twelve covers are 1600×600 WebP images. They are composed to fill the banner, rather than placing a smaller illustration inside a patterned container.

## Rebuild

From `my-portfolio/`, after `npm install`:

```sh
npm run generate:covers
```

The checked-in `snapshot.json`, original image assets, and generator are sufficient. Sharp 0.33.5 rasterises native SVG, crops source images, and encodes WebP. No generative image tool, network request, model training, source checkout, credentials, contacts, or personal calendar is required to rebuild the banners. The output manifest records source/input hashes and output hashes; rendering may vary with platform font/encoder libraries.

The optional `capture-project-cover-data.py` refreshes the data snapshot from sibling source checkouts. It requires pandas, PyArrow, NumPy, NetworkX, and SciPy; the Bitcoin competition checkout's existing virtual environment supplied these for the original capture. Run it only when deliberately refreshing source evidence, then review the changed snapshot and source qualifications. It reads only the named source files, calculates the graph layout with seed 4, and does not run any models. Anonymous node positions/classes and indexed edges are retained; raw transaction identifiers are omitted.

## Per-project basis

| Cover | Source and method | Interpretation |
| --- | --- | --- |
| CareerSphere | Existing `careersphere-cover.svg`, built from the original team wordmark and globe icon | Actual branding, resized to the full artboard. |
| Systematic Portfolio | `systematic-portfolio/runs/demo-monthly/equity.csv` and `manifest.json`; strategy and benchmark indexed to 100, every fifth observation plus the final observation | **Seeded synthetic demo**, not actual market returns or strategy evidence. Saved run, not newly rerun. |
| State of the Strait | Existing `strait.webp` from `figures/s2_rgb_2026-10-24.png`; full-width southern crop and text overlay | Actual Sentinel-2 scene with cloud cover. Contains modified Copernicus Sentinel data (2026), accessed through Microsoft Planetary Computer. No generated ships or detection counts. |
| Bank Account Fraud | First-study `reports/baf-study-v1/monthly.csv`; development-month prevalence chart | Descriptive synthetic BAF development data, months 0–6; excludes the consumed holdout. No model-performance claim. |
| Bitcoin Fraud Graph | `train.parquet` (`txId`, `time_step`, `label` only) and `txs_edgelist.csv`; time step 28, 1,653 nodes, spring-layout seed 4 / 120 iterations matching the original figure recipe | Anonymised data structure with licit/illicit/unknown classes, not model predictions. Aspect-adjusted layout distances have no quantitative meaning. |
| JurAI | Team README and pipeline figure | Compact illustration of the documented four jury/critic branches and report consolidation, not a product screenshot or a reliability claim. |
| Travlah | Original Vue app wordmark, retained as `travlah.webp`; route motif drawn in SVG | Actual wordmark; route is decorative, not a recorded itinerary. |
| Hack4Good | `frontend/hack4good/public/shopping_cart_icon.png`, participant/admin routes | Original cart asset and conceptual coupon graphic, not a real voucher, balance, or adoption result. |
| Local Calendar Assistant | `claude-pa/README.md` and calendar/task tool structure | Illustrative schedule grid; no real events, dates, or user data. |
| HMM POS Tagger | `project_files/trans_probs.txt`; selected tags N/V/A/R/D/P/O/^ | Saved smoothed transition probabilities, not accuracy. Subset is not renormalised; colour uses a square-root mapping over 0–1. |
| GDELT | Current `c-finance/README.md` final causal-model OOS table, at 0/5/10 bps | Recorded CAGR 1.09% / −0.74% / −2.54%, not legacy exploratory results and not newly executed tests. Common zero baseline. |
| OpenClaw | Existing portfolio project notes; no matching implementation checkout found | Deterministic **concept illustration**, not real contacts, a working implementation, or usage counts. |

Original article figures, source images, and older assets remain available. New covers live in `public/images/projects/banners/`; `manifest.json` includes descriptive alternatives and the source basis for each output. The site continues to expose the detailed figures inside each write-up.
