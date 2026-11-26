import type { Metadata } from "next";
import { redirect } from "next/navigation";
import PortfolioShell from "@/components/portfolio/portfolio-shell";
import ScrollMemory from "@/components/portfolio/scroll-memory";
import HomeOverview from "@/components/portfolio/home-overview";

export const metadata: Metadata = { title: "Kieran Ho | Projects, lifestyle & writing" };
type Props = { searchParams: Promise<{ section?: string | string[] }> };

export default async function Home({ searchParams }: Props) {
  const { section } = await searchParams;
  if (section === "projects" || section === "experience" || section === "writing" || section === "lifestyle") {
    redirect(`/${section}`);
  }
  return (
    <PortfolioShell section="home">
      <ScrollMemory section="overview" />
      <HomeOverview />
    </PortfolioShell>
  );
}
