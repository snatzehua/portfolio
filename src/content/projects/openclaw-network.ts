import type { Project } from "../types";

const project: Project = {
  "slug": "openclaw-network-mapping",
  "title": "OpenClaw for Network Mapping",
  "summary": "An Obsidian-based exploration of remembering people, conversations and the connections between them.",
  "publishedAt": "2026-10-29",
  "period": "2025–2026",
  "role": "Personal project",
  "status": "Archived",
  "tags": [
    "Knowledge management",
    "Obsidian",
    "Automation"
  ],
  "cover": "/images/projects/banners/openclaw-network-mapping.webp",
  "coverAlt": "Conceptual connected-note graph for the OpenClaw exploration; illustrative nodes, not real contacts or implemented usage.",
  "outcome": "The work reached early implementation and testing, with review of automated note changes as the main design concern.",
  "sections": [
    {
      "id": "problem",
      "title": "Remembering the context around a person",
      "blocks": [
        {
          "type": "text",
          "content": "I meet people while travelling and learning from others in the industry, and I wanted to keep more of the context around those conversations: where we met, what we discussed and how it connects to other people or ideas."
        }
      ],
      "navTitle": "Motivation"
    },
    {
      "id": "approach",
      "title": "Why I looked at Obsidian",
      "blocks": [
        {
          "type": "text",
          "content": "Obsidian gives those notes room to connect without putting every relationship into a fixed contact form. Exploring OpenClaw and an Obsidian plugin led me to look at whether some of the upkeep could be automated while keeping that flexibility."
        }
      ],
      "navTitle": "Obsidian approach"
    },
    {
      "id": "tradeoffs",
      "title": "Keeping control of the changes",
      "blocks": [
        {
          "type": "text",
          "content": "The concern is what an automated change does to the original context. A suggested connection needs to be understandable and reviewable before it changes the notes, because an incorrect link or rewritten detail could make the notebook less useful."
        }
      ],
      "navTitle": "Review controls"
    },
    {
      "id": "progress",
      "title": "Where I left it",
      "blocks": [
        {
          "type": "text",
          "content": "The work reached early implementation and testing. The project is now archived; the idea being explored was whether the workflow could make connections easier to maintain while keeping the original conversation context intact."
        },
        {
          "type": "text",
          "content": "[missing implementation context] Add the implemented OpenClaw or Obsidian workflow, how notes and proposed links were represented, and which steps were actually tested. That is needed before this exploration can have a technical account comparable with the other project pages."
        }
      ],
      "navTitle": "Project status"
    },
    {
      "id": "next-steps",
      "title": "A small workflow to test",
      "blocks": [
        {
          "type": "text",
          "content": "A small workflow, with each proposed change inspected, would give a way to check whether the resulting connections are useful before deciding which other parts of the upkeep are worth automating."
        }
      ],
      "navTitle": "Possible next step"
    }
  ]
};

export default project;
