import type { Project } from "../types";

const project: Project = {
  "slug": "local-calendar-assistant",
  "title": "Local Calendar & Task Assistant",
  "summary": "A terminal assistant that reads calendars and tasks and makes explicitly requested scheduling changes.",
  "publishedAt": "2026-10-30",
  "period": "2026",
  "role": "Personal application project",
  "status": "Local implementation",
  "tags": [
    "Python",
    "Tool calling",
    "Google APIs"
  ],
  "outcome": "The local code separates tool execution, model providers, OAuth, and conversation storage.",
  "sections": [
    {
      "id": "problem",
      "title": "Plan without replacing existing tools",
      "blocks": [
        {
          "type": "text",
          "content": "The assistant works with Google Calendar and Google Tasks while leaving those applications usable directly. Its interface is a local terminal REPL."
        }
      ]
    },
    {
      "id": "architecture",
      "title": "A small tool-calling loop",
      "blocks": [
        {
          "type": "text",
          "content": "The local source separates the REPL, a provider-independent agent loop, model clients, OAuth, API tools, and SQLite history. Calendar and task operations are ordinary Python functions registered as tools."
        }
      ]
    },
    {
      "id": "decisions",
      "title": "Read broadly and write deliberately",
      "blocks": [
        {
          "type": "text",
          "content": "The documented behavior distinguishes committed calendar events from a separate planning calendar. Reads can combine sources, while writes default to the planning calendar or dedicated task list. Informational questions are not supposed to create changes as a side effect."
        }
      ]
    },
    {
      "id": "scope",
      "title": "Local-first implementation",
      "blocks": [
        {
          "type": "text",
          "content": "The application depends on locally configured OAuth and provider credentials. The implementation was inspected locally; this write-up does not expose credentials or claim a hosted service."
        }
      ]
    }
  ],
  "coverSteps": [
    "Ask",
    "API tools",
    "Review plan"
  ]
};

export default project;
