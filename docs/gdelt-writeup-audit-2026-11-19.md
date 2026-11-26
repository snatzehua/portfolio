# GDELT writeup evidence review — 19 November 2026

Scope: `src/content/projects/gdelt-sentiment.ts` only. This is a source-based editorial update, not a new financial evaluation. Title, metadata, dates, URLs, cover/alternative text, section IDs and original causal-flow diagram remain in place. Root integration handles shared files and date/status decisions.

## Evidence map

| Account detail | Inspected source | Supported claim |
| --- | --- | --- |
| Initial question, heuristic stages | `c-finance/README.md`; saved `sp500_preliminary_research.ipynb` sections 1–6; résumé `full_resume/projects/gdelt-sentiment.md` | Same-bar, cost-free historical strategies preceded causal re-evaluation; attractive early values do not establish tradability. |
| Data scope | `c-finance/gkg_aggregate.csv`; `cfinance/data.py`; notebook query description | Read-only sum gives 118,420,378 records over 3,796 calendar dates, 2015-02-19 to 2025-07-29. Counts are economic-theme GKG records, not a unique-article count or rows scanned by BigQuery. |
| Availability and execution | `cfinance/data.py`; `cfinance/backtest.py` | Calendar day maps strictly to the following trading session, article-count weighting when pooling; signal at Monday close executes Tuesday close, first earns Tuesday-to-Wednesday return. Forward returns are labels only. |
| Confirmatory design/results | Saved notebook sections 7–10; current README | Design 2015-02-19–2020-12-31, later evaluation 2021-01-01–2025-07-29. All four tone-coefficient p-values >0.22. Re-scored legacy rules trail buy/hold. Final walk-forward model OOS CAGR 1.09%, −0.74%, −2.54% at 0/5/10 bps, versus buy/hold 12.64% at 5 bps. Delaying an additional session improves to 1.29%; random-timing CAGR percentile 27.9; average target exposure about 7%. |
| Expanding/forward mechanisms | Notebook §§9–10; `cfinance/data.py`; README package map | Filtering and regime fitting avoid revising historical signals with future observations; old analog outcomes must already be observable. No causal-identification claim. |
| Later total-return correction | `research/sentiment_dips/RESULTS.md`; `research/dip_buy/RESULTS.md`; `research/wfo_v3/{RESULTS.md,wfo3.py}` | Later work includes dividends and T-bill interest. Do not compare 12.64% price-index buy/hold and 14.0% later total-return buy/hold as identical tests. Fast all-days engine and earlier sliced ledger scoring also differ; later script explicitly explains dropped first-day discrepancy. |
| Actual legacy rule versus labels | `research/wfo_v{1,2,3}/RESULTS.md`; `wfo_v3/clean.py`; résumé project note | Source calls unread `allow` flag a bug; author's 9 November account says buying in falling regime was intentional. Writeup states code/label mismatch and intentional buying, avoiding invented accidental motivation. Mean-reversion exit is independently unreachable. |
| Fixed variant | `research/wfo_v3/RESULTS.md` §§4–5; `fix_v1.py`; `explore_fixed.py`; `fixed_returns.csv`; `fixed_sensitivity.csv` | Picked on 2015–2020 Sharpe from 20 variants; 2021-01-01–2025-07-29 reused evaluation. All-days total returns, T-bill cash, next close, 5 bps: 0.75 vs 0.67 Sharpe, CAGR 13.6% vs 14.0%, drawdown −13.4% vs −24.5%; Sharpe gap interval −0.46 to +0.56. |
| Stress tests beyond attractive fixed setting | `wfo_v3/RESULTS.md` §§3,5,6; `tone_vital.py`; saved `tone_vital.csv` | Wider grid gives 0.11/0.06 walk-forward Sharpes. Equal re-tuning gives real-tone 0.32, price-only 0.66, shifted-tone median 0.66, buy/hold 0.67. Fixed-setting placebos alone overstate evidence for tone. |
| Other branches | `research/tone_test/RESULTS.md`; `research/tone_vix/RESULTS.md`; `research/sentiment_dips/RESULTS.md`; `research/dip_buy/RESULTS.md` | Volatility relationship did not improve economic decision; diminished with VIX control. Separate price-only dip-buying research is not evidence for GDELT alpha and is not imported as such. |
| Author's proposed explanation | Résumé project note, attributed to 9 November chat | Aggregation losing nuance is the author's hypothesis, not a measured cause of failure. |

## Figures inspected

- Existing in-page causal-flow diagram retained and timing labels clarified.
- Existing cover retained unchanged; it visualises the final negative causal model, not the later 0.75-Sharpe variant.
- Visually inspected source `research/wfo_v3/chart_fixed.png` and `chart_sensitivity.png`. The former's phrase “2021–2025 (not used to choose the fix)” needs the broader reused-holdout caveat; it must not be presented as independent validation. The sensitivity figure supports the narrow chosen-setting peak.
- No new media was imported because this task owns neither shared media registration nor provenance files. Root may add original figures if useful, with captions identifying exploratory reuse and benchmark assumptions.

## Material author gaps

- Original trigger for this particular news-and-market experiment is absent from the active project note, which explicitly leaves it open. Added a contextual `[missing motive]` slot.
- Sources support a negative conclusion and requirement for fresh data, but do not establish whether work has actually stopped or what the author's current continuation decision is. Added a contextual `[missing decision rationale]` slot; metadata remains unchanged.
- Résumé note labels the project solo but contains an unresolved confirmation about personal responsibility for the causal re-evaluation. Kept existing research-account ownership framing, without adding stronger sole-authorship claims.

## Verification

- `npm run check:content` passed after the rewrite: all 19 projects, two writing entries and 19 covers validated.
- No experiments rerun, no source research modified, no commit or push.
- Integration should run typecheck/build and responsive review with the other case studies.
