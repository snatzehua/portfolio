import type { Project } from "../types";

const project: Project = {
  "slug": "hmm-pos-tagger",
  "title": "HMM Part-of-Speech Tagger",
  "summary": "Sequence labelling for tweets using a hidden Markov model and Viterbi decoding.",
  "publishedAt": "2026-10-30",
  "period": "2025",
  "role": "Machine-learning project",
  "status": "Implementation",
  "tags": [
    "Python",
    "HMM",
    "Viterbi"
  ],
  "outcome": "The repository contains probability estimates, baseline predictions, and Viterbi outputs.",
  "sections": [
    {
      "id": "problem",
      "title": "Tag a sentence as a sequence",
      "blocks": [
        {
          "type": "text",
          "content": "The tagger learns from labelled tweets and predicts a part-of-speech tag sequence for unseen text. A hidden Markov model represents transitions between tags and the relationship between tags and observed words."
        }
      ]
    },
    {
      "id": "implementation",
      "title": "From probability estimates to decoding",
      "blocks": [
        {
          "type": "text",
          "content": "The Python implementation works with emission and transition probabilities and uses Viterbi decoding to find the highest-likelihood tag sequence. The repository retains intermediate probability tables and prediction files."
        }
      ]
    },
    {
      "id": "decisions",
      "title": "Use neighbouring tags rather than isolated guesses",
      "blocks": [
        {
          "type": "text",
          "content": "The sequence model allows a tag decision to depend on the tag context of a sentence. The saved naive and Viterbi prediction outputs also make the baseline-versus-sequence distinction inspectable."
        }
      ]
    },
    {
      "id": "scope",
      "title": "Keep evaluation claims bounded",
      "blocks": [
        {
          "type": "text",
          "content": "This entry describes the method and available artifacts. It does not attach an accuracy figure because the README does not establish a reproducible benchmark result for this portfolio snapshot."
        }
      ]
    }
  ],
  "repository": "https://github.com/snatzehua/pos-tagger",
  "cover": "/images/experience-entries.pos-tagger.png",
  "coverAlt": "Part-of-speech tagging project illustration"
};

export default project;
