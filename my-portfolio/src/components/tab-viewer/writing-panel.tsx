"use client";

import { useState, useRef, useEffect } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";
import { writingEntries, type WritingEntry } from "./entries/writing-entries";

const SNIPPET_HEIGHT = "4.56rem";

function renderInlineLatex(html: string, key: number) {
  return <span key={key} dangerouslySetInnerHTML={{ __html: html }} />;
}

function renderText(text: string) {
  // Split on $...$ inline math, then within each non-math segment parse links
  const tokenRegex = /\$([^$]+)\$/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let keyCounter = 0;
  let match: RegExpExecArray | null;

  while ((match = tokenRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      renderLinks(text.slice(lastIndex, match.index), parts, keyCounter);
      keyCounter += 100;
    }
    try {
      const html = katex.renderToString(match[1], {
        throwOnError: false,
        displayMode: false,
      });
      parts.push(renderInlineLatex(html, keyCounter++));
    } catch {
      parts.push(<span key={keyCounter++}>{match[0]}</span>);
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length)
    renderLinks(text.slice(lastIndex), parts, keyCounter);
  return parts;
}

function renderLinks(text: string, parts: React.ReactNode[], baseKey: number) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    parts.push(
      <a
        key={baseKey + match.index}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="blog-link"
      >
        {match[1]}
      </a>,
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
}

function BlogCard({ entry }: { entry: WritingEntry }) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState<string>(SNIPPET_HEIGHT);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;
    setHeight(isOpen ? `${inner.scrollHeight}px` : SNIPPET_HEIGHT);
  }, [isOpen]);

  return (
    <article className="blog-card">
      {entry.banner && (
        <div className="blog-banner-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={entry.banner} alt="" className="blog-banner" />
        </div>
      )}
      <div className="blog-card-body">
        <header className="blog-header">
          <h2 className="blog-title">{entry.title}</h2>
          {entry.period && <p className="blog-date">{entry.period}</p>}
        </header>
        {entry.subtitle && <p className="blog-subtitle">{entry.subtitle}</p>}
        {entry.tags && (
          <div className="blog-tags">
            {entry.tags.map((tag, j) => (
              <span key={j} className="blog-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="blog-divider" />
        <div
          className="blog-body-wrap"
          data-open={isOpen ? "true" : "false"}
          style={{ height }}
        >
          <div ref={innerRef} className="blog-body-inner">
            <p className="blog-body">{renderText(entry.body)}</p>
            {entry.sections &&
              entry.sections.map((section, j) => {
                if (section.type === "text") {
                  return (
                    <p key={j} className="blog-body blog-section-text">
                      {renderText(section.content)}
                    </p>
                  );
                }
                if (section.type === "latex") {
                  let html = "";
                  try {
                    html = katex.renderToString(section.content, {
                      throwOnError: false,
                      displayMode: true,
                    });
                  } catch {
                    html = section.content;
                  }
                  return (
                    <figure key={j} className="blog-section-latex">
                      <div
                        className="blog-latex-block"
                        dangerouslySetInnerHTML={{ __html: html }}
                      />
                      {section.caption && (
                        <figcaption className="blog-section-caption blog-latex-caption">
                          {section.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                }
                return (
                  <figure
                    key={j}
                    className={`blog-section-figure${section.width === "half" ? " blog-section-figure--half" : ""}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={section.src}
                      alt={section.caption ?? ""}
                      className="blog-section-img"
                    />
                    {section.caption && (
                      <figcaption className="blog-section-caption">
                        {section.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              })}
          </div>
        </div>
        <button className="blog-read-more" onClick={() => setIsOpen((v) => !v)}>
          {isOpen ? "Show less" : "Read more →"}
        </button>
      </div>
    </article>
  );
}

export default function WritingPanel() {
  return (
    <div className="blog-feed">
      {writingEntries.map((entry, i) => (
        <BlogCard key={i} entry={entry} />
      ))}
    </div>
  );
}
