import PortfolioShell from "./portfolio-shell";
import type { Section } from "@/content/types";

export default function SectionPage({ section, children }: { section: Section; children: React.ReactNode }) {
  return <PortfolioShell section={section}>{children}</PortfolioShell>;
}
