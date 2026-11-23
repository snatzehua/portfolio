import SectionHeader from "@/components/portfolio/section-header";
import Image from "next/image";
import Link from "next/link";
import { writingEntries } from "@/content/writing";
import { formatDate } from "@/content/types";

export default function WritingPanel() {
  return (
    <div className="section-page">
      <SectionHeader section="writing" title="Writing" headingId="writing-heading" />
      <div className="writing-list">
        {writingEntries.map((entry) => (
          <Link key={entry.slug} id={`article-${entry.slug}`} href={`/writing/${entry.slug}`} className="writing-card">
            <div className="writing-card-content">
              <time className="eyebrow" dateTime={entry.publishedAt}>{formatDate(entry.publishedAt)}</time>
              <h2>{entry.title}</h2>
              <p className="writing-subtitle">{entry.subtitle}</p>
              <p>{entry.summary}</p>
              <span className="card-action">Read article <span aria-hidden="true">→</span></span>
            </div>
            {entry.banner && <div className="writing-thumbnail"><Image src={entry.banner} alt={`${entry.title} puzzle grid`} fill sizes="(max-width: 600px) 90vw, 220px" /></div>}
          </Link>
        ))}
      </div>
    </div>
  );
}
