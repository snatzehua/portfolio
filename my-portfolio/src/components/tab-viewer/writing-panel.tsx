import SectionHeader from "@/components/portfolio/section-header";
import Image from "next/image";
import Link from "next/link";
import { writingEntries } from "@/content/writing";
import { formatDate } from "@/content/types";

export default function WritingPanel() {
  return (
    <div className="section-page">
      <SectionHeader section="writing" eyebrow="04 / Puzzles & practice" title="Extras" headingId="writing-heading" description="Competitions, problem-solving, and other things I’m working on." caption={[`${String(writingEntries.length).padStart(2, "0")} entries`, "Newest first"]} />
      <div className="writing-list">
        {writingEntries.map((entry) => (
          <Link key={entry.slug} id={`article-${entry.slug}`} href={`/writing/${entry.slug}`} className="writing-card">
            <div className="writing-card-content">
              <time className="eyebrow" dateTime={entry.publishedAt}>{formatDate(entry.publishedAt)}</time>
              <h2>{entry.title}</h2>
              <p className="writing-subtitle">{entry.subtitle}</p>
              <p>{entry.summary}</p>
              <div className="tag-list">{entry.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <span className="card-action">Read article <span aria-hidden="true">↗</span></span>
            </div>
            {entry.banner && <div className="writing-thumbnail"><Image src={entry.banner} alt={`${entry.title} puzzle grid`} fill sizes="(max-width: 600px) 90vw, 220px" /></div>}
          </Link>
        ))}
      </div>
    </div>
  );
}
