import type { Project } from "../types";

const project: Project = {
  "slug": "bitcoin-fraud-graph",
  "title": "Bitcoin Transaction Fraud Detection",
  "summary": "My BT4012 competition entry, combining transaction features and graph models to identify illicit Bitcoin transactions.",
  "publishedAt": "2026-11-15",
  "period": "2026",
  "role": "Individual course competition",
  "status": "Completed",
  "tags": [
    "Python",
    "LightGBM",
    "GraphSAGE",
    "GAT",
    "PyTorch"
  ],
  "outcome": "My selected LightGBM, GraphSAGE and GAT blend scored 0.95113 ROC AUC on the private competition split.",
  "sections": [
    {
      "id": "problem",
      "title": "The later transactions were different",
      "blocks": [
        {
          "type": "text",
          "content": "The BT4012 competition gives us anonymised transaction features and a directed graph of money flows, with the test transactions coming from later time steps. I worked on this as an individual entry, so the modelling had to account for how well patterns from the earlier period carried forward."
        }
      ],
      "navTitle": "Temporal drift"
    },
    {
      "id": "models",
      "title": "Using the transaction and its neighbours",
      "blocks": [
        {
          "type": "text",
          "content": "I compared tree-based models on the transaction features with graph models including GraphSAGE and GAT, which can also use the neighbouring transactions. I used coding-agent assistance for the implementation and experiment work."
        },
        {
          "type": "image",
          "src": "/images/projects/bitcoin-graph.webp",
          "caption": "An anonymised transaction graph and an illicit-node neighbourhood. This figure illustrates the data structure."
        }
      ],
      "navTitle": "Models"
    },
    {
      "id": "validation",
      "title": "Keeping the graph comparison consistent",
      "blocks": [
        {
          "type": "image",
          "src": "/images/projects/technical/bitcoin-timeline.png",
          "caption": "Original project data-audit figure: labelled training transactions by time step, hidden-label test transactions in grey, and the changing illicit share in training. It explains the temporal validation problem; it is not model performance or a post-hoc reconstruction of test labels.",
          "technical": true
        },
        {
          "type": "text",
          "content": "Validation trains on earlier time steps and scores later ones. Graph features use a visible graph consistent with the supplied test data, so one split does not quietly benefit from unavailable neighbours. Multiple fitted seeds reduce dependence on a single run. Additional hand-built graph features were also tested, but did not provide the same benefit as the separate graph-model predictions."
        }
      ],
      "navTitle": "Validation"
    },
    {
      "id": "decisions",
      "title": "The blend and the training window",
      "blocks": [
        {
          "type": "text",
          "content": "The final blend combined LightGBM, GraphSAGE and GAT, with multiple seeds for LightGBM and GraphSAGE. I trained on the 15 most recent labelled time steps because including older history lowered the later-period test scores, and converted predictions to percentile ranks before combining them."
        },
        {
          "type": "text",
          "content": "The models produce scores on different scales, so blending their ranks gives a shared ordering. The resulting score is useful for ranking transactions, although it should not be read as a calibrated probability of fraud."
        },
        {
          "type": "text",
          "content": "I also tried PageRank features and dropped them after they reduced validation performance. Illicit activity in this dataset clustered locally, and the existing neighbour features already captured much of that information."
        }
      ],
      "navTitle": "Blend and recency"
    },
    {
      "id": "limits",
      "title": "The selected submission",
      "blocks": [
        {
          "type": "text",
          "content": "My selected blend scored 0.95113 ROC AUC on the private competition split. That is the result for this held-out set of anonymised Bitcoin transactions; evaluating a deployed fraud system would involve a different setting."
        },
        {
          "type": "text",
          "content": "The public and private rankings differed, so the highest public score was not a reliable way to choose a submission. I am using the selected submission’s result here, rather than picking the best private score retrospectively from every experiment."
        }
      ],
      "navTitle": "Competition result"
    }
  ],
  "repository": "https://github.com/snatzehua/bt-4012-competition-2026",
  "cover": "/images/projects/banners/bitcoin-fraud-graph.webp",
  "coverAlt": "Anonymised transaction graph at time step 28, with licit, illicit, and unlabelled nodes; this is data structure, not model predictions."
};

export default project;
