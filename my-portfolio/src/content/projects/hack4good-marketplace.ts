import type { Project } from "../types";

const project: Project = {
  "slug": "hack4good-marketplace",
  "title": "Hack4Good — Voucher Marketplace",
  "summary": "A voucher marketplace connecting participant purchases with inventory and approval workflows.",
  "publishedAt": "2026-10-30",
  "period": "2025",
  "role": "Team hackathon project",
  "status": "Developing",
  "tags": [
    "Next.js",
    "FastAPI",
    "Firebase"
  ],
  "outcome": "Provides separate participant and administrator flows for the minimart, vouchers, and auctions.",
  "sections": [
    {
      "id": "problem",
      "title": "Connect shopping with the work behind it",
      "blocks": [
        {
          "type": "text",
          "content": "This Hack4Good team prototype has participant pages for a minimart, auctions, pending items, and transaction history. Behind those interactions are inventory changes, voucher requests, and administrative decisions."
        }
      ]
    },
    {
      "id": "implementation",
      "title": "Build both sides of the workflow",
      "blocks": [
        {
          "type": "text",
          "content": "The Next.js app separates participant and administrator routes. Administrative screens manage inventory, auctions, voucher requests, and users. A FastAPI backend provides the corresponding routers and services."
        }
      ]
    },
    {
      "id": "decisions",
      "title": "Give approvals a visible place",
      "blocks": [
        {
          "type": "text",
          "content": "Voucher approval and auction management have their own administrative workflows. Keeping them separate from participant shopping makes the different responsibilities easier to follow."
        }
      ]
    },
    {
      "id": "scope",
      "title": "Prototype scope",
      "blocks": [
        {
          "type": "text",
          "content": "The implemented flows provide a basis for testing the complete journey from a participant request to an administrative action. End-to-end checks of permissions, inventory consistency, and simultaneous actions would be needed before deployment."
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
