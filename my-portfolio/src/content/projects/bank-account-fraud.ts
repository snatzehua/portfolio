import type { Project } from "../types";

const project: Project = {
  "slug": "bank-account-fraud",
  "title": "Bank Account Fraud under Temporal Drift",
  "summary": "A chronological fraud-model study separating training recency, sample size, class imbalance, and review policy.",
  "publishedAt": "2026-10-30",
  "period": "2026",
  "role": "Course group project",
  "status": "Research in progress",
  "tags": [
    "LightGBM",
    "CatBoost",
    "Temporal validation"
  ],
  "outcome": "Includes forward-validation studies, model comparisons, and explicit operating-policy evaluation.",
  "sections": [
    {
      "id": "problem",
      "title": "Which historical examples should a fraud model use?",
      "blocks": [
        {
          "type": "text",
          "content": "The local BT4012 project studies bank-account fraud under temporal drift and class imbalance using the BAF Dataset Suite. A central comparison holds sample size and class composition comparable while varying training recency."
        }
      ]
    },
    {
      "id": "method",
      "title": "Separate model quality from the operating rule",
      "blocks": [
        {
          "type": "text",
          "content": "The local implementation includes baseline studies, feature engineering, boosting models, ensembles, and threshold or review-policy comparisons. Chronological evaluation keeps the direction of time explicit."
        }
      ]
    },
    {
      "id": "decisions",
      "title": "A newer window is not automatically better",
      "blocks": [
        {
          "type": "text",
          "content": "The first study reports no reliable general advantage for the recent training sample over its size- and class-matched historical comparison. That finding makes a simple “always train on the newest data” story inadequate."
        },
        {
          "type": "text",
          "content": "Later studies explore improvements and conditional experts. Their reports distinguish development selection from results on an already-consumed holdout."
        }
      ]
    },
    {
      "id": "limits",
      "title": "The holdout has been used",
      "blocks": [
        {
          "type": "text",
          "content": "Month 7 is a consumed exploratory holdout in the local research record. Later improvements are therefore not described here as fresh independent confirmation. The detailed experiment records remain the source for model and uncertainty comparisons."
        }
      ]
    }
  ],
  "coverSteps": [
    "Applications",
    "Time splits",
    "Review policy"
  ]
};

export default project;
