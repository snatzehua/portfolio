import type { Project } from "../types";

const project: Project = {
  "slug": "travlah",
  "title": "Travlah — Shared Travel Planning",
  "summary": "A shared travel planner that brings itineraries, maps, and group expenses into one trip.",
  "publishedAt": "2026-10-30",
  "period": "2025",
  "role": "Course team project",
  "status": "Application prototype",
  "tags": [
    "Vue",
    "Firebase",
    "Maps"
  ],
  "outcome": "Connects trip editing, place exploration, and expense tracking through shared itinerary data.",
  "sections": [
    {
      "id": "problem",
      "title": "Keep the trip together",
      "blocks": [
        {
          "type": "text",
          "content": "Group travel involves places to visit, a daily schedule, and expenses to track. Travlah brings those activities into a Vue application with views for destinations, attractions, itineraries, and expenses."
        }
      ]
    },
    {
      "id": "implementation",
      "title": "Keep the selected trip in sync",
      "blocks": [
        {
          "type": "text",
          "content": "Vue components handle trip selection, daily events, maps, expense entry, and payment records. Firebase manages authentication and Firestore data; snapshot listeners update views when the selected itinerary changes."
        }
      ]
    },
    {
      "id": "decisions",
      "title": "Use one trip as the shared context",
      "blocks": [
        {
          "type": "text",
          "content": "Itinerary and expense views work from the same selected trip. That keeps events, costs, and payments attached to the relevant plan. Editing dialogs are separated from the components displaying trip state."
        }
      ]
    },
    {
      "id": "scope",
      "title": "A connected application prototype",
      "blocks": [
        {
          "type": "text",
          "content": "The project demonstrates the planning and expense workflows with Firebase integration. Further evaluation would need to check collaboration across accounts, conflicting edits, and recovery from interrupted updates."
        }
      ]
    }
  ],
  "repository": "https://github.com/snatzehua/bt3103-travlah",
  "cover": "/images/projects/travlah.webp",
  "coverAlt": "Travlah wordmark from the Vue application"
};

export default project;
