import type { Project } from "../types";

const project: Project = {
  "slug": "local-calendar-assistant",
  "title": "Local Calendar & Task Assistant",
  "summary": "A terminal assistant for planning with Google Calendar and Google Tasks.",
  "publishedAt": "2026-10-30",
  "period": "2026",
  "role": "Personal application project",
  "status": "Local prototype",
  "tags": [
    "Python",
    "Tool calling",
    "Google APIs"
  ],
  "outcome": "Keeps tentative plans in a separate calendar and exposes tools for explicitly requested edits.",
  "sections": [
    {
      "id": "problem",
      "title": "Work with an existing calendar",
      "blocks": [
        {
          "type": "text",
          "content": "The assistant reads calendar events and tasks, helps plan what to work on, and supports requested scheduling changes. Google’s own apps remain available for viewing and editing the same information."
        }
      ]
    },
    {
      "id": "architecture",
      "title": "A small tool-calling loop",
      "blocks": [
        {
          "type": "text",
          "content": "A Python terminal interface sends messages and tool definitions to a model, executes requested tool calls, and returns their results. The agent loop uses a provider interface, with separate modules for model clients, Google OAuth, API tools, and SQLite conversation history."
        }
      ]
    },
    {
      "id": "decisions",
      "title": "Separate commitments from tentative plans",
      "blocks": [
        {
          "type": "text",
          "content": "Reads combine committed events and tentative planning blocks. Writes default to a separate planning calendar or dedicated task list, keeping proposed work distinguishable from existing commitments."
        },
        {
          "type": "text",
          "content": "The behaviour contract requires an explicit request before calendar or task edits. An informational question such as “what should I work on?” should return advice without changing the schedule."
        }
      ]
    },
    {
      "id": "scope",
      "title": "Check the boundaries",
      "blocks": [
        {
          "type": "text",
          "content": "The app runs locally and needs OAuth plus model-provider configuration. Mocked API and provider tests check the agent and wrapper logic; a real scheduling workflow still needs end-to-end verification after setup."
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
