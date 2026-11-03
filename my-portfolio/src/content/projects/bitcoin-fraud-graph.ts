import type { Project } from "../types";

const project: Project = {
  "slug": "bitcoin-fraud-graph",
  "title": "Bitcoin Transaction Fraud Detection",
  "summary": "Combining transaction features and graph structure to classify illicit Bitcoin transactions.",
  "publishedAt": "2026-10-30",
  "period": "2026",
  "role": "Course competition project",
  "status": "Completed",
  "tags": [
    "LightGBM",
    "GraphSAGE",
    "PyTorch"
  ],
  "outcome": "Blends recent-window LightGBM and GraphSAGE predictions using percentile ranks.",
  "sections": [
    {
      "id": "problem",
      "title": "Use the transaction and its neighbourhood",
      "blocks": [
        {
          "type": "text",
          "content": "The BT4012 competition supplies anonymised transaction features and a directed transaction graph. Training and test transactions come from different time steps, making the temporal split central to the modelling problem."
        }
      ]
    },
    {
      "id": "models",
      "title": "Compare tabular and graph models",
      "blocks": [
        {
          "type": "text",
          "content": "LightGBM and CatBoost learn from transaction features. GraphSAGE-style models also use neighbouring transactions, offering a different source of information. Experiments compare these approaches and additional graph architectures."
        },
        {
          "type": "image",
          "src": "/images/projects/bitcoin-graph.webp",
          "caption": "An anonymised transaction graph and an illicit-node neighbourhood. This figure illustrates the data structure."
        }
      ]
    },
    {
      "id": "decisions",
      "title": "Combine rankings carefully",
      "blocks": [
        {
          "type": "text",
          "content": "The recorded recent-window candidates train on the final part of the labelled period. Multiple seeds are averaged within each model family, then predictions are converted to percentile ranks before blending."
        },
        {
          "type": "text",
          "content": "Rank blending allows models with different score scales to contribute to one ordering. The output remains a ranking score; it is not a calibrated probability of fraud."
        }
      ]
    },
    {
      "id": "limits",
      "title": "Public submissions and final evaluation",
      "blocks": [
        {
          "type": "text",
          "content": "The experiment record includes public submission candidates and their outputs. The final private-leaderboard selection is still unconfirmed. Validation windows and public feedback should therefore be kept distinct from a final competition result."
        }
      ]
    }
  ],
  "repository": "https://github.com/snatzehua/bt-4012-competition-2026",
  "cover": "/images/projects/banners/bitcoin-fraud-graph.webp",
  "coverAlt": "Anonymised transaction graph at time step 28, with licit, illicit, and unlabelled nodes; this is data structure, not model predictions."
};

export default project;
