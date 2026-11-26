import type { Project } from "../types";

const project: Project = {
  "slug": "travlah",
  "title": "Travlah — Shared Travel Planning",
  "summary": "A shared travel planner our team built around itineraries, maps and the expenses attached to a trip.",
  "publishedAt": "2026-10-30",
  "period": "2025",
  "role": "Course team project",
  "status": "In progress",
  "tags": [
    "Vue",
    "Firebase",
    "Maps"
  ],
  "outcome": "Trip editing, place exploration and expense tracking work from the same shared itinerary data.",
  "sections": [
    {
      "id": "problem",
      "title": "The trip and everything attached to it",
      "blocks": [
        {
          "type": "text",
          "content": "Travlah brings destinations, attractions, the daily itinerary and group expenses into a Vue app. Those parts all refer to the same trip, so the planning and the costs can be kept together as the itinerary changes."
        }
      ],
      "navTitle": "Trip planning"
    },
    {
      "id": "implementation",
      "title": "Keeping the selected trip up to date",
      "blocks": [
        {
          "type": "text",
          "content": "Vue components handle the trip selection, daily events, maps and expense or payment records. Firebase manages authentication and Firestore data, with snapshot listeners updating the views when the selected itinerary changes."
        }
      ],
      "navTitle": "Implementation"
    },
    {
      "id": "decisions",
      "title": "Using the trip as the shared context",
      "blocks": [
        {
          "type": "text",
          "content": "The itinerary and expense views work from the same selected trip, which keeps an event or payment attached to the plan it belongs to. Editing dialogs are separate from the components displaying that state, so changing something and showing the current trip do not all sit in one component."
        }
      ],
      "navTitle": "Shared trip state"
    },
    {
      "id": "event-flow",
      "title": "Following an itinerary edit through the UI",
      "blocks": [
        {
          "type": "diagram",
          "title": "Following an itinerary edit",
          "steps": [
            {
              "label": "Selected trip",
              "detail": "Supply the current day and its event list."
            },
            {
              "label": "Edit or reorder",
              "detail": "The event component emits an action to its parent."
            },
            {
              "label": "Update itinerary",
              "detail": "Apply the changed event fields or ordering."
            },
            {
              "label": "Refresh views",
              "detail": "Firestore snapshots supply current saved trip data."
            }
          ],
          "caption": "Expense and payment views use the same trip context. Live snapshots do not by themselves resolve competing edits."
        },
        {
          "type": "text",
          "content": "Dragging can move events between day lists, while a separate dialog handles event fields. Keeping edits in the surrounding itinerary state avoids each event component managing its own version of the trip. Competing changes across accounts remain a case to check."
        },
        {
          "type": "text",
          "content": "[missing contribution] Add your part in the Vue application and the implementation choices you owned, so this team project can explain your work beyond the system’s overall behaviour."
        }
      ],
      "navTitle": "Editing flow"
    },
    {
      "id": "scope",
      "title": "The prototype so far",
      "blocks": [
        {
          "type": "text",
          "content": "The prototype connects the planning and expense workflows through Firebase. Collaboration across accounts, conflicting edits and recovery from interrupted updates are the cases that need further checking around those workflows."
        }
      ],
      "navTitle": "Prototype limits"
    }
  ],
  "repository": "https://github.com/snatzehua/bt3103-travlah",
  "cover": "/images/projects/banners/travlah.webp",
  "coverAlt": "Travlah’s original wordmark across a pale full-width banner with an illustrative travel-route motif."
};

export default project;
