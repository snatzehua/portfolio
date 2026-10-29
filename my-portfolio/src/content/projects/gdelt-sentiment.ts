import type { Project } from "../types";

const project: Project = {
  slug: "gdelt-sentiment",
  title: "GDELT Sentiment for Timing Trades",
  summary: "Exploring whether the gap between news sentiment and market prices can reveal a useful trading signal.",
  publishedAt: "2026-10-29",
  period: "Jul 2025 — present",
  role: "Personal research project",
  status: "Exploratory",
  tags: ["Time series", "Sentiment analysis", "Backtesting"],
  cover: "/images/experience-entries.introduction-to-finance.png",
  coverAlt: "Exploratory strategy backtest compared with a buy-and-hold portfolio",
  coverSteps: ["News", "Sentiment", "Signal"],
  outcome: "Early backtests encouraging; validation ongoing.",
  sections: [
    { id: "problem", title: "The question", blocks: [
      { type: "text", content: "This started with a simple question: can I beat the market? I wanted to explore whether aggregated news sentiment from the Global Database of Events, Language and Tone (GDELT) could help predict market movements and inform the timing of trades." },
    ] },
    { id: "approach", title: "From sentiment to divergence", blocks: [
      { type: "text", content: "I experimented with GDELT's aggregated sentiment data and its relationship with market movements. The investigation shifted toward comparing sentiment-price divergences: situations where the tone of the news and the movement of prices tell different stories. The hypothesis is that some of these disagreements could indicate mispricing." },
    ] },
    { id: "evidence", title: "What the backtest shows", blocks: [
      { type: "image", src: "/images/experience-entries.introduction-to-finance.png", caption: "Exploratory backtest of the custom strategy against buy and hold. This is a historical comparison, not evidence of future performance." },
      { type: "text", content: "Early backtests suggested roughly 2.5% annual outperformance over a ten-year period. I still consider the result inconclusive. The benchmark, exact dates, trading costs, and evaluation protocol need to be documented alongside the result before drawing a stronger conclusion." },
    ] },
    { id: "limitations", title: "What remains unresolved", blocks: [
      { type: "text", content: "A positive historical result does not establish that sentiment-price divergence is a reliable signal. The next question is whether the result holds under a clearly specified evaluation and realistic assumptions, rather than whether one backtest looks encouraging." },
    ] },
    { id: "next-steps", title: "Next steps", blocks: [
      { type: "text", content: "Document the data preparation, benchmark, and evaluation setup; explain the decisions behind the strategy; and add reproducible evidence for its results and failure cases. These are the next steps for making the research assessable." },
    ] },
  ],
};

export default project;
