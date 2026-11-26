import type { Section } from "@/content/types";

export default function PortfolioShell({ section, children }: { section: Section | "home"; children: React.ReactNode }) {
  return <div className={`portfolio-paper${section === "home" ? " portfolio-paper-overview" : ""}`}>{children}</div>;
}
