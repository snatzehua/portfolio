import shutTheBox from "./shut-the-box";
import subtiles from "./subtiles-2";
import { newestFirst } from "../types";

export const writingEntries = newestFirst([shutTheBox, subtiles]);
export function getWriting(slug: string) {
  return writingEntries.find((entry) => entry.slug === slug);
}
