import Link from "next/link";
import PortfolioShell from "./portfolio-shell";
import type { Section } from "@/content/types";

export default function SectionPage({ section, children, showOverviewLink = true }: { section: Section; children: React.ReactNode; showOverviewLink?: boolean }) {
  return <PortfolioShell section={section}>
    {showOverviewLink && <Link href={`/#${section}`} className="back-link section-home-link">← Overview</Link>}
    {children}
  </PortfolioShell>;
}
