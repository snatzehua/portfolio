import Link from "next/link";
import PortfolioShell from "./portfolio-shell";
import type { Section } from "@/content/types";

export default function SectionPage({ section, children }: { section: Section; children: React.ReactNode }) {
  return <PortfolioShell section={section}>
    <Link href={`/#${section}`} className="back-link section-home-link">← Home</Link>
    {children}
  </PortfolioShell>;
}
