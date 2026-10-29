import type { Project } from "../types";

const project: Project = {
  slug: "openclaw-network-mapping",
  title: "OpenClaw for Network Mapping",
  summary: "Exploring an Obsidian-based way to remember people, conversations, and the connections between them.",
  publishedAt: "2026-10-29",
  period: "Jan 2025 — present",
  role: "Personal project",
  status: "In progress",
  tags: ["Knowledge management", "Obsidian", "Automation"],
  outcome: "An idea under implementation and testing; its usefulness is still being evaluated.",
  sections: [
    { id: "problem", title: "The problem", blocks: [
      { type: "text", content: "I often meet new people, both while travelling and while learning from people in the industry. I wanted a way to keep track of those connections and the context around them, rather than relying on memory alone." },
    ] },
    { id: "approach", title: "Why a connected notebook?", blocks: [
      { type: "text", content: "I started thinking about using Obsidian to map my network. While exploring OpenClaw, I came across an Obsidian plugin that made the idea feel worth investigating. The project brings together my interest in connected notes and the possibility of automating some of their upkeep." },
    ] },
    { id: "tradeoffs", title: "The tradeoff I am exploring", blocks: [
      { type: "text", content: "Automation is only useful here if I can trust what it changes. My concern is that OpenClaw could do more harm than good without suitable guardrails. Deciding what should be automated, and what should remain under my control, is part of the investigation." },
    ] },
    { id: "progress", title: "Current progress", blocks: [
      { type: "text", content: "The project is under implementation and testing. I do not yet have a measured outcome to report. The main question is whether the workflow can make my network easier to understand and maintain without introducing unreliable changes." },
    ] },
    { id: "next-steps", title: "Next steps", blocks: [
      { type: "text", content: "Define a small workflow to test, make the proposed changes reviewable, and evaluate whether the resulting notes are actually useful. A future update can show the workflow, the guardrails, and what happened during testing." },
    ] },
  ],
};

export default project;
