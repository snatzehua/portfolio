import type { Project } from "../types";

const project: Project = {
  "slug": "bank-account-fraud",
  "title": "Bank Account Fraud: Training Data & Review Policy",
  "summary": "A group study of how training data and review decisions affect fraud detection across later months.",
  "publishedAt": "2026-10-30",
  "period": "2026",
  "role": "Course group project",
  "status": "In progress",
  "tags": [
    "LightGBM",
    "CatBoost",
    "Temporal validation"
  ],
  "outcome": "The first matched comparisons did not show a reliable general benefit from using more recent training data.",
  "sections": [
    {
      "id": "problem",
      "title": "Choosing the training history",
      "blocks": [
        {
          "type": "text",
          "content": "For this BT4012 group project, we worked with the synthetic Bank Account Fraud Dataset Suite. The first comparison looks at whether recent examples improve detection when sample size and class composition are kept comparable, so a change in either of those does not get mistaken for a recency effect."
        }
      ],
      "navTitle": "Research question"
    },
    {
      "id": "method",
      "title": "Keeping the comparisons separate",
      "blocks": [
        {
          "type": "text",
          "content": "Models are evaluated on later months, and recent samples are compared with historical samples of the same size and class counts. Class weighting, model families and review policies are examined separately, since each can change the result in a different way."
        },
        {
          "type": "image",
          "src": "/images/projects/baf-development.webp",
          "caption": "Development months 0–6: application volume and fraud prevalence. The held-out month is excluded from this exploratory figure."
        },
        {
          "type": "text",
          "content": "The operating rule matters too. Recall at a fixed review capacity, precision and threshold-based scores answer different questions, so the model’s ranking and the decision about which cases to review need to be considered separately."
        }
      ],
      "navTitle": "Matched comparisons"
    },
    {
      "id": "experiment-flow",
      "title": "From a frozen comparison to a review decision",
      "blocks": [
        {
          "type": "diagram",
          "title": "Separating the model from the review policy",
          "steps": [
            {
              "label": "Match training samples",
              "detail": "Control sample size and class counts across histories."
            },
            {
              "label": "Fit on earlier months",
              "detail": "Train each candidate under its study protocol."
            },
            {
              "label": "Apply a review policy",
              "detail": "Turn scores into ranked cases or threshold decisions."
            },
            {
              "label": "Score later months",
              "detail": "Compare detection under the same operating rule."
            }
          ],
          "caption": "Month 7 is already consumed. Further inspection of its outcomes is exploratory."
        },
        {
          "type": "text",
          "content": "Per-study configurations, saved selections, predictions and findings keep the comparison inspectable. A fixed quota measures which cases reach the top of the ranking, while threshold-based F-scores also depend on the selected operating threshold. Separating those policies helps identify where an apparent gain comes from."
        }
      ],
      "navTitle": "Evaluation pipeline"
    },
    {
      "id": "decisions",
      "title": "What the first comparison showed",
      "blocks": [
        {
          "type": "text",
          "content": "The first matched comparisons did not establish a reliable general advantage for the recent sample. That left the way models use the data, and the way scores turn into review decisions, as other parts of the problem to examine."
        },
        {
          "type": "text",
          "content": "Later studies compare feature engineering, boosting models, ensembles and conditional experts. For those extensions, a candidate selected on development data needs to be distinguished from an improvement noticed after inspecting the holdout."
        }
      ],
      "navTitle": "Findings"
    },
    {
      "id": "limits",
      "title": "The holdout has already been used",
      "blocks": [
        {
          "type": "text",
          "content": "Month 7 has already been used in the research process, so further results on it are exploratory. The data is also a synthetic benchmark, and any claim about a production fraud system would need evidence from that setting."
        }
      ],
      "navTitle": "Holdout limits"
    }
  ],
  "cover": "/images/projects/banners/bank-account-fraud.webp",
  "coverAlt": "Fraud prevalence in development months 0–6 from the first BAF study; the held-out month is excluded."
};

export default project;
