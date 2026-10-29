import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PortfolioShell from "@/components/portfolio/portfolio-shell";
import ArticlePage from "@/components/article/article-page";
import { getWriting, writingEntries } from "@/content/writing";
import { formatDate } from "@/content/types";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return writingEntries.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const entry = getWriting((await params).slug);
  return entry ? { title: `${entry.title} | Kieran Ho`, description: entry.summary } : {};
}
export default async function WritingPage({ params }: Props) {
  const entry = getWriting((await params).slug);
  if (!entry) notFound();
  return (
    <PortfolioShell section="writing">
      <ArticlePage kind="writing" title={entry.title} subtitle={entry.subtitle} intro={entry.body} date={formatDate(entry.publishedAt)} tags={entry.tags} sections={entry.sections} />
    </PortfolioShell>
  );
}
