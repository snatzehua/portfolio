import type { Project } from "../types";

const project: Project = {
  "slug": "bitcoin-fraud-graph",
  "title": "Bitcoin Transaction Fraud Detection",
  "summary": "Comparing tree models and graph neural networks on temporally ordered Bitcoin transaction data.",
  "publishedAt": "2026-10-30",
  "period": "2026",
  "role": "Course competition project",
  "status": "Recorded experiments",
  "tags": [
    "LightGBM",
    "GraphSAGE",
    "PyTorch"
  ],
  "outcome": "Records recent-window models, graph experiments, and rank-blended competition submissions.",
  "sections": [
    {
      "id": "problem",
      "title": "Use transaction features and graph context",
      "blocks": [
        {
          "type": "text",
          "content": "The competition classifies illicit Bitcoin transactions from anonymised transaction features and a directed transaction graph. Training and test transactions occupy different time steps."
        }
      ]
    },
    {
      "id": "models",
      "title": "Compare complementary model families",
      "blocks": [
        {
          "type": "text",
          "content": "The repository contains LightGBM and CatBoost experiments alongside GraphSAGE-style models and other graph architectures. Recorded candidates blend model scores after converting them into percentile ranks."
        },
        {
          "type": "image",
          "src": "/images/projects/bitcoin-graph.webp",
          "caption": "Repository visualization of an anonymised transaction graph and an illicit-node neighbourhood; this is a data illustration, not a prediction-performance chart."
        }
      ]
    },
    {
      "id": "decisions",
      "title": "Treat time and score interpretation carefully",
      "blocks": [
        {
          "type": "text",
          "content": "The recorded recent-window candidates use the final portion of the training period. Within a model family, multiple seeds are averaged before rank blending. The resulting blend is a ranking score rather than a calibrated probability."
        }
      ]
    },
    {
      "id": "limits",
      "title": "Recorded public candidates are not the final selection",
      "blocks": [
        {
          "type": "text",
          "content": "The README records public submission candidates and their outputs. It explicitly leaves the final private-leaderboard selection unconfirmed. This portfolio does not infer a final rank, winning result, or private score."
        }
      ]
    }
  ],
  "repository": "https://github.com/snatzehua/bt-4012-competition-2026",
  "cover": "/images/projects/bitcoin-graph.webp",
  "coverAlt": "Transaction network diagram with connected clusters of nodes"
};

export default project;
