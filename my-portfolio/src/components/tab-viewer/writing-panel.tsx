import { writingEntries } from "./entries/writing-entries";

export default function WritingPanel() {
  return (
    <div className="blog-feed">
      {writingEntries.map((entry, i) => (
        <article key={i} className="blog-card">
          <header className="blog-header">
            <h2 className="blog-title">{entry.title}</h2>
            {entry.period && <p className="blog-date">{entry.period}</p>}
          </header>
          {entry.tags && (
            <div className="blog-tags">
              {entry.tags.map((tag, j) => (
                <span key={j} className="blog-tag">{tag}</span>
              ))}
            </div>
          )}
          <div className="blog-divider" />
          <p className="blog-body">{entry.body}</p>
        </article>
      ))}
    </div>
  );
}
