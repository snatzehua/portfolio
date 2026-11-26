import SectionHeader from "@/components/portfolio/section-header";
import Link from "next/link";
import { writingEntries } from "@/content/writing";
import { writingExcerpt } from "@/content/writing-excerpt";
import { formatDate } from "@/content/types";

const groups = [
  { title: "Thinking", entries: writingEntries.filter(entry => !entry.tags.includes("Puzzles")) },
  { title: "Extras", entries: writingEntries.filter(entry => entry.tags.includes("Puzzles")) },
];

export default function WritingPanel() {
  return (
    <div className="section-page">
      <SectionHeader section="writing" title="Writing" headingId="writing-heading" />
      <div className="writing-columns">
        {groups.map(({ title, entries }) => entries.length > 0 && (
          <section className="writing-group" key={title} aria-labelledby={`group-${title}`}>
            <h2 id={`group-${title}`} className={title === "Thinking" ? "sr-only" : undefined}>{title}</h2>
            {entries.map(entry => (
              <Link key={entry.slug} id={`article-${entry.slug}`} href={`/writing/${entry.slug}`} className="writing-card">
                {title === "Extras" && entry.subtitle ? <>
                  <p className="writing-puzzle-name">{entry.subtitle}</p>
                  <h3 className="writing-puzzle-edition">{entry.title}</h3>
                </> : <>
                  <time className="eyebrow" dateTime={entry.publishedAt}>{formatDate(entry.publishedAt)}</time>
                  <h3>{entry.title}</h3>
                  <p className="writing-card-excerpt">{writingExcerpt(entry)}</p>
                </>}
              </Link>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
