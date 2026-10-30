import type { Project } from "../types";

const project: Project = {
  "slug": "jurai",
  "title": "JurAI — Geo-Regulation Research",
  "summary": "A multi-agent prototype that retrieves regulatory evidence and critiques region-specific feature assessments.",
  "publishedAt": "2026-10-30",
  "period": "2025",
  "role": "Team hackathon project",
  "status": "Prototype",
  "tags": [
    "Next.js",
    "Python",
    "RAG"
  ],
  "outcome": "Implements retrieval, jury/critic iterations, and structured report generation.",
  "sections": [
    {
      "id": "problem",
      "title": "Surface questions before a product ships",
      "blocks": [
        {
          "type": "text",
          "content": "JurAI explores early regulatory review for a feature description and target region. Its intended output is a structured report linking the assessment to retrieved evidence."
        }
      ]
    },
    {
      "id": "pipeline",
      "title": "Retrieval, critique, and consolidation",
      "blocks": [
        {
          "type": "text",
          "content": "The repository describes two retrieval routes: similar past assessments and relevant legislation. Jury agents produce assessments, critic agents request revisions, and a judge consolidates their outputs. A Next.js interface calls the Python backend."
        },
        {
          "type": "image",
          "src": "/images/projects/jurai.webp",
          "caption": "Original JurAI retrieval, jury, critic, and summarization workflow from the team repository."
        }
      ]
    },
    {
      "id": "decisions",
      "title": "Make the reasoning reviewable",
      "blocks": [
        {
          "type": "text",
          "content": "The design uses structured JSON and cited evidence so a reviewer can inspect what each assessment relies on. Model diversity and criticism are parts of the prototype’s workflow, not proof that its answers are correct."
        }
      ]
    },
    {
      "id": "limits",
      "title": "A prototype for review support",
      "blocks": [
        {
          "type": "text",
          "content": "The repository lists comparison with human legal reviews as future work. This page describes the implemented research workflow and makes no claim of legally reliable or automated compliance decisions."
        }
      ]
    }
  ],
  "repository": "https://github.com/lcwlouis/techjam-2025",
  "cover": "/images/projects/jurai.webp",
  "coverAlt": "JurAI workflow linking retrieval, jury agents, critic, and judge"
};

export default project;
