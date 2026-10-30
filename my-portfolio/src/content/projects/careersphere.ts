import type { Project } from "../types";

const project: Project = {
  "slug": "careersphere",
  "title": "CareerSphere",
  "summary": "Grounded career exploration that connects a person’s skills to roles, gaps, courses, and jobs.",
  "publishedAt": "2026-10-30",
  "period": "2026",
  "role": "Team hackathon project",
  "status": "Prototype",
  "tags": [
    "React",
    "FastAPI",
    "DuckDB"
  ],
  "outcome": "Combines a 3D role map with data-backed skills and career recommendations.",
  "sections": [
    {
      "id": "problem",
      "title": "Finding a useful next move",
      "blocks": [
        {
          "type": "text",
          "content": "CareerSphere was built for the PyCon SG Jobs & Skills hackathon. It helps a person understand where they stand, which roles are nearby, and what they could do to move toward them."
        }
      ]
    },
    {
      "id": "approach",
      "title": "Language models meet structured data",
      "blocks": [
        {
          "type": "text",
          "content": "The app parses a profile or résumé, matches skills against the SkillsFuture framework, and uses tools to compare role requirements, identify gaps, and retrieve courses and job postings. A React interface presents the results, including a 3D sphere of related roles."
        },
        {
          "type": "text",
          "content": "The local architecture separates an agent orchestrator from a deterministic tool registry and a DuckDB snapshot. Language interpretation and factual scoring therefore have different responsibilities."
        },
        {
          "type": "image",
          "src": "/images/projects/careersphere.webp",
          "caption": "Architecture diagram from the CareerSphere repository: browser, orchestration, tools, and data sources."
        }
      ]
    },
    {
      "id": "decisions",
      "title": "A map needs an explanation",
      "blocks": [
        {
          "type": "text",
          "content": "The repository describes a deliberate progression from onboarding to analysis, the sphere, and recommendations. The sphere gives a sense of related directions; the explanations and evidence make that map useful."
        },
        {
          "type": "text",
          "content": "The same distinction shapes the AI boundary: generated language helps explain the result, while explicit tools supply the underlying role and skill facts."
        }
      ]
    },
    {
      "id": "limits",
      "title": "What remains to assess",
      "blocks": [
        {
          "type": "text",
          "content": "The repository documents unreliable scraping experiments and some broken course-detail links. Live job and course availability can change. This write-up describes the implemented prototype rather than claiming measured career outcomes."
        }
      ]
    }
  ],
  "repository": "https://github.com/rohanz/careersphere",
  "cover": "/images/projects/careersphere.webp",
  "coverAlt": "CareerSphere architecture connecting its browser, agent, tools, and data sources"
};

export default project;
