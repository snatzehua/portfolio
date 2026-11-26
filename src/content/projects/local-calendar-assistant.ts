import type { Project } from "../types";

const project: Project = {
  "slug": "local-calendar-assistant",
  "title": "Local Calendar & Task Assistant",
  "summary": "A terminal assistant for working with my Google Calendar and Tasks through plain-English requests.",
  "publishedAt": "2026-10-30",
  "period": "2026",
  "role": "Personal application project",
  "status": "In progress",
  "tags": [
    "Python",
    "Tool calling",
    "Google APIs"
  ],
  "outcome": "It reads commitments and tentative plans together, while proposed blocks go into a separate planning calendar.",
  "sections": [
    {
      "id": "motivation",
      "title": "What I wanted from the calendar",
      "blocks": [
        {
          "type": "text",
          "content": "I wanted to outsource time blocking and have one definitive calendar I could follow, with all my deadlines accounted for and the plan built around my preferences and habits. That is the goal behind this project; the terminal assistant is one part of working towards it."
        }
      ],
      "navTitle": "Motivation"
    },
    {
      "id": "problem",
      "title": "Working with the calendar I already have",
      "blocks": [
        {
          "type": "text",
          "content": "This is a local terminal assistant that reads Google Calendar and Google Tasks, helps work out what to work on and can make scheduling changes when asked. The same events and tasks are still available in Google’s own apps, so using the assistant does not mean giving up the usual way of editing them."
        }
      ],
      "navTitle": "Calendar integration"
    },
    {
      "id": "architecture",
      "title": "The loop behind the assistant",
      "blocks": [
        {
          "type": "text",
          "content": "The Python interface sends the conversation and tool definitions to the model, runs the tools it requests and returns the results for the next response. A small provider interface keeps that loop separate from the model client, with Google OAuth, API tools and SQLite conversation history in their own modules."
        },
        {
          "type": "text",
          "content": "[missing decision rationale] Explain why the terminal interface and tool-calling approach were chosen for this version, including any alternatives considered, so the step from the calendar goal to this design is clear."
        }
      ],
      "navTitle": "Agent architecture"
    },
    {
      "id": "tool-execution",
      "title": "Passing a tool call through to Google",
      "blocks": [
        {
          "type": "diagram",
          "title": "The tool-calling loop",
          "steps": [
            {
              "label": "User message",
              "detail": "Send conversation and tool schemas through the provider interface."
            },
            {
              "label": "Model tool request",
              "detail": "Dispatch the requested Calendar or Tasks operation."
            },
            {
              "label": "Google API result",
              "detail": "Return the wrapper’s result to the conversation."
            },
            {
              "label": "Continue or answer",
              "detail": "Repeat for another tool call, or return final text."
            }
          ],
          "caption": "OAuth and SQLite conversation history sit outside the loop. Mutating actions require an explicit request."
        },
        {
          "type": "text",
          "content": "Reads combine the primary and planning calendars and tag their sources, while task reads span existing lists. Writes default to dedicated planning destinations, created only on the first write. Reading the schedule therefore does not create a calendar or task list as a side effect."
        }
      ],
      "navTitle": "Tool execution"
    },
    {
      "id": "decisions",
      "title": "Keeping tentative plans separate",
      "blocks": [
        {
          "type": "text",
          "content": "When it reads the schedule, the assistant combines existing commitments with tentative planning blocks. When it writes, it defaults to a separate planning calendar or task list, so proposed work stays distinguishable from the commitments already there."
        },
        {
          "type": "text",
          "content": "Edits require an explicit request. Asking for advice about what to work on should give me an answer while leaving the calendar and tasks as they are."
        }
      ],
      "navTitle": "Planning boundaries"
    },
    {
      "id": "scope",
      "title": "Running it locally",
      "blocks": [
        {
          "type": "text",
          "content": "The app needs OAuth and model-provider configuration to run. Mocked API and provider tests cover the agent and wrapper logic, while an actual scheduling workflow still needs end-to-end checking with that setup in place."
        }
      ],
      "navTitle": "Local setup"
    }
  ],
  "cover": "/images/projects/banners/local-calendar-assistant.webp",
  "coverAlt": "Illustrative calendar blocks for the local planning assistant; no real dates, tasks, events, or personal data."
};

export default project;
