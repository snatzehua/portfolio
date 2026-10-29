import Link from "next/link";
import ArticleBody, { RichText } from "./article-body";
import type { ArticleSection } from "@/content/types";

export default function ArticlePage({ kind, title, subtitle, intro, date, tags, sections, facts, outcome, links }: {
  kind: "projects" | "writing";
  title: string;
  subtitle?: string;
  intro: string;
  date: string;
  tags: string[];
  sections: ArticleSection[];
  facts?: { label: string; value: string }[];
  outcome?: string;
  links?: { label: string; href: string }[];
}) {
  const backHref = kind === "projects" ? "/" : "/?section=writing";
  const label = kind === "projects" ? "Projects" : "Writing";
  return (
    <article className="detail-page">
      <Link href={backHref} className="back-link">← Back to {label}</Link>
      <header className="article-header">
        <p className="eyebrow">{kind === "projects" ? "Project notes" : "Writing"} / {date}</p>
        <h1>{title}</h1>
        {subtitle && <p className="article-subtitle">{subtitle}</p>}
        <p className="article-intro"><RichText text={intro} /></p>
        <div className="tag-list">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        {facts && <dl className="project-facts">{facts.map(({ label, value }) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>}
        {outcome && <div className="project-outcome"><span className="eyebrow">Where it stands</span><p>{outcome}</p></div>}
        {!!links?.length && <div className="article-links">{links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label} ↗</a>)}</div>}
      </header>
      <div className="article-layout">
        <nav className="article-contents" aria-label="On this page">
          <p className="eyebrow">On this page</p>
          {sections.map((section, i) => <a key={section.id} href={`#${section.id}`}><span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>{section.title}</a>)}
        </nav>
        <ArticleBody sections={sections} />
      </div>
      <footer className="article-footer"><Link href={backHref} className="back-link">← Back to {label}</Link><a href="#main-content">Back to top ↑</a></footer>
    </article>
  );
}
