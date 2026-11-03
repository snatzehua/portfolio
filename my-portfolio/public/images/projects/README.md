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
