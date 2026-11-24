import type { Project } from "../types";

const project: Project = {
  "slug": "room",
  "title": "Room",
  "summary": "A plugin we built so teammates’ coding agents can see each other’s work before it reaches a merge.",
  "publishedAt": "2026-11-15",
  "period": "2026",
  "role": "Team hackathon project · Network dashboard",
  "status": "Completed",
  "tags": [
    "TypeScript",
    "MCP",
    "Yjs",
    "Node.js"
  ],
  "outcome": "We placed third at the AI Tinkerers × OpenAI hackathon. I built the live Network view and wrote the submission.",
  "sections": [
    {
      "id": "problem",
      "title": "Two files, one assumption",
      "navTitle": "The coordination problem",
      "blocks": [
        {
          "type": "text",
          "content": "In the demo we planned for the AI Tinkerers × OpenAI hackathon, one coding agent was changing how an order represented its customer while another was adding coupons. They worked in separate Git clones and edited different files. Git could merge both patches cleanly, even if the coupon code expected a customer object and the order model still returned a string."
        },
        {
          "type": "text",
          "content": "The awkward part was that the order agent could change its mind halfway through. Both agents would want to know the eventual shape of an order, but the coupon agent could already be writing against yesterday’s answer. We built Room to let that conversation happen while the changes were still on each developer’s machine."
        }
      ]
    },
    {
      "id": "system",
      "title": "Before either agent commits",
      "navTitle": "How Room works",
      "blocks": [
        {
          "type": "text",
          "content": "Each developer joined the same room from their own clone. A local process watched their files and published a view of their uncommitted edits against a known Git revision. Through the plugin, an agent could also declare which interface it intended to change. A plan like “keep customer as a string” could reach a teammate before there was a single changed line to show them."
        },
        {
          "type": "text",
          "content": "Room used a live index of symbol definitions and references to find code that depended on a declaration. If the order agent revised its plan, Room could send the revision to the agent working on a consumer. Either developer could then preview the combined edits and run the relevant tests in a temporary checkout, with their own working files still in place. [Hackathon README](https://github.com/rohanz/room/blob/db41d87d/README.md)"
        },
        {
          "type": "image",
          "src": "/images/projects/room-v2-redesign.png",
          "alt": "Room’s file viewer showing the participants, file changes and activity timeline from a two-agent run.",
          "caption": "The file view from an early two-agent run. My work was on the Network tab, which showed how one participant’s changes related to other files."
        }
      ]
    },
    {
      "id": "my-contribution",
      "title": "Whose dependencies matter",
      "navTitle": "The Network view",
      "blocks": [
        {
          "type": "text",
          "content": "I built the Network view in the browser dashboard. The first version showed a participant’s changed files and the code they depended on. I then brought declared interface changes into the same view. That made it useful to distinguish a file someone had already edited from a change they had announced, since either could happen first."
        },
        {
          "type": "text",
          "content": "Selecting a participant anchored the graph on their edits and claims. Blue marked an actual edit, purple marked a declared interface change, and a file with both used a split fill. I reserved red for potential downstream impact. That let someone looking at checkout trace a pricing change that might affect their work, without lighting up every other pricing consumer in the repository. [Participant-focused graph implementation](https://github.com/rohanz/room/commit/28201c2d)"
        }
      ]
    },
    {
      "id": "graph-implementation",
      "title": "Follow the price quote",
      "navTitle": "Checking the graph",
      "blocks": [
        {
          "type": "text",
          "content": "One of my tests uses a small chain. Pricing defines a function called quote_total, checkout calls it, and receipts use the checkout summary. If the pricing agent declares a change to what quote_total returns, checkout is directly exposed and receipts are one step further away. If the agent declares a rename for a different function in the same pricing file, that same route should stay quiet."
        },
        {
          "type": "text",
          "content": "The tests also cover circular dependencies, declarations on files the index has yet to see, and switching between participants. These checks establish which paths the dashboard highlights. The index infers references, so a highlighted path gives the developer somewhere to inspect. Whether the combined code still works is a question for its tests. [Network model tests](https://github.com/rohanz/room/blob/db41d87d/packages/web/src/network-model.test.ts)"
        },
        {
          "type": "text",
          "content": "I added a synthetic 168-file commerce project to see how the layout held up with more files on screen. Compact nodes kept labels visible, previews carried the extra detail, and zoom let the graph fit the available space. The fixture was a way to exercise the interface. We used the smaller Python shop for the behavioural example. [Commerce fixture](https://github.com/rohanz/room/blob/db41d87d/packages/web/scripts/seed-scale.ts)"
        }
      ]
    },
    {
      "id": "scope",
      "title": "After the hackathon",
      "navTitle": "Outcome and scope",
      "blocks": [
        {
          "type": "text",
          "content": "We placed third at the AI Tinkerers × OpenAI hackathon. Alongside the Network view, I worked on the README and wrote the submission around the order-and-coupon example. My teammate continued developing Room afterwards. The cover diagram shows the later architecture, including the local relay and optional team server. The implementation described here is the hackathon version. [Hackathon submission](https://github.com/rohanz/room/blob/db41d87d/docs/submission.md)"
        }
      ]
    }
  ],
  "cover": "/images/projects/banners/room.webp",
  "coverAlt": "Room architecture showing the host and Git checkout, per-session MCP process, local relay, optional team server and other agent sessions.",
  "repository": "https://github.com/rohanz/room"
};

export default project;
