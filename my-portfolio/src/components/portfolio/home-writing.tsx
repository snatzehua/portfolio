import Link from "next/link";
import { writingEntries } from "@/content/writing";
import { formatDate, type WritingEntry } from "@/content/types";
import { writingExcerpt } from "@/content/writing-excerpt";
import "./writing-section.css";

function EntryMeta({ entry }: { entry: WritingEntry }) {
  return <p className="writing-idea-meta">
    <span>{entry.pinned ? "Pinned" : entry.tags.includes("Puzzles") ? "Puzzle" : "Writing"}</span>
    <time dateTime={entry.publishedAt}>{formatDate(entry.publishedAt)}</time>
  </p>;
}

export default function HomeWriting() {
  const featured = writingEntries.find(entry => entry.pinned) ?? writingEntries[0];
  if (!featured) return null;
  const recent = writingEntries.filter(entry => entry.slug !== featured.slug).slice(0, 2);
  return <section className="home-writing-section home-writing-compact" id="writing" aria-labelledby="overview-writing">
    <div className="writing-section-heading">
      <h2 id="overview-writing">Writing</h2>
      <Link className="text-link" href="/writing">All writing</Link>
    </div>
    <div className="writing-section-grid">
      <Link className="writing-section-feature writing-preview" href={`/writing/${featured.slug}`} aria-labelledby={`preview-${featured.slug}`}>
        <EntryMeta entry={featured} />
        <h3 id={`preview-${featured.slug}`}>{featured.title}</h3>
        <p className="writing-section-excerpt">{writingExcerpt(featured)}</p>
      </Link>
      {recent.length > 0 && <div className="writing-section-side">
        {recent.map(entry => <Link key={entry.slug} className="writing-preview" href={`/writing/${entry.slug}`} aria-labelledby={`preview-${entry.slug}`}>
          <EntryMeta entry={entry} />
          <h3 id={`preview-${entry.slug}`}>{entry.title}</h3>
          <p>{writingExcerpt(entry)}</p>
        </Link>)}
      </div>}
    </div>
  </section>;
}
