import type { Project } from "../types";

const project: Project = {
  "slug": "hmm-pos-tagger",
  "title": "HMM Part-of-Speech Tagger",
  "summary": "Assigning word classes to tweets with a hidden Markov model and Viterbi decoding.",
  "publishedAt": "2026-10-30",
  "period": "2025",
  "role": "Machine-learning project",
  "status": "Completed",
  "tags": [
    "Python",
    "HMM",
    "Viterbi"
  ],
  "outcome": "Compares independent-word baselines with sequence decoding using smoothed probabilities.",
  "sections": [
    {
      "id": "problem",
      "title": "Read words as a sequence",
      "blocks": [
        {
          "type": "text",
          "content": "A word’s likely part of speech depends on its context. This Python tagger learns from labelled tweets and predicts tags for unseen text, comparing independent-word baselines with a hidden Markov model."
        }
      ]
    },
    {
      "id": "implementation",
      "title": "Estimate probabilities, then decode",
      "blocks": [
        {
          "type": "text",
          "content": "Emission probabilities connect tags to observed words. Transition probabilities capture how tags follow one another, including sentence boundaries. Smoothing reserves probability for unseen words and transitions."
        },
        {
          "type": "image",
          "src": "/images/projects/pos-tagger.svg",
          "caption": "Illustrative HMM structure: hidden tags connect to the next tag and emit observed words. This is a method diagram, not model output."
        }
      ]
    },
    {
      "id": "decisions",
      "title": "Find the best complete path",
      "blocks": [
        {
          "type": "text",
          "content": "Viterbi decoding keeps the best partial sequence ending in each tag at each word. Backpointers recover the best complete tag sequence after reaching the end of the sentence."
        },
        {
          "type": "text",
          "content": "Saved probability tables and baseline/Viterbi predictions make the intermediate steps available for comparison."
        }
      ]
    },
    {
      "id": "scope",
      "title": "What to evaluate next",
      "blocks": [
        {
          "type": "text",
          "content": "A reproducible evaluation needs a fixed data split, clearly identified model variants, and error analysis, especially for unseen words. Longer sequences also warrant checking the numerical stability of multiplying probabilities."
        }
      ]
    }
  ],
  "repository": "https://github.com/snatzehua/pos-tagger",
  "cover": "/images/projects/pos-tagger.svg",
  "coverAlt": "Illustrative hidden tag sequence connected to observed words"
};

export default project;
