import type { Project } from "../types";

const project: Project = {
  "slug": "careersphere",
  "title": "CareerSphere",
  "summary": "A career exploration app that connects a person’s existing skills to possible roles and practical next steps.",
  "publishedAt": "2026-10-30",
  "period": "2026",
  "role": "Team hackathon project",
  "status": "In progress",
  "tags": [
    "React",
    "FastAPI",
    "DuckDB"
  ],
  "outcome": "Combines a 3D role map with skill-gap explanations, courses, and matching jobs.",
  "sections": [
    {
      "id": "problem",
      "title": "From a profile to a next step",
      "blocks": [
        {
          "type": "text",
          "content": "CareerSphere was built for the PyCon SG Jobs & Skills hackathon. Someone can describe their background and goals, then explore related roles, the skills they are missing, and courses or jobs that could help them move forward."
        }
      ]
    },
    {
      "id": "approach",
      "title": "Let data supply the facts",
      "blocks": [
        {
          "type": "text",
          "content": "The app extracts skills from a profile or résumé and matches them against the SkillsFuture framework. A FastAPI backend queries a DuckDB snapshot for role requirements, calculates fit and gaps, and retrieves courses and job postings. React and Three.js present the results as a navigable sphere of roles."
        },
        {
          "type": "text",
          "content": "Language models handle profile interpretation, tool selection, and explanations. Explicit Python functions calculate scores and return the source evidence. That boundary makes a recommendation easier to inspect: which requirement or skill led to this result?"
        },
        {
          "type": "image",
          "src": "/images/projects/careersphere.webp",
          "caption": "CareerSphere architecture: the browser calls an orchestrator, whose tools retrieve data and calculate scores. Original team diagram."
        }
      ]
    },
    {
      "id": "decisions",
      "title": "Give the map a clear path",
      "blocks": [
        {
          "type": "text",
          "content": "The experience moves from onboarding to analysis, the sphere, and recommendations. The sphere offers a view of related directions; ranked roles, gaps, and evidence explain what those directions mean."
        },
        {
          "type": "text",
          "content": "Exact keyword matching was too brittle for varied profile and skill descriptions. Semantic matching helps connect those descriptions, with deterministic fallbacks and scoring rules around the result."
        }
      ]
    },
    {
      "id": "limits",
      "title": "Data quality still shapes the advice",
      "blocks": [
        {
          "type": "text",
          "content": "Scraping experiments were unreliable, and some course-detail links returned errors. Jobs and courses also change over time. The prototype needs reliable refreshes and checks of recommendation quality before its advice can be treated as dependable."
        }
      ]
    }
  ],
  "repository": "https://github.com/rohanz/careersphere",
  "cover": "/images/projects/banners/careersphere.webp",
  "coverAlt": "CareerSphere’s original wordmark and globe icon on a full dark banner."
};

export default project;
