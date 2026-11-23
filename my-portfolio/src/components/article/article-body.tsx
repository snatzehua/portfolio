import Image from "next/image";
import katex from "katex";
import "katex/dist/katex.min.css";
import { media } from "@/content/media";
import type { ArticleSection } from "@/content/types";
import TechnicalDiagram from "./technical-diagram";
import DiagramViewer from "./diagram-viewer";

export function RichText({ text }: { text: string }) {
  const tokens = /\$([^$]+)\$|\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let position = 0;
  for (const match of text.matchAll(tokens)) {
    if (match.index > position) parts.push(text.slice(position, match.index));
    if (match[1]) {
      parts.push(<span key={match.index} dangerouslySetInnerHTML={{ __html: katex.renderToString(match[1], { throwOnError: false, displayMode: false }) }} />);
    } else {
      parts.push(<a key={match.index} href={match[3]} target="_blank" rel="noopener noreferrer">{match[2]}</a>);
    }
    position = match.index + match[0].length;
  }
  if (position < text.length) parts.push(text.slice(position));
  return <>{parts}</>;
}

export default function ArticleBody({ sections }: { sections: ArticleSection[] }) {
  return (
    <div className="article-body">
      {sections.map((section) => (
        <section id={section.id} key={section.id} className="article-section">
          {!section.hideTitle && <h2>{section.title}</h2>}
          {section.blocks.map((block, i) => {
            if (block.type === "diagram") return <TechnicalDiagram key={i} {...block} />;
            if (block.type === "text") return <p key={i}><RichText text={block.content} /></p>;
            if (block.type === "latex") return <figure key={i}><div className="article-math" dangerouslySetInnerHTML={{ __html: katex.renderToString(block.content, { throwOnError: false, displayMode: true }) }} />{block.caption && <figcaption>{block.caption}</figcaption>}</figure>;
            const size = media[block.src];
            if (block.technical) return <DiagramViewer key={i} src={block.src} caption={block.caption} width={size?.width ?? 1200} height={size?.height ?? 800} narrow={block.width === "half"} />;
            return (
              <figure key={i} className={block.width === "half" ? "article-figure article-figure-narrow" : "article-figure"}>
                <a href={block.src} target="_blank" rel="noopener noreferrer" aria-label={`View larger: ${block.caption ?? "project image"}`}>
                  <Image src={block.src} alt={block.caption ?? ""} width={size?.width ?? 1200} height={size?.height ?? 800} sizes="(max-width: 760px) 90vw, 700px" className="article-image" />
                </a>
                {block.caption && <figcaption>{block.caption}</figcaption>}
              </figure>
            );
          })}
        </section>
      ))}
    </div>
  );
}
