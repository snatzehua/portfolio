import type { Project } from "../types";

const project: Project = {
  "slug": "state-of-the-strait",
  "title": "State of the Strait",
  "summary": "Exploring whether open satellite imagery can reveal ship traffic through the Strait of Hormuz.",
  "publishedAt": "2026-10-30",
  "period": "2026",
  "role": "Personal research project",
  "status": "Exploratory",
  "tags": [
    "Python",
    "Sentinel",
    "STAC"
  ],
  "outcome": "Documents optical detections, cloud false positives, and the limits of traffic validation.",
  "sections": [
    {
      "id": "question",
      "title": "Can open imagery reveal traffic?",
      "blocks": [
        {
          "type": "text",
          "content": "The project investigates Sentinel-2 optical imagery and Sentinel-1 radar coverage over the Strait of Hormuz. It also explores IMF PortWatch transit data as an external comparison."
        }
      ]
    },
    {
      "id": "implementation",
      "title": "Inspect the data before trusting a detector",
      "blocks": [
        {
          "type": "text",
          "content": "Local scripts query the Planetary Computer STAC catalogue, create image previews, and extract candidate ship detections. The saved figures make it possible to compare detections against the imagery itself."
        },
        {
          "type": "image",
          "src": "/images/projects/strait.webp",
          "caption": "Saved Sentinel-2 preview for 24 October 2026 from the project repository. Contains modified Copernicus Sentinel data, processed through Microsoft Planetary Computer."
        }
      ]
    },
    {
      "id": "findings",
      "title": "Clouds can look like ships",
      "blocks": [
        {
          "type": "text",
          "content": "The repository’s illustrated examples show real ships mixed with small clouds that survive the scene classification mask. A low tile-level cloud percentage does not guarantee a clean local area."
        },
        {
          "type": "text",
          "content": "The next methodological step is stronger false-positive filtering and a suitable radar detector, followed by comparison against independent transit records."
        }
      ]
    },
    {
      "id": "limits",
      "title": "Coverage is not a validated traffic count",
      "blocks": [
        {
          "type": "text",
          "content": "The work remains exploratory. Catalogue coverage, visible candidates, and an operational shipping indicator are different milestones. PortWatch query limits and imagery-specific detection errors still affect validation."
        },
        {
          "type": "text",
          "content": "Contains modified Copernicus Sentinel data, processed through Microsoft Planetary Computer."
        }
      ]
    }
  ],
  "repository": "https://github.com/snatzehua/state-of-the-strait",
  "cover": "/images/projects/strait.webp",
  "coverAlt": "Satellite RGB preview of water and coastline near the Strait of Hormuz"
};

export default project;
