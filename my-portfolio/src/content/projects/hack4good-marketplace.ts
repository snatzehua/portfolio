import type { Project } from "../types";

const project: Project = {
  "slug": "hack4good-marketplace",
  "title": "Hack4Good — Voucher Marketplace",
  "summary": "A hackathon prototype with a minimart, auctions, vouchers, inventory, and administrative workflows.",
  "publishedAt": "2026-10-30",
  "period": "2025",
  "role": "Team hackathon project",
  "status": "Prototype",
  "tags": [
    "Next.js",
    "FastAPI",
    "Firebase"
  ],
  "outcome": "Separates participant purchase flows from inventory, voucher, auction, and user administration.",
  "sections": [
    {
      "id": "problem",
      "title": "Connect participant and administrator workflows",
      "blocks": [
        {
          "type": "text",
          "content": "The Hack4Good repository contains a marketplace-style prototype with participant pages for a minimart, auctions, pending items, and transaction history."
        }
      ]
    },
    {
      "id": "implementation",
      "title": "Two sides of the same workflow",
      "blocks": [
        {
          "type": "text",
          "content": "The Next.js application has separate user and administrator routes. Administrative screens manage inventory, auctions, voucher requests, and users; the Python backend supplies corresponding routers and services."
        }
      ]
    },
    {
      "id": "decisions",
      "title": "Keep operations distinct from shopping",
      "blocks": [
        {
          "type": "text",
          "content": "Separating participant actions from administrative screens makes the different responsibilities visible in the application structure. Voucher approval and auction management are represented as explicit workflows rather than hidden changes to a shopping view."
        }
      ]
    },
    {
      "id": "scope",
      "title": "A source-backed prototype",
      "blocks": [
        {
          "type": "text",
          "content": "The repository supports the flows described here. Individual team contributions, deployment status, and real-world adoption are not established by the short project README, so this entry makes no claims about them."
        }
      ]
    }
  ],
  "repository": "https://github.com/hrishikeshsathyian/Hack4Good2025",
  "coverSteps": [
    "Inventory",
    "Vouchers",
    "Auctions"
  ]
};

export default project;
