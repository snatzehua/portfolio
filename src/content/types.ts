export type Section = "projects" | "experience" | "writing" | "lifestyle";

export interface DiagramBlock {
  type: "diagram";
  title: string;
  steps: { label: string; detail: string }[];
  caption: string;
}

export type ContentBlock =
  | { type: "text"; content: string }
  | { type: "image"; src: string; alt?: string; caption?: string; width?: "full" | "half"; technical?: boolean; dimensions?: { width: number; height: number } }
  | { type: "latex"; content: string; caption?: string }
  | DiagramBlock;

export interface ArticleSection { id: string; title: string; hideTitle?: boolean; navTitle?: string; blocks: ContentBlock[] }

export const projectStatuses = ["In progress", "Completed", "Paused", "Archived"] as const;
export type ProjectStatus = (typeof projectStatuses)[number];

export interface Project {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  period: string;
  role: string;
  status: ProjectStatus;
  tags: string[];
  cover: string;
  coverAlt: string;
  repository?: string;
  demo?: string;
  outcome: string;
  sections: ArticleSection[];
}

export interface WritingEntry {
  slug: string;
  title: string;
  subtitle?: string;
  publishedAt: string;
  period: string;
  summary: string;
  pinned?: boolean;
  banner?: string;
  bannerAlt?: string;
  body: string;
  sections: ArticleSection[];
  tags: string[];
}

export function newestFirst<T extends { publishedAt: string }>(entries: T[]): T[] {
  return [...entries].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat("en-SG", {
    month: "short", year: "numeric",
    ...(date.length > 7 ? { day: "numeric" as const } : {}),
    timeZone: "UTC",
  }).format(new Date(`${date.length === 7 ? `${date}-01` : date}T00:00:00Z`));
}
