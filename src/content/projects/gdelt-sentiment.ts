import type { Project } from "../types";

const project: Project = {
  "slug": "gdelt-sentiment",
  "title": "GDELT Sentiment: Testing Market Timing",
  "summary": "Research into whether daily GDELT news tone helps time the S&P 500 once information timing and trading costs are included.",
  "publishedAt": "2026-11-15",
  "period": "2025–2026",
  "role": "Personal research project",
  "status": "In progress",
  "tags": [
    "Time series",
    "Sentiment analysis",
    "Backtesting"
  ],
  "outcome": "The confirmatory tests did not find a robust timing edge from the daily tone series I tested.",
  "sections": [
    {
      "id": "problem",
      "title": "Looking for a signal in the news",
      "blocks": [
        {
          "type": "text",
          "content": "I started with heuristic trading rules based on aggregate GDELT news tone, and the research grew into looking more carefully at when that information was available and what could actually be traded after it arrived. The question was whether tone added enough information about future S&P 500 returns to improve on simply holding the index, once the strategy had to wait for its inputs and pay to trade."
        },
        {
          "type": "text",
          "content": "The pipeline uses BigQuery and Python to aggregate roughly 118 million economic-theme news records from GDELT’s Global Knowledge Graph. The saved input has 3,796 calendar days, from 19 February 2015 to 29 July 2025, with a mean tone, tone standard deviation and article count for each day. It is a daily summary of the news, rather than individual articles linked to particular companies or events, and the short history leaves relatively little room to develop rules and then test them independently."
        },
        {
          "type": "text",
          "content": "[missing motive] Add what originally prompted this particular news-and-market experiment, beyond the research question itself."
        }
      ],
      "navTitle": "Research question"
    },
    {
      "id": "early-exploration",
      "title": "The early backtests",
      "blocks": [
        {
          "type": "text",
          "content": "The first notebook tried turning unusually positive or negative tone into buy and sell rules, then added price–tone differences, the direction of price trends and volatility-based exits. The later rules had encouraging historical charts, but those comparisons used same-bar signals and left out trading costs. A rule could therefore benefit from a price at which its news input was not yet available, and repeated adjustments were being judged on the same history."
        },
        {
          "type": "text",
          "content": "That made the next step a narrower test of the premise, before treating another strategy variation as progress. I separated whether tone preceded returns from whether a trading rule made money, because a profitable-looking rule could owe its result to price exposure, stop rules or the period chosen rather than to the news."
        }
      ],
      "navTitle": "Early backtests"
    },
    {
      "id": "approach",
      "title": "News arrives before the trade",
      "blocks": [
        {
          "type": "text",
          "content": "The aggregate has calendar dates but no publication times, so it cannot establish which articles were available before a particular market close. In the causal backtest, a calendar day’s tone becomes available on the first trading session strictly after that date. Friday, Saturday and Sunday observations are combined for Monday, or the next open session, weighted by article count so that a quiet news day does not count as much as a busy one."
        },
        {
          "type": "text",
          "content": "Availability and execution are separate. If that pooled tone enters Monday’s signal, the resulting target position executes at Tuesday’s close and first earns the Tuesday-to-Wednesday close return. This adds latency, but it gives the test an explicit information boundary rather than assuming all of a day’s news was known at that day’s close. Forward returns are evaluation labels and never feed back into the signal."
        }
      ],
      "navTitle": "Information timing"
    },
    {
      "id": "research-engine",
      "title": "Keeping the past in the past",
      "blocks": [
        {
          "type": "diagram",
          "title": "Respecting information timing",
          "steps": [
            {
              "label": "Daily tone aggregate",
              "detail": "A calendar-day summary of news tone."
            },
            {
              "label": "First following session",
              "detail": "Pool observations into the first trading session strictly after their calendar date."
            },
            {
              "label": "Forward-only signal",
              "detail": "Use past observations for filtering and regime estimates."
            },
            {
              "label": "Next-close execution",
              "detail": "Execute one close after the signal, with cash, shares and turnover costs."
            }
          ],
          "caption": "Forward returns are evaluation labels, never signal inputs. Information arrival and trade execution are separate timestamps."
        },
        {
          "type": "text",
          "content": "I used lead–lag tests and regressions to examine whether tone added information beyond recent price momentum and volatility, with 2015–2020 as the design period and 1 January 2021 to 29 July 2025 as the later evaluation period. The tests cover returns over 1, 5, 10 and 21 trading days. Their standard errors account for serial dependence, and the search across lead–lag specifications is corrected for multiple testing, since trying several lags gives more opportunities to find an apparently useful one."
        },
        {
          "type": "text",
          "content": "For the strategy comparisons, one cash/share ledger applies next-close execution and costs of 0, 5 or 10 basis points per unit of turnover. Five basis points is 0.05% of the amount traded. The earlier rules are re-scored through that engine, but their later-period results remain post-hoc comparisons because the rules were developed while viewing the full history."
        },
        {
          "type": "text",
          "content": "The final causal model fits market regimes on expanding history and updates their probabilities forwards, rather than revising old states using later data. It looks for past sessions with similar returns, volatility and tone, using only dates old enough for their subsequent outcomes to be known, and scales the resulting long-only position by the regime probability and a volatility target. The filtering work follows the same rule: a Kalman filter updates the estimate as observations arrive, without smoothing earlier estimates using future observations."
        }
      ],
      "navTitle": "Causal pipeline"
    },
    {
      "id": "finding",
      "title": "The confirmatory result",
      "blocks": [
        {
          "type": "text",
          "content": "The confirmatory evaluation did not find a robust timing edge from this daily, market-wide tone series. At all four return horizons, the tone coefficient’s p-value exceeded 0.22, and the lead–lag tests showed returns preceding available tone much more strongly than tone preceding returns. That is compatible with news responding to market moves, without establishing that its daily average helps predict the next one."
        },
        {
          "type": "text",
          "content": "At 5 basis points, every re-scored legacy rule trailed buy-and-hold in the post-hoc 2021–2025 comparison. The strongest legacy CAGR was 11.19%, against 12.64% for buy-and-hold. CAGR is the annualised compound return. The final expanding walk-forward regime/analog model also failed: its CAGR was 1.09% without costs, −0.74% at 5 basis points and −2.54% at 10 basis points. The cover shows that model’s cost comparison."
        },
        {
          "type": "text",
          "content": "Delaying the final signal by one more session improved its 5-basis-point CAGR from −0.74% to +1.29%, and its random-timing CAGR ranked at only the 27.9th percentile. Those checks gave little support to the proposed timing mechanism. Its relatively small drawdown also came with an average target weight of about 7%, so it could not be read as evidence of good crash prediction."
        }
      ],
      "navTitle": "Confirmatory result"
    },
    {
      "id": "lessons",
      "title": "Mind the benchmark",
      "blocks": [
        {
          "type": "text",
          "content": "Information timing, the execution rule and costs change what a backtest is actually measuring, and the return series matters as well. The confirmatory notebook uses the S&P 500 price index and zero interest on cash, so it excludes dividends and the return available while out of the market. Later experiments include dividends and Treasury-bill interest, retaining next-close execution and 5-basis-point turnover costs. Their benchmark numbers differ for that reason, as well as the strategy version and scoring procedure."
        },
        {
          "type": "text",
          "content": "The later work also checked whether tone might be more useful for volatility than return direction. A tone–volatility relationship survived a historical-volatility comparison, but did not improve the volatility-targeting strategy, and most of its statistical contribution disappeared after adding the VIX. A relationship with the market was still some distance from a useful trading decision."
        }
      ],
      "navTitle": "Comparison assumptions"
    },
    {
      "id": "later-experiments",
      "title": "The better Sharpe needed a closer look",
      "blocks": [
        {
          "type": "text",
          "content": "The later threshold experiments returned to the legacy long-or-cash rule. A clean rewrite made its executed behaviour explicit: an entry permission flag was not read, and a mean-reversion exit could never run because of the branch order. Buying in the falling regime was intentional in my original design, so the unread flag was also a mismatch between the table’s label and the behaviour I wanted. The comparisons needed to state the actual rule rather than assume the label described it."
        },
        {
          "type": "text",
          "content": "A revised version removed the unreachable exit and allowed falling-regime re-entry under a calm-volatility guard or the joint price-and-tone condition. Picked by 2015–2020 Sharpe from 20 revisions, it had a later-period Sharpe of 0.75 against 0.67 for buy-and-hold, net of costs, from 1 January 2021 to 29 July 2025. Sharpe measures excess return relative to its variability; this version’s higher ratio came with a lower CAGR, 13.6% against 14.0%, and a shallower maximum drawdown, −13.4% against −24.5%."
        },
        {
          "type": "text",
          "content": "By then, I had already used the same holdout period in the research. The later result is exploratory, and it does not overturn the negative confirmatory finding. A paired bootstrap gave a 95% interval of −0.46 to +0.56 for the Sharpe gap, which includes no improvement, and small changes to several inherited settings reduced the result sharply. Expanding the search to 8,000 settings produced annual walk-forward Sharpes of only 0.11 or 0.06, depending on the selection rule."
        },
        {
          "type": "text",
          "content": "The apparent contribution from tone also depended on how the comparison was made. At the fixed chosen setting, real tone beat all 200 circularly shifted tone series. When each variant was allowed its own 2015–2020 tuning, real tone’s later-period Sharpe fell to 0.32, against 0.66 for the price-only version and a median 0.66 for shifted tone, with buy-and-hold at 0.67. The attractive setting was not one that the training procedure reliably found, so the fixed-rule result could not establish a dependable sentiment edge."
        }
      ],
      "navTitle": "Later experiments"
    },
    {
      "id": "source",
      "title": "Fresh data before another claim",
      "blocks": [
        {
          "type": "text",
          "content": "The supported outcome remains a negative result for this aggregate series and tested design. GKG history starts in 2015, the evaluation period has been inspected repeatedly, and a daily global average discards much of what distinguishes one article or event from another. My suspicion is that aggregation loses useful nuance, but that explanation has not itself been tested."
        },
        {
          "type": "text",
          "content": "A useful next experiment would fix the signal and selection procedure before collecting data after 29 July 2025, or test article-, topic- or entity-level sentiment under its own declared protocol. Further tuning on the existing comparison period would not supply an independent replication. The notebook, evaluation code and saved experiments retain both the early results and the checks that weakened them."
        },
        {
          "type": "text",
          "content": "[missing decision rationale] Add whether this work is currently continuing or has stopped here, and what determined that decision."
        }
      ],
      "navTitle": "Next research"
    }
  ],
  "cover": "/images/projects/banners/gdelt-sentiment.webp",
  "coverAlt": "Final causal GDELT model’s recorded out-of-sample CAGR: 1.09%, −0.74%, and −2.54% at 0, 5, and 10 bps respectively; not legacy exploratory results."
};

export default project;
