import Link from "next/link";
import type { Section } from "@/content/types";

export function PaperHeader({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <header className={`section-heading section-header-sheet ${className}`}>{children}</header>;
}

export default function SectionHeader({ section, eyebrow, title, headingId, description, caption }: {
  section: Section;
  eyebrow?: string;
  title: string;
  headingId: string;
  description?: string;
  caption?: [string, string];
}) {
  return <PaperHeader>
    <Link href={`/#${section}`} className="back-link section-header-back">← Overview</Link>
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h1 id={headingId}>{title}</h1>
    {description && <p>{description}</p>}
    {caption && <div className="section-caption"><span>{caption[0]}</span><span>{caption[1]}</span></div>}
  </PaperHeader>;
}
