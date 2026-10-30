import type { Project } from "../types";

const project: Project = {
  "slug": "gdelt-sentiment",
  "title": "GDELT Sentiment: Testing Market Timing",
  "summary": "Testing whether daily news tone adds a robust out-of-sample timing signal for the S&P 500.",
  "publishedAt": "2026-10-30",
  "period": "Jul 2025 — 2026",
  "role": "Personal research project",
  "status": "Research finding",
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
      "title": "The question",
      "blocks": [
        {
          "type": "text",
          "content": "The project asks whether daily GDELT news tone can help time the S&P 500. It began with heuristic notebook strategies and later added explicit signal timing, trading costs, statistical tests, and walk-forward evaluation."
        }
      ]
    },
    {
      "id": "early-exploration",
      "title": "Why the early chart is not the final result",
      "blocks": [
        {
          "type": "text",
          "content": "The original exploratory notebook suggested promising historical results. Those same-bar, cost-free comparisons are retained as part of the research history, rather than treated as authoritative performance evidence."
        }
      ]
    },
    {
      "id": "approach",
      "title": "Make information availability explicit",
      "blocks": [
        {
          "type": "text",
          "content": "The current c-finance repository treats each calendar day’s aggregate tone as available only on the first trading session strictly after that date. It separates forward-return labels from signal inputs and models next-close execution with trading costs."
        },
        {
          "type": "text",
          "content": "The implementation includes lead–lag and HAC regression tests, a cash/share backtest ledger, causal filters, and an expanding walk-forward regime model."
        }
      ]
    },
    {
      "id": "finding",
      "title": "The hypothesis did not survive confirmation",
      "blocks": [
        {
          "type": "text",
          "content": "The repository’s confirmatory evaluation reports no robust S&P 500 timing signal from the tested daily market-wide tone series. The documented legacy comparisons trail buy-and-hold after costs, and the final causal model also fails its out-of-sample test."
        },
        {
          "type": "text",
          "content": "That is a finding about this data series and evaluation design. It does not establish that every form of news information is uninformative."
        }
      ]
    },
    {
      "id": "lessons",
      "title": "What the research changed",
      "blocks": [
        {
          "type": "text",
          "content": "The useful result is the evaluation process: define when information is available, separate exploratory rules from confirmation, include costs, and compare against common benchmarks. A visually encouraging chart is not enough to establish a trading edge."
        }
      ]
    },
    {
      "id": "source",
      "title": "Current research record",
      "blocks": [
        {
          "type": "text",
          "content": "The updated conclusion follows the local [c-finance repository](https://github.com/snatzehua/c-finance), its current README, and its documented notebook structure. These portfolio notes summarize that record; they are not a fresh execution of the experiments."
        }
      ]
    }
  ]
};

export default project;
