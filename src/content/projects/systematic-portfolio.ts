import type { Project } from "../types";

const project: Project = {
  "slug": "systematic-portfolio",
  "title": "Systematic Portfolio Research",
  "summary": "A backtesting framework for following an allocation decision through to its trades, fees and returns.",
  "publishedAt": "2026-10-30",
  "period": "2026",
  "role": "Personal research project",
  "status": "In progress",
  "tags": [
    "Python",
    "pandas",
    "bt"
  ],
  "outcome": "Each run keeps its inputs, weights, transactions and assumptions alongside an interactive report.",
  "sections": [
    {
      "id": "problem",
      "title": "Looking behind the return chart",
      "blocks": [
        {
          "type": "text",
          "content": "This framework runs weekly or monthly allocation strategies on daily stock and ETF prices, while keeping the signal, execution and report separate. The idea is to be able to follow a return chart back through the decisions and accounting that produced it."
        }
      ],
      "navTitle": "Purpose"
    },
    {
      "id": "implementation",
      "title": "From weights to actual orders",
      "blocks": [
        {
          "type": "text",
          "content": "A strategy returns a pandas table of target weights, and a small adapter uses bt to book the orders and value the portfolio. It sells before buying and accounts for fees when sizing the purchases, so commissions do not push the portfolio beyond the cash available."
        },
        {
          "type": "text",
          "content": "The command-line interface takes a local price snapshot and produces a Plotly report. A saved run also keeps the transactions, weights, input data, source snapshot and a manifest of parameters and versions, which leaves the material needed to inspect that particular run together."
        }
      ],
      "navTitle": "Backtest pipeline"
    },
    {
      "id": "sizing",
      "title": "Sizing the trade after fees",
      "blocks": [
        {
          "type": "diagram",
          "title": "From a weight table to funded positions",
          "steps": [
            {
              "label": "Target weights",
              "detail": "A strategy returns a pandas allocation table."
            },
            {
              "label": "Solve for fees",
              "detail": "Bisection finds the equity remaining after turnover costs."
            },
            {
              "label": "Sell, then buy",
              "detail": "Release cash before sizing new purchases."
            },
            {
              "label": "Value the portfolio",
              "detail": "Book positions, cash and fees for the report."
            }
          ],
          "caption": "Target weights apply after fees. Solving that circular relationship prevents a fully invested allocation from borrowing to pay commissions."
        },
        {
          "type": "text",
          "content": "The example ranks trailing momentum, selects the top K assets and weights them equally, with an ordinary table keeping that rule independent of the execution library. Input checks reject non-positive prices, duplicate dates and incomplete coverage rather than silently filling gaps that would change the sessions the strategy uses."
        }
      ],
      "navTitle": "Fee-aware sizing"
    },
    {
      "id": "timing",
      "title": "When the trade gets its first return",
      "blocks": [
        {
          "type": "text",
          "content": "A signal calculated at a session’s close trades at the next supplied session’s close, so it only starts earning returns after that execution. Warmup observations can be used to form the signal, but sit outside the reported evaluation window."
        },
        {
          "type": "text",
          "content": "The benchmark uses the same dates, warmup, rebalancing schedule and fee model. Those choices affect the comparison, so they need to stay aligned when looking at the strategy’s returns."
        }
      ],
      "navTitle": "Execution timing"
    },
    {
      "id": "limits",
      "title": "The accounting model’s scope",
      "blocks": [
        {
          "type": "text",
          "content": "The current simulation uses long-only fractional positions in adjusted-price units, with proportional transaction fees. Spread, slippage, market impact, FX, taxes and settlement delays are outside that model."
        },
        {
          "type": "text",
          "content": "The seeded synthetic demo shows the workflow, so its return curve should be read as a demonstration. Live execution would also need a different accounting treatment for the adjusted units."
        }
      ],
      "navTitle": "Accounting limits"
    }
  ],
  "cover": "/images/projects/banners/systematic-portfolio.webp",
  "coverAlt": "Equity curves from the saved seeded synthetic demo, indexed to 100; not real investment performance."
};

export default project;
