import shutTheBox from "./shut-the-box";
import subtiles from "./subtiles-2";
import stateOfAffairs from "./state-of-affairs";
import { newestFirst } from "../types";

export const writingEntries = newestFirst([shutTheBox, subtiles, stateOfAffairs]);
export function getWriting(slug: string) {
  return writingEntries.find((entry) => entry.slug === slug);
}
