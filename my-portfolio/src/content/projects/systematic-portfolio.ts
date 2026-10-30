import type { Project } from "../types";

const project: Project = {
  "slug": "systematic-portfolio",
  "title": "Systematic Portfolio Research",
  "summary": "A reproducible daily-data backtesting framework with explicit signal timing, fees, and portfolio accounting.",
  "publishedAt": "2026-10-30",
  "period": "2026",
  "role": "Personal research project",
  "status": "Research framework",
  "tags": [
    "Python",
    "pandas",
    "bt"
  ],
  "outcome": "Separates strategy decisions from execution and produces inspectable research reports.",
  "sections": [
    {
      "id": "problem",
      "title": "Make a backtest inspectable",
      "blocks": [
        {
          "type": "text",
          "content": "The project focuses on daily stock and ETF data with weekly or monthly rebalancing. The first milestone is a reproducible historical experiment, with decisions and accounting that can be inspected."
        }
      ]
    },
    {
      "id": "implementation",
      "title": "From prices to a ledger",
      "blocks": [
        {
          "type": "text",
          "content": "Strategy functions return weight tables. A small bt adapter handles historical order booking, valuation, fee-aware sizing, and selling before buying. A CLI reads local price snapshots and produces a self-contained Plotly report."
        }
      ]
    },
    {
      "id": "timing",
      "title": "Keep the decision and execution clocks separate",
      "blocks": [
        {
          "type": "text",
          "content": "A period-end signal executes at the next supplied session’s close. The implementation separates warmup observations from the evaluation window and uses the same timing and costs for its benchmark."
        },
        {
          "type": "text",
          "content": "Keeping strategy logic outside the engine makes allocation ideas easier to inspect without tying every research function to a backtesting-library object."
        }
      ]
    },
    {
      "id": "limits",
      "title": "Research assumptions",
      "blocks": [
        {
          "type": "text",
          "content": "The framework models long-only fractional positions in adjusted total-return units. Its documented limits include slippage, market impact, FX, taxes, and corporate-action accounting. The seeded synthetic demo illustrates the workflow; it is not investment performance evidence."
        }
      ]
    }
  ],
  "repository": "https://github.com/snatzehua/systematic-portfolio",
  "coverSteps": [
    "Prices",
    "Weights",
    "Ledger"
  ]
};

export default project;
