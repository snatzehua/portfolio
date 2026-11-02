import type { Project } from "../types";

const project: Project = {
  "slug": "jurai",
  "title": "JurAI — Regulatory Research Assistant",
  "summary": "A multi-agent prototype for reviewing product features against region-specific regulatory evidence.",
  "publishedAt": "2026-10-30",
  "period": "2025",
  "role": "Team hackathon project",
  "status": "In progress",
  "tags": [
    "Next.js",
    "Python",
    "RAG"
  ],
  "outcome": "Produces structured assessments with retrieved evidence and a jury–critic review loop.",
  "sections": [
    {
      "id": "problem",
      "title": "Surface questions early in product development",
      "blocks": [
        {
          "type": "text",
          "content": "JurAI takes a feature description and a target region, then assembles an initial regulatory assessment. The goal is to give a reviewer an organised starting point with evidence they can follow."
        }
      ]
    },
    {
      "id": "pipeline",
      "title": "Retrieve, critique, and consolidate",
      "blocks": [
        {
          "type": "text",
          "content": "Two retrieval routes find similar past assessments and relevant legislation. Jury agents prepare assessments, critic agents request revisions, and a judge consolidates the outputs. A Next.js interface connects to the Python backend."
        },
        {
          "type": "image",
          "src": "/images/projects/jurai.webp",
          "caption": "The team’s JurAI workflow: retrieve evidence, run jury and critic agents, then consolidate their assessments."
        }
      ]
    },
    {
      "id": "decisions",
      "title": "Make each assessment inspectable",
      "blocks": [
        {
          "type": "text",
          "content": "Structured JSON gives the report a consistent shape. Cited evidence lets a reviewer inspect what supports a conclusion, while separate critics create a place to challenge an assessment before consolidation."
        },
        {
          "type": "text",
          "content": "Several agents can still share the same mistaken assumption. The review loop helps organise scrutiny, but its reliability needs evaluation."
        }
      ]
    },
    {
      "id": "limits",
      "title": "Human review remains essential",
      "blocks": [
        {
          "type": "text",
          "content": "The prototype has not been benchmarked against human legal reviews. Retrieval coverage, evidence quality, and unsupported model conclusions remain important evaluation questions before this could support dependable regulatory review."
        }
      ]
    }
  ],
  "repository": "https://github.com/lcwlouis/techjam-2025",
  "cover": "/images/projects/jurai.webp",
  "coverAlt": "JurAI workflow linking retrieval, jury agents, critic, and judge"
};

export default project;
