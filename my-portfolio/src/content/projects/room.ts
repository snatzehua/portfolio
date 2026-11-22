import type { Project } from "../types";

const project: Project = {
  "slug": "room",
  "title": "Room — Multi-Agent Coding Coordination",
  "summary": "A plugin we built so teammates’ coding agents can see each other’s work before it reaches a merge.",
  "publishedAt": "2026-11-15",
  "period": "2026",
  "role": "Team hackathon project · Network dashboard",
  "status": "Completed",
  "tags": [
    "TypeScript",
    "MCP",
    "Yjs",
    "Node.js"
  ],
  "outcome": "We placed third at the AI Tinkerers × OpenAI hackathon. I built the live Network view and wrote the submission.",
  "sections": [
    {
      "id": "problem",
      "title": "When the changes depend on each other",
      "blocks": [
        {
          "type": "text",
          "content": "Two agents can be working in different files and still break each other’s work. One changes a function signature while the other builds against the old version, and there may be no conflicting line for Git to point out. That is the kind of coordination problem Room deals with."
        }
      ],
      "navTitle": "Coordination problem"
    },
    {
      "id": "system",
      "title": "What we built",
      "blocks": [
        {
          "type": "text",
          "content": "We built Room to connect coding agents working in separate clones of the same repository, so they can see uncommitted edits and declare contract changes while the work is still happening. A dependency view shows which other work may be affected, and the dashboard gives the people working with those agents a way to follow it too."
        }
      ],
      "navTitle": "Team system"
    },
    {
      "id": "my-contribution",
      "title": "My part: the Network view",
      "blocks": [
        {
          "type": "text",
          "content": "I worked on the Network tab of the dashboard, which puts a selected participant’s changes and their dependencies into a live graph. File edits and declared contract changes have different colours, and downstream contract impact has its own marking, because a file being edited does not by itself tell you that the interface someone else depends on has changed."
        },
        {
          "type": "text",
          "content": "I also wrote the README and hackathon submission."
        }
      ],
      "navTitle": "My contribution"
    },
    {
      "id": "graph-implementation",
      "title": "Turning dependency data into the Network view",
      "blocks": [
        {
          "type": "diagram",
          "title": "From live work to the Network view",
          "steps": [
            {
              "label": "Participants’ work",
              "detail": "Share edits and declare intended contract changes."
            },
            {
              "label": "Dependency index",
              "detail": "Find the code related to those changes."
            },
            {
              "label": "Selected participant",
              "detail": "Build the view around that participant’s work."
            },
            {
              "label": "Network graph",
              "detail": "Distinguish file edits, contracts and downstream impact."
            }
          ],
          "caption": "My contribution was the dashboard graph model and presentation. The indexer and broader plugin machinery were part of the team system."
        },
        {
          "type": "text",
          "content": "I added a larger commerce sample to check the layout under denser work, using compact nodes, previews and responsive zoom to keep it readable. That checked the presentation rather than establishing that the tool prevents integration failures at that scale."
        }
      ],
      "navTitle": "Network graph"
    },
    {
      "id": "scope",
      "title": "The hackathon and afterwards",
      "blocks": [
        {
          "type": "text",
          "content": "We placed third at the hackathon. My teammate kept developing Room afterwards, so the repository now contains quite a lot beyond the version I worked on; my contribution here is the hackathon Network view and write-up."
        }
      ],
      "navTitle": "Hackathon scope"
    }
  ],
  "cover": "/images/projects/banners/room.webp",
  "coverAlt": "Illustrative Room dependency view separating edits, declared contracts and downstream impact; not a product screenshot.",
  "repository": "https://github.com/rohanz/room"
};

export default project;
