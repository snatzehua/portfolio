import type { Project } from "../types";

const project: Project = {
  "slug": "travlah",
  "title": "Travlah — Shared Travel Planning",
  "summary": "A Vue travel-planning app connecting shared itineraries, places, expenses, and payments.",
  "publishedAt": "2026-10-30",
  "period": "2025",
  "role": "Course team project",
  "status": "Application prototype",
  "tags": [
    "Vue",
    "Firebase",
    "Maps"
  ],
  "outcome": "The local app contains itinerary editing, place exploration, and shared expense workflows.",
  "sections": [
    {
      "id": "problem",
      "title": "Keep the trip in one place",
      "blocks": [
        {
          "type": "text",
          "content": "Travlah brings travel discovery and group planning into one application. Its pages cover destinations, attractions, itineraries, profiles, and expenses."
        }
      ]
    },
    {
      "id": "implementation",
      "title": "Trip state and shared expenses",
      "blocks": [
        {
          "type": "text",
          "content": "Vue components handle trip selection, daily events, maps, expense entry, and payments. The local implementation uses Firebase authentication and Firestore documents, including snapshot listeners for changes to selected itineraries."
        }
      ]
    },
    {
      "id": "decisions",
      "title": "Make a selected trip the shared context",
      "blocks": [
        {
          "type": "text",
          "content": "Itinerary and expense views consume the selected trip, so events, expenses, and payments relate to the same plan. The component boundary separates editing dialogs from the displayed trip state."
        }
      ]
    },
    {
      "id": "scope",
      "title": "What this snapshot establishes",
      "blocks": [
        {
          "type": "text",
          "content": "The source demonstrates the application flows and data integration. This summary does not claim production adoption, usage figures, or a continuously available hosted service."
        }
      ]
    }
  ],
  "repository": "https://github.com/snatzehua/bt3103-travlah",
  "cover": "/images/travla.png",
  "coverAlt": "Travlah shared travel-planning interface"
};

export default project;
