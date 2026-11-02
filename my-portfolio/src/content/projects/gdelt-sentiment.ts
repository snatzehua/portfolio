import type { Project } from "../types";

const project: Project = {
  "slug": "gdelt-sentiment",
  "title": "GDELT Sentiment: Testing Market Timing",
  "summary": "Testing whether daily news tone can improve S&P 500 market timing after accounting for information delays and costs.",
  "publishedAt": "2026-10-30",
  "period": "Jul 2025 — 2026",
  "role": "Personal research project",
  "status": "Completed",
  "tags": [
    "Time series",
    "Sentiment analysis",
    "Backtesting"
  ],
  "repository": "https://github.com/snatzehua/c-finance",
  "outcome": "Confirmatory tests found no robust timing edge under the tested design.",
  "coverSteps": [
    "News tone",
    "Causal tests",
    "No robust edge"
  ],
  "sections": [
    {
      "id": "problem",
      "title": "Does daily news tone contain a timing signal?",
      "blocks": [
        {
          "type": "text",
          "content": "The project began with heuristic strategies using aggregate GDELT news tone. It then developed a more explicit evaluation: when the information becomes available, when a trade can execute, and whether any apparent edge survives costs and out-of-sample testing."
        }
      ]
    },
    {
      "id": "early-exploration",
      "title": "Revisit the encouraging early results",
      "blocks": [
        {
          "type": "text",
          "content": "The exploratory notebook produced promising historical charts. Those comparisons used same-bar signals and omitted trading costs, making them a weak basis for judging a usable strategy. They remain part of the research history."
        }
      ]
    },
    {
      "id": "approach",
      "title": "Put information availability into the backtest",
      "blocks": [
        {
          "type": "text",
          "content": "Each calendar day’s aggregate tone is treated as available on the first trading session strictly after that date. Forward returns are evaluation labels only; they never feed the signal. Trades execute at the next close with costs."
        },
        {
          "type": "text",
          "content": "Lead–lag tests and regressions examine the relationship with returns. A cash/share ledger, causal filters, and an expanding walk-forward regime model support the strategy comparisons."
        }
      ]
    },
    {
      "id": "finding",
      "title": "The timing hypothesis did not hold up",
      "blocks": [
        {
          "type": "text",
          "content": "Confirmatory evaluation found no robust timing edge from the tested daily market-wide tone series. The legacy strategy comparisons trail buy-and-hold after costs, and the final causal model also fails its out-of-sample test."
        },
        {
          "type": "text",
          "content": "The conclusion applies to this series and evaluation design. More specific news signals, such as entity- or topic-level information, would require their own tests."
        }
      ]
    },
    {
      "id": "lessons",
      "title": "What made the evaluation useful",
      "blocks": [
        {
          "type": "text",
          "content": "The work highlights how much a result depends on information timing, execution assumptions, and the distinction between exploration and confirmation. Costs and common benchmarks make those assumptions visible."
        }
      ]
    },
    {
      "id": "source",
      "title": "Further research",
      "blocks": [
        {
          "type": "text",
          "content": "Useful next experiments include topic- or entity-level sentiment, other indices, and a predeclared replication. The [research record](https://github.com/snatzehua/c-finance) retains the notebook, evaluation code, and limitations behind the current conclusion."
        }
      ]
    }
  ]
};

export default project;
