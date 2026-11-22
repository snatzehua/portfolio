import type { Project } from "../types";

const project: Project = {
  "slug": "hmm-pos-tagger",
  "title": "HMM Part-of-Speech Tagger",
  "summary": "A Python tagger comparing word-by-word predictions with an HMM that uses the surrounding tag sequence.",
  "publishedAt": "2026-10-30",
  "period": "2025",
  "role": "Machine-learning project",
  "status": "Completed",
  "tags": [
    "Python",
    "HMM",
    "Viterbi"
  ],
  "outcome": "The project compares independent-word baselines with Viterbi decoding using smoothed probabilities.",
  "sections": [
    {
      "id": "problem",
      "title": "The words around a word matter",
      "blocks": [
        {
          "type": "text",
          "content": "The tagger learns from labelled tweets and predicts parts of speech for unseen text. It compares predictions made one word at a time with a hidden Markov model, where the likely tag also depends on the sequence around it."
        }
      ],
      "navTitle": "Sequence tagging"
    },
    {
      "id": "implementation",
      "title": "The probabilities behind the tags",
      "blocks": [
        {
          "type": "text",
          "content": "Emission probabilities describe how tags relate to observed words, while transition probabilities describe which tags tend to follow each other, including sentence boundaries. Smoothing leaves some probability for words and transitions that did not appear in training."
        },
        {
          "type": "image",
          "src": "/images/projects/pos-tagger.svg",
          "caption": "Illustrative HMM structure: hidden tags connect to the next tag and emit observed words. This is a method diagram, not model output."
        }
      ],
      "navTitle": "Probability estimates"
    },
    {
      "id": "decisions",
      "title": "Finding the sequence with Viterbi",
      "blocks": [
        {
          "type": "text",
          "content": "Viterbi keeps the best partial sequence ending in each tag as it moves through the sentence. Backpointers then let it recover the best complete path once it reaches the end, instead of having to keep every possible sequence."
        },
        {
          "type": "text",
          "content": "The saved probability tables and predictions from the baseline and Viterbi versions make those intermediate steps available to compare."
        }
      ],
      "navTitle": "Viterbi"
    },
    {
      "id": "decoding",
      "title": "Building and decoding the probability tables",
      "blocks": [
        {
          "type": "diagram",
          "title": "Viterbi at each word",
          "steps": [
            {
              "label": "Previous scores",
              "detail": "Keep the best partial path ending in each tag."
            },
            {
              "label": "Score transitions",
              "detail": "Multiply by transition and current-word emission scores."
            },
            {
              "label": "Keep each winner",
              "detail": "Store the best score and predecessor per current tag."
            },
            {
              "label": "Recover the path",
              "detail": "After the final word, follow backpointers to the start."
            }
          ],
          "caption": "Steps 1–3 repeat for every word. The recurrence takes O(TK²) for T words and K tags, rather than enumerating Kᵀ tag sequences."
        },
        {
          "type": "text",
          "content": "Training counts word–tag pairs and transitions, including sentence start and stop states. Additive smoothing and an unknown-word entry give unseen cases non-zero scores. The saved tables make those estimates inspectable, while the probability-product implementation still needs numerical-stability checks on long sequences."
        }
      ],
      "navTitle": "Decoding pipeline"
    },
    {
      "id": "scope",
      "title": "The evaluation to follow up on",
      "blocks": [
        {
          "type": "text",
          "content": "A reproducible comparison needs a fixed split and clearly identified model variants, with error analysis for cases such as unseen words. Longer sequences also need a check of numerical stability when probabilities are multiplied together."
        }
      ],
      "navTitle": "Evaluation limits"
    }
  ],
  "repository": "https://github.com/snatzehua/pos-tagger",
  "cover": "/images/projects/banners/hmm-pos-tagger.webp",
  "coverAlt": "Heatmap of eight selected tag-to-tag probabilities from the saved HMM transition table; not accuracy or prediction results."
};

export default project;
