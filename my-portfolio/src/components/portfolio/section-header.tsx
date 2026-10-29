import Link from "next/link";
import type { Section } from "@/content/types";

export default function SectionHeader({ section, eyebrow, title, headingId, description, caption }: {
  section: Section;
  eyebrow: string;
  title: string;
  headingId: string;
  description: string;
  caption?: [string, string];
}) {
  return <header className="section-heading section-header-sheet">
    <Link href={`/#${section}`} className="back-link section-header-back">← Overview</Link>
    <p className="eyebrow">{eyebrow}</p>
    <h1 id={headingId}>{title}<span className="heading-dot">.</span></h1>
    <p>{description}</p>
    {caption && <div className="section-caption"><span>{caption[0]}</span><span>{caption[1]}</span></div>}
  </header>;
}
