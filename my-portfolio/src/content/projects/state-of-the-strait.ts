import type { Project } from "../types";

const project: Project = {
  "slug": "state-of-the-strait",
  "title": "State of the Strait",
  "summary": "Exploring ship traffic in the Strait of Hormuz using open optical and radar satellite imagery.",
  "publishedAt": "2026-10-30",
  "period": "2026",
  "role": "Personal research project",
  "status": "In progress",
  "tags": [
    "Python",
    "Sentinel",
    "STAC"
  ],
  "outcome": "Initial optical detections reveal visible ships alongside cloud false positives that need filtering.",
  "sections": [
    {
      "id": "question",
      "title": "Can open imagery reveal ship traffic?",
      "blocks": [
        {
          "type": "text",
          "content": "The project starts with Sentinel-2 optical imagery and Sentinel-1 radar coverage over the Strait of Hormuz. IMF PortWatch transit records offer a possible independent comparison for traffic estimates."
        }
      ]
    },
    {
      "id": "implementation",
      "title": "Start by looking at the detections",
      "blocks": [
        {
          "type": "text",
          "content": "Python scripts query the Planetary Computer STAC catalogue, create previews, and extract candidate detections. Saving small image cutouts makes it possible to inspect what a detector has actually picked up."
        },
        {
          "type": "image",
          "src": "/images/projects/strait.webp",
          "caption": "Sentinel-2 RGB preview, 24 October 2026. Contains modified Copernicus Sentinel data (2026), accessed through Microsoft Planetary Computer."
        }
      ]
    },
    {
      "id": "findings",
      "title": "Clouds can look like ships",
      "blocks": [
        {
          "type": "text",
          "content": "Small clouds can survive the scene-classification mask and pass a brightness threshold. A low cloud percentage for the whole tile does not guarantee that a particular patch of water is clear."
        },
        {
          "type": "image",
          "src": "/images/projects/strait-detections.webp",
          "caption": "Candidate detections on 29 September 2026. The fourth and fifth cutouts show ships; the other cutouts show clouds. Contains modified Copernicus Sentinel data (2026), accessed through Microsoft Planetary Computer."
        },
        {
          "type": "text",
          "content": "These examples explain why counting every bright candidate would overstate traffic. Shape, wakes, and the colour offset between optical bands offer clues for separating ships from clouds."
        }
      ]
    },
    {
      "id": "limits",
      "title": "From candidates to a traffic indicator",
      "blocks": [
        {
          "type": "text",
          "content": "The next work is to improve false-positive filtering, develop radar detection, and compare counts against independent transit records. Radar avoids cloud obstruction but needs a detector that handles speckle."
        },
        {
          "type": "text",
          "content": "Imagery coverage and visible ship candidates are early milestones. A validated traffic series also needs consistent coverage, detection checks, and a suitable comparison dataset; PortWatch query limits still complicate that comparison."
        }
      ]
    }
  ],
  "repository": "https://github.com/snatzehua/state-of-the-strait",
  "cover": "/images/projects/banners/state-of-the-strait.webp",
  "coverAlt": "Full-width crop of the saved Sentinel-2 Hormuz image from 24 October 2026, including visible cloud cover. Modified Copernicus Sentinel data via Microsoft Planetary Computer."
};

export default project;
