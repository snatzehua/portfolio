import type { Project } from "../types";

const project: Project = {
  "slug": "jurai",
  "title": "JurAI — Regulatory Research Assistant",
  "summary": "A team prototype that uses retrieved evidence and several agents to review a product feature’s regulatory implications.",
  "publishedAt": "2026-11-15",
  "period": "2025",
  "role": "Team hackathon project · Frontend and LightRAG ingestion",
  "status": "In progress",
  "tags": [
    "Next.js",
    "TypeScript",
    "Google ADK",
    "LightRAG"
  ],
  "outcome": "The prototype produces a structured, cited assessment through a jury–critic loop. I worked on the frontend and LightRAG ingestion.",
  "sections": [
    {
      "id": "problem",
      "title": "Starting from a feature description",
      "blocks": [
        {
          "type": "text",
          "content": "We built JurAI to take a product feature and a target region, then put together an initial regulatory assessment with evidence a reviewer can follow. The aim is to give that review an organised starting point."
        }
      ],
      "navTitle": "Purpose"
    },
    {
      "id": "pipeline",
      "title": "How the assessment is put together",
      "blocks": [
        {
          "type": "text",
          "content": "The system retrieves similar past assessments and relevant legislation through two routes. Jury agents prepare their assessments, critics can request revisions, and a judge consolidates the outputs into one report, with a Next.js interface connected to the Python backend."
        },
        {
          "type": "image",
          "src": "/images/projects/jurai.webp",
          "caption": "Original team workflow diagram from the technical documentation, including terminology enrichment, parallel juries, retrieval tools, critic revisions and the final summariser. The model names are historical examples from the prototype, not a current provider configuration.",
          "technical": true
        }
      ],
      "navTitle": "Agent pipeline"
    },
    {
      "id": "my-contribution",
      "title": "My part in the project",
      "blocks": [
        {
          "type": "text",
          "content": "I built the Next.js frontend from a rough skeleton, including the submission area, settings, final report and terminology editor. I also added LightRAG ingestion and worked on integration and prompt issues as the pieces came together."
        },
        {
          "type": "text",
          "content": "The jury, critic and judge pipeline was a team effort."
        }
      ],
      "navTitle": "My contribution"
    },
    {
      "id": "retrieval",
      "title": "The two retrieval paths",
      "blocks": [
        {
          "type": "text",
          "content": "LightRAG supplies entity-based legislation retrieval, while vector similarity retrieves related past assessments. The ingestion represents relationships between material, which suits legislation and precedents that refer to each other."
        }
      ],
      "navTitle": "Retrieval"
    },
    {
      "id": "decisions",
      "title": "Following the evidence behind a verdict",
      "blocks": [
        {
          "type": "text",
          "content": "The JSON output gives the reports a consistent shape, and citations let a reviewer follow what supports each conclusion. Having a separate critic also gives each assessment a place to be challenged before the reports are consolidated."
        },
        {
          "type": "text",
          "content": "Several agents can still start from the same mistaken assumption. The loop makes the review process more organised, but the number of agents does not establish how reliable the verdict is."
        }
      ],
      "navTitle": "Evidence and review"
    },
    {
      "id": "limits",
      "title": "What still needs checking",
      "blocks": [
        {
          "type": "text",
          "content": "The prototype has not been benchmarked against human legal reviews. Its usefulness depends on what retrieval covers, how good that evidence is and whether a model has gone beyond what the evidence supports, so those need evaluation before relying on its regulatory conclusions."
        }
      ],
      "navTitle": "Limitations"
    }
  ],
  "repository": "https://github.com/lcwlouis/techjam-2025",
  "cover": "/images/projects/banners/jurai.webp",
  "coverAlt": "Illustration of JurAI’s four jury/critic branches feeding a consolidated report; redrawn from the team’s architecture diagram."
};

export default project;
