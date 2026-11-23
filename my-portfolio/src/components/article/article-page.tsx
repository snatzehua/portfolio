import Link from "next/link";
import Image from "next/image";
import { PaperHeader } from "@/components/portfolio/section-header";
import ArticleBody, { RichText } from "./article-body";
import type { ArticleSection } from "@/content/types";
import type { ReactNode } from "react";
import ProjectQuickNav from "./project-quick-nav";

export default function ArticlePage({ kind, title, subtitle, intro, tags, sections, facts, links, cover }: {
  kind: "projects" | "writing";
  title: string;
  subtitle?: string;
  intro: string;
  tags: string[];
  sections: ArticleSection[];
  facts?: { label: string; value: ReactNode }[];
  links?: { label: string; href: string }[];
  cover?: { src: string; alt: string };
}) {
  const backHref = `/${kind}`;
  const label = kind === "projects" ? "Projects" : "Writing";
  const isProject = kind === "projects";
  const hasQuickNav = isProject && sections.length > 1;
  return (
    <article className={`detail-page ${isProject ? "project-detail" : "writing-detail"}${hasQuickNav ? " project-detail-with-navigation" : ""}`}>
      <PaperHeader className="article-header">
        <Link href={backHref} className="back-link section-header-back">← Back to {label}</Link>
        <h1>{title}</h1>
        {subtitle && <p className="article-subtitle">{subtitle}</p>}
        <p className="article-intro"><RichText text={intro} /></p>
        {isProject ? (
          <dl className="project-facts">
            {facts?.map(({ label, value }) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
            {!!tags.length && <div className="project-topics"><dt>Tools &amp; topics</dt><dd className="tag-list">{tags.map((tag) => <span key={tag}>{tag}</span>)}</dd></div>}
          </dl>
        ) : <div className="tag-list">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>}
        {!!links?.length && <div className="article-links">{links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label} ↗</a>)}</div>}
      </PaperHeader>
      <div className="article-layout">
        {cover && <figure className="article-hero"><Image src={cover.src} alt={cover.alt} width={1600} height={600} sizes="(max-width: 960px) 94vw, 900px" /></figure>}
        {hasQuickNav ? <div className="project-reading-layout"><ProjectQuickNav sections={sections.map(({ id, title, navTitle }) => ({ id, title, navTitle }))} /><ArticleBody sections={sections} /></div> : <ArticleBody sections={sections} />}
      </div>
      <footer className="article-footer"><Link href={backHref} className="back-link">← Back to {label}</Link><a href="#main-content">Back to top ↑</a></footer>
    </article>
  );
}
