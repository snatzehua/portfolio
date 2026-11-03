import type { Project } from "../types";

const project: Project = {
  "slug": "systematic-portfolio",
  "title": "Systematic Portfolio Research",
  "summary": "A Python backtesting framework for tracing how allocation decisions become trades, fees, and portfolio returns.",
  "publishedAt": "2026-10-30",
  "period": "2026",
  "role": "Personal research project",
  "status": "In progress",
  "tags": [
    "Python",
    "pandas",
    "bt"
  ],
  "outcome": "Each run saves its inputs, decision weights, transactions, assumptions, and an interactive report.",
  "sections": [
    {
      "id": "problem",
      "title": "Make a backtest inspectable",
      "blocks": [
        {
          "type": "text",
          "content": "A return chart is easier to trust when the decisions and accounting behind it can be checked. This framework runs weekly or monthly allocation strategies on daily stock and ETF price data, keeping the signal, execution, and reporting steps separate."
        }
      ]
    },
    {
      "id": "implementation",
      "title": "From target weights to transactions",
      "blocks": [
        {
          "type": "text",
          "content": "Strategy functions return pandas weight tables. A small adapter uses bt to book historical orders and value the portfolio. It sells before buying and sizes purchases after accounting for fees, preventing commissions from pushing the portfolio beyond its cash budget."
        },
        {
          "type": "text",
          "content": "The command-line interface reads a local price snapshot and produces a Plotly report. Saved runs include transactions, weights, the input data, a source snapshot, and a manifest of parameters and versions."
        }
      ]
    },
    {
      "id": "timing",
      "title": "A decision cannot earn an earlier return",
      "blocks": [
        {
          "type": "text",
          "content": "A signal calculated at a session’s close trades at the next supplied session’s close. Its first return therefore comes after that execution. Warmup observations form the signal but sit outside the reported evaluation window."
        },
        {
          "type": "text",
          "content": "The benchmark uses the same dates, warmup, rebalancing schedule, and fee model. Keeping those assumptions aligned makes comparisons easier to interpret."
        }
      ]
    },
    {
      "id": "limits",
      "title": "What the simulation leaves out",
      "blocks": [
        {
          "type": "text",
          "content": "The current model uses long-only fractional positions in adjusted-price units and proportional transaction fees. It does not yet model spread, slippage, market impact, FX, taxes, or settlement delays."
        },
        {
          "type": "text",
          "content": "The seeded synthetic demo demonstrates the workflow. Its returns are not evidence of investment performance, and adjusted units would need a different accounting model before live execution."
        }
      ]
    }
  ],
  "repository": "https://github.com/snatzehua/systematic-portfolio",
  "cover": "/images/projects/banners/systematic-portfolio.webp",
  "coverAlt": "Equity curves from the saved seeded synthetic demo, indexed to 100; not real investment performance."
};

export default project;
