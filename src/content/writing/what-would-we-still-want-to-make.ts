import type { WritingEntry } from "../types";

const entry: WritingEntry = {
  slug: "amodeis-experience-machine",
  title: "Amodei's Experience Machine",
  publishedAt: "2026-11-25",
  period: "NOV 2026",
  summary: "On immersive games, Nozick’s experience machine, and the desire to contribute in a world with less paid work.",
  tags: ["Opinion", "AI", "Philosophy"],
  body: "[The Wall Street Journal recently reported](https://www.wsj.com/tech/ai/anthropic-dario-daniela-amodei-siblings-ipo-be84ad11?mod=mhp) that, during his time at OpenAI, Dario Amodei had discussed whether “immersive video games might be a solution for the political strife caused by AI-induced joblessness”. With the recent release of GTA VI, a game immersive enough that you can spend your time in it doomscrolling or birdwatching, the timing of the piece is impeccable.",
  sections: [
    {
      id: "the-experience-machine",
      title: "The experience machine",
      hideTitle: true,
      blocks: [
        {
          type: "text",
          content: "Having taken a philosophy module this semester, my first thought was that this sounded a lot like [Nozick’s experience machine](https://godandgoodlife.nd.edu/resource/the-experience-machine/). For those unfamiliar with it, it’s a thought experiment in which you can plug into a machine and experience whatever life you’d like. You choose the experiences beforehand, and once you’re plugged in, they feel entirely real. Would you do it? One caveat about calling this “Amodei’s idea” is that, from the wording of the anecdote, it’s hard to tell whether he was seriously suggesting it or simply discussing the possibility.",
        },
        {
          type: "text",
          content: "Regardless, it’s an interesting concept to think about. One response is that people who lose their jobs to AI won’t even be able to afford the game in the first place. Funnily enough, Amodei has written separately about how people might cover their living costs. In [Policy on the AI Exponential](https://darioamodei.com/post/policy-on-the-ai-exponential), he discusses universal basic income as one possible response if AI permanently reduces demand for human labour. He suggests that taxes on the companies involved, or higher capital gains taxes, could help pay for it.",
        },
        {
          type: "text",
          content: "What I’m less sure about is why we’d expect that to settle the political unrest in the first place. Even if a universal basic income could make up for lost earnings, it leaves open the question of what else people value about work. One source of fulfilment is being able to put your judgement and abilities towards an outcome that matters to someone else. Or maybe you just really like what you do. If AI substantially reduces the demand for human labour, people could find themselves with considerably more freedom over their time and considerably less certainty about where to place their efforts.",
        },
        {
          type: "text",
          content: "There’s little reason to assume that the desire to contribute or work towards something would disappear along with the economic need to work. Part of the appeal of social media, for instance, is that people can make something of their own and put it before an audience. That impulse already finds expression outside paid employment. The question for a society with much less work would be how to give people more opportunities to create, express themselves and shape their sense of who they are.",
        },
        {
          type: "text",
          content: "This is where Nozick’s experience machine seems relevant to me. If part of the fulfilment of contributing comes from what our efforts accomplish, then even a perfectly convincing experience of accomplishment leaves something unresolved. In a world where AI could provide both the means to live comfortably and enough entertainment to fill a lifetime, how much would it still matter to us that something came into existence because we chose to make it?",
        },
      ],
    },
  ],
};

export default entry;
