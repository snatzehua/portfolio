import type { Project } from "../types";

const project: Project = {
  "slug": "bank-account-fraud",
  "title": "Bank Account Fraud: Training Data & Review Policy",
  "summary": "Testing how training recency, class imbalance, and review decisions affect fraud detection over time.",
  "publishedAt": "2026-10-30",
  "period": "2026",
  "role": "Course group project",
  "status": "In progress",
  "tags": [
    "LightGBM",
    "CatBoost",
    "Temporal validation"
  ],
  "outcome": "Initial matched comparisons found no clear general benefit from using more recent training data.",
  "sections": [
    {
      "id": "problem",
      "title": "Which history should a fraud model learn from?",
      "blocks": [
        {
          "type": "text",
          "content": "This BT4012 group project studies the synthetic Bank Account Fraud Dataset Suite. The first question is whether recent training examples improve detection once sample size and class composition are held comparable."
        }
      ]
    },
    {
      "id": "method",
      "title": "Separate the comparisons",
      "blocks": [
        {
          "type": "text",
          "content": "Forward validation evaluates models on later months. Recent samples are compared with historical samples of the same size and class counts, while separate experiments examine class weighting, model families, and review policies."
        },
        {
          "type": "image",
          "src": "/images/projects/baf-development.webp",
          "caption": "Development months 0–6: application volume and fraud prevalence. The held-out month is excluded from this exploratory figure."
        },
        {
          "type": "text",
          "content": "Detection also depends on the operating rule. Recall at a fixed review capacity, precision, and threshold-based scores answer different questions, so the study keeps model ranking and review-policy choices distinct."
        }
      ]
    },
    {
      "id": "decisions",
      "title": "Recency alone did not explain the result",
      "blocks": [
        {
          "type": "text",
          "content": "The first matched comparisons did not establish a reliable general advantage for the recent sample. This directs attention toward how models use the data and how their scores become review decisions."
        },
        {
          "type": "text",
          "content": "Later studies compare feature engineering, boosting models, ensembles, and conditional experts. Each extension needs to distinguish a development-selected candidate from an improvement noticed after inspecting the holdout."
        }
      ]
    },
    {
      "id": "limits",
      "title": "Keep exploratory results in context",
      "blocks": [
        {
          "type": "text",
          "content": "Month 7 has already been used in the research process. Further results on that month are exploratory rather than fresh independent confirmation. The data is a synthetic benchmark, so these experiments also do not establish production performance."
        }
      ]
    }
  ],
  "cover": "/images/projects/baf-development.webp",
  "coverAlt": "Charts of application volume and fraud prevalence across development months"
};

export default project;
