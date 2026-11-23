import type { WritingEntry } from "./types";

// Card previews are plain text because the entire card is already a link.
export function writingExcerpt(entry: Pick<WritingEntry, "body" | "sections">): string {
  const opening = entry.body.trim() || entry.sections
    .flatMap(section => section.blocks)
    .find(block => block.type === "text")?.content || "";
  return opening
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}
