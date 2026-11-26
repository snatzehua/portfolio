import type { Project } from "../types";

const project: Project = {
  "slug": "travla",
  "title": "Travla — Travel Itinerary App",
  "summary": "An iOS trip planner my teammate and I built for Orbital, with offline itineraries and maps for each day’s route.",
  "publishedAt": "2026-11-15",
  "period": "2024",
  "role": "NUS Orbital · Team of two",
  "status": "Completed",
  "tags": [
    "React Native",
    "Expo",
    "TypeScript",
    "Supabase",
    "AsyncStorage"
  ],
  "outcome": "We reached Apollo level in NUS Orbital 2024.",
  "sections": [
    {
      "id": "problem",
      "title": "The day’s plan, in one place",
      "blocks": [
        {
          "type": "text",
          "content": "My teammate and I built Travla for NUS Orbital. It organises a trip into days and timed events, puts the current plan on the home screen and lets you see the day’s route on a map, so the itinerary and the places it refers to stay together."
        }
      ],
      "navTitle": "Trip planning"
    },
    {
      "id": "offline",
      "title": "Keeping the trip available offline",
      "blocks": [
        {
          "type": "text",
          "content": "Trip data is kept in AsyncStorage on the phone and in Supabase online. Each copy has a last-updated time, and syncing picks the newer one, with handling for when one side has no copy yet. That lets the trip stay available without a connection."
        },
        {
          "type": "text",
          "content": "The simplicity comes with a tradeoff: picking the newer complete copy does not merge changes made in both places. Handling simultaneous edits properly would need a more detailed conflict-resolution approach."
        }
      ],
      "navTitle": "Offline sync"
    },
    {
      "id": "data-model",
      "title": "Representing a trip on the phone",
      "blocks": [
        {
          "type": "diagram",
          "title": "Trip structure and storage",
          "steps": [
            {
              "label": "Trip",
              "detail": "The shared context for the journey."
            },
            {
              "label": "Days and events",
              "detail": "Timed events supply the home view and daily map."
            },
            {
              "label": "Local copy",
              "detail": "AsyncStorage keeps the trip JSON available offline."
            },
            {
              "label": "Online sync",
              "detail": "Compare last-updated times with the Supabase copy."
            }
          ],
          "caption": "The newer whole copy wins. This is a sync decision, not a merge of simultaneous edits."
        },
        {
          "type": "text",
          "content": "The app uses React Native, Expo and TypeScript, with Firebase Auth for accounts."
        },
        {
          "type": "text",
          "content": "[missing contribution] Identify which parts of the mobile app you built and which were your teammate’s, especially the storage, synchronisation and maps work, so the technical account can distinguish your contribution from the team deliverable."
        }
      ],
      "navTitle": "App structure"
    },
    {
      "id": "maps",
      "title": "From the plan to the route",
      "blocks": [
        {
          "type": "text",
          "content": "Google Places and Geocoding supply the locations for events, and the map screen draws the route for the selected day. We kept calls to those APIs low to limit cost, and cached exchange rates for the travel utilities as well."
        }
      ],
      "navTitle": "Maps and APIs"
    },
    {
      "id": "outcome",
      "title": "The Orbital app",
      "blocks": [
        {
          "type": "text",
          "content": "We reached Apollo level in NUS Orbital 2024. The poster below shows the app screens and workflow. This is the React Native mobile app; the later Vue and Firebase project, Travlah, has its own page."
        },
        {
          "type": "image",
          "src": "/images/travla.png",
          "caption": "Original Travla Orbital project poster, including the app screens, workflow and technology stack."
        }
      ],
      "navTitle": "Orbital outcome"
    }
  ],
  "cover": "/images/projects/banners/travla.webp",
  "coverAlt": "Original Travla mobile-app screens cropped from the team’s Orbital poster; separate from the Vue Travlah web app.",
  "repository": "https://github.com/snatzehua/Orbital-2024-6177-Travla"
};

export default project;
