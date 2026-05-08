export interface WritingEntry {
  title: string;
  period?: string;
  body: string;
  tags?: string[];
}

export const writingEntries: WritingEntry[] = [
  {
    title: "Jane Street Puzzles",
    period: "MAY 2025",
    body: "placeholder",
    tags: ["Probability", "Combinatorics", "Puzzles"],
  },
];
