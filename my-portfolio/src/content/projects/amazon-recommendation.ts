import type { Project } from "../types";

const project: Project = {
  "slug": "amazon-recommendation",
  "title": "Amazon Review Recommendation System",
  "summary": "A group project where I worked on adding review sentiment to a neural product recommender.",
  "publishedAt": "2026-11-15",
  "period": "2025",
  "role": "Course group project · Sentiment modelling",
  "status": "Completed",
  "tags": [
    "Python",
    "TensorFlow",
    "DistilBERT",
    "NeuMF"
  ],
  "outcome": "With sentiment added, the all-users evaluation’s MAP@10 went from 0.454 to 0.697 and NDCG@10 from 0.534 to 0.704.",
  "sections": [
    {
      "id": "problem",
      "title": "Using the reviews as well as the ratings",
      "blocks": [
        {
          "type": "text",
          "content": "For this group project, we looked at ways to recommend products from Amazon review data. I led the sentiment work, feeding information from the review text into the recommender alongside the rating data, since the text gives us another way to describe a user’s response to a product."
        }
      ],
      "navTitle": "Review sentiment"
    },
    {
      "id": "models",
      "title": "The models we compared",
      "blocks": [
        {
          "type": "text",
          "content": "We compared collaborative filtering, TF-IDF and neural collaborative filtering, including GMF, MLP and NeuMF. The data came from samples of the larger Amazon review collection, which has more than 500 million reviews; that figure describes the source collection, while the models ran on the samples."
        },
        {
          "type": "text",
          "content": "For the sentiment extension, DistilBERT scores the review text and NeuMF takes those scores as an extra input. The comparison is against the pretrained NeuMF model, so it gives a way to look at what changed when sentiment was added."
        }
      ],
      "navTitle": "Model comparison"
    },
    {
      "id": "implementation",
      "title": "How sentiment enters the recommender",
      "blocks": [
        {
          "type": "diagram",
          "title": "Where review sentiment enters NeuMF",
          "steps": [
            {
              "label": "Review text",
              "detail": "Run the text through pretrained DistilBERT."
            },
            {
              "label": "Sentiment scores",
              "detail": "Supply the text signal as an extra model input."
            },
            {
              "label": "NeuMF",
              "detail": "Combine it with learned user–item interaction features."
            },
            {
              "label": "Product ranking",
              "detail": "Evaluate the recommended list with MAP@10 and NDCG@10."
            }
          ],
          "caption": "This traces the additional sentiment input. User and item embeddings also feed NeuMF directly."
        },
        {
          "type": "text",
          "content": "NeuMF combines a GMF interaction branch with an MLP branch, with the pretrained version initialised from their separately trained weights. The recommender learns how sentiment relates to the user–item ranking; its ranking metrics do not measure the sentiment classifier’s accuracy."
        },
        {
          "type": "text",
          "content": "[missing decision rationale] Add why review sentiment was chosen as the text representation, how its availability was aligned with the recommendation task, and which alternatives you considered. This is needed to explain the modelling choice beyond the observed score change."
        }
      ],
      "navTitle": "NeuMF integration"
    },
    {
      "id": "results",
      "title": "The gain in that evaluation",
      "blocks": [
        {
          "type": "text",
          "content": "Adding sentiment raised MAP@10 from 0.454 to 0.697 and NDCG@10 from 0.534 to 0.704 in the all-users evaluation. Those numbers describe that particular ranking test, so the evaluation setup matters when interpreting how large the gain was."
        }
      ],
      "navTitle": "Ranking results"
    },
    {
      "id": "limits",
      "title": "A different test gives a different picture",
      "blocks": [
        {
          "type": "text",
          "content": "The baseline scored much lower in a separate leave-one-out evaluation. There is no paired sentiment run under that setup in this comparison, so the all-users result does not tell us whether the same improvement carries over to leave-one-out ranking."
        }
      ],
      "navTitle": "Evaluation limits"
    }
  ],
  "cover": "/images/projects/banners/amazon-recommendation.webp",
  "coverAlt": "Conceptual review-sentiment input feeding a recommendation ranking; no invented evaluation chart or real customer reviews.",
  "repository": "https://github.com/snatzehua/bt4222"
};

export default project;
