import type { Project } from "../types";

const project: Project = {
  slug: "openclaw-network-mapping",
  title: "OpenClaw for Network Mapping",
  summary: "Exploring an Obsidian-based way to remember people, conversations, and the connections between them.",
  publishedAt: "2026-10-29",
  period: "Jan 2025 — present",
  role: "Personal project",
  status: "Archived",
  tags: ["Knowledge management", "Obsidian", "Automation"],
  cover: "/images/projects/banners/openclaw-network-mapping.webp",
  coverAlt: "Conceptual connected-note graph for the OpenClaw exploration; illustrative nodes, not real contacts or implemented usage.",
  outcome: "Early implementation and testing, with review of automated changes as the main design question.",
  sections: [
    { id: "problem", title: "The problem", blocks: [
      { type: "text", content: "I meet people while travelling and learning from others in the industry. I wanted to remember more than a name: where we met, what we discussed, and how that conversation connects to other people or ideas." },
    ] },
    { id: "approach", title: "Why a connected notebook?", blocks: [
      { type: "text", content: "Obsidian offers a way to connect those notes without forcing every relationship into a fixed contact form. Exploring OpenClaw and an Obsidian plugin prompted me to investigate whether some of the upkeep could be automated." },
    ] },
    { id: "tradeoffs", title: "The tradeoff I am exploring", blocks: [
      { type: "text", content: "The central concern is control over changes. A proposed connection should be understandable and reviewable before it changes the notes. Incorrect links or rewritten context could make the notebook less useful." },
    ] },
    { id: "progress", title: "Current progress", blocks: [
      { type: "text", content: "Implementation and testing are ongoing. The working question is whether the workflow makes connections easier to remember and maintain while keeping the original context intact." },
    ] },
    { id: "next-steps", title: "Next steps", blocks: [
      { type: "text", content: "Start with a small workflow, inspect each proposed change, and check whether the resulting connections are useful. That test can guide which tasks are worth automating." },
    ] },
  ],
};

export default project;
