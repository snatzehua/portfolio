import type { WritingEntry } from "../types";

const entry: WritingEntry = {
  slug: "state-of-affairs",
  title: "State of Affairs",
  publishedAt: "2026-11-24",
  period: "NOV 2026",
  summary: "On learning for its own sake, career pressure, and finding room to build with AI.",
  pinned: true,
  body: "I've been thinking a lot about the state of software engineering recently, and where it's headed.",
  sections: [
    {
      id: "state-of-affairs",
      title: "State of Affairs",
      hideTitle: true,
      blocks: [
        {
          type: "text",
          content: "It's almost been half a year since I came back from my student exchange in Copenhagen, Denmark, and during the 6 months I was gone, I somehow managed to miss [the rapid development and adoption of coding agents](https://blog.jetbrains.com/research/2026/08/ai-coding-agent-adoption-2026/) and the [incredible advancements that 2026 brought](https://openai.com/index/research-acceleration-jagged-frontier/).",
        },
        {
          type: "text",
          content: "And as someone who thoroughly enjoyed and spent a lot of time learning the various processes that AI can now handle, it feels as though my progress has been reset. As a final-year student searching for internships and graduate roles, the pressure mounted. For a few months, I cycled between studying for interviews, academic responsibilities, external clubs and my full-time internship, and as I neared the end of the semester, I started to think:",
        },
        {
          type: "text",
          content: "What had I really achieved in those few months?",
        },
        {
          type: "text",
          content: "I realised then that I’d become so focused on securing an immediate path for myself that I’d lost sight of what truly mattered to me, which was to learn simply for the sake of learning, and to work on meaningful, interesting projects.",
        },
        {
          type: "text",
          content: "I want to spend time developing the projects that I’ve always wanted to do but never felt ready for, and having AI help with implementation would give me more room to build and iterate. As part of that, I’m interested in figuring out a more intentional way to ship code, where I can give [agents enough structure to require less oversight](https://www.youtube.com/watch?v=O_zcc6Xl12g). That would mean getting a deeper understanding of tooling, agent harnesses and evaluation that would support this, especially if I want to improve upon or adapt existing frameworks.",
        },
        {
          type: "text",
          content: "Some may find my ideals foolish, or think I’m being stubborn, but all I know is that for the first time in a long while, I’m excited to work on something again.",
        },
      ],
    },
  ],
  tags: ["Reflections", "AI", "Software engineering"],
};

export default entry;
