import type { Project } from "../types";

const project: Project = {
  "slug": "hack4good-marketplace",
  "title": "Hack4Good — Voucher Marketplace",
  "summary": "A team hackathon prototype connecting a voucher marketplace with the inventory and approvals behind it.",
  "publishedAt": "2026-10-30",
  "period": "2025",
  "role": "Team hackathon project",
  "status": "In progress",
  "tags": [
    "Next.js",
    "FastAPI",
    "Firebase"
  ],
  "outcome": "The prototype has participant and administrator flows for the minimart, vouchers and auctions.",
  "sections": [
    {
      "id": "problem",
      "title": "Both sides of the marketplace",
      "blocks": [
        {
          "type": "text",
          "content": "Our Hack4Good prototype has participant pages for the minimart, auctions, pending items and transaction history. Each of those interactions also has work behind it, from an inventory change to a voucher request that needs an administrative decision."
        }
      ],
      "navTitle": "Marketplace workflow"
    },
    {
      "id": "implementation",
      "title": "The participant and administrator views",
      "blocks": [
        {
          "type": "text",
          "content": "The Next.js app separates the participant routes from the administrator routes, where inventory, auctions, voucher requests and users are managed. The FastAPI backend has the corresponding routers and services to support those interactions."
        }
      ],
      "navTitle": "Architecture"
    },
    {
      "id": "decisions",
      "title": "Following an approval through",
      "blocks": [
        {
          "type": "text",
          "content": "Voucher approval and auction management have their own administrative workflows, separate from the participant’s shopping experience. That gives each request a place to be handled and makes it easier to follow who is responsible for the next action."
        }
      ],
      "navTitle": "Admin approvals"
    },
    {
      "id": "bid-flow",
      "title": "What happens when a bid is placed",
      "blocks": [
        {
          "type": "diagram",
          "title": "The current bid path",
          "steps": [
            {
              "label": "Read auction",
              "detail": "Fetch the current amount and end time."
            },
            {
              "label": "Validate bid",
              "detail": "Require an active auction and a higher amount."
            },
            {
              "label": "Insert bid",
              "detail": "Save the bidder’s new offer."
            },
            {
              "label": "Update auction",
              "detail": "Write its new highest amount separately."
            }
          ],
          "caption": "The last two operations are separate writes in the inspected prototype, not an atomic transaction."
        },
        {
          "type": "text",
          "content": "A concurrent-bid test needs to check whether another request can change the highest bid between the read and update, and what happens if only one write succeeds. The route and validation flow exist, while atomic bidding remains an implementation issue to resolve."
        },
        {
          "type": "text",
          "content": "[missing contribution] Describe which participant or administrator flows you implemented and any constraints from the intended users. The repository describes the prototype, but does not establish your individual role or the reason particular workflows were prioritised."
        }
      ],
      "navTitle": "Bidding flow"
    },
    {
      "id": "scope",
      "title": "Checking the whole journey",
      "blocks": [
        {
          "type": "text",
          "content": "The implemented flows give us a starting point for testing a participant request through to the administrative action. Before deployment, the complete journey would still need checks around permissions, inventory consistency and what happens when actions arrive at the same time."
        }
      ],
      "navTitle": "Prototype limits"
    }
  ],
  "cover": "/images/projects/banners/hack4good-marketplace.webp",
  "coverAlt": "Original marketplace cart icon beside a coupon illustration on a full-width Hack4Good banner."
};

export default project;
