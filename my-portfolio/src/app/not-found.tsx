import Link from "next/link";
import PortfolioShell from "@/components/portfolio/portfolio-shell";

export default function NotFound() {
  return <PortfolioShell section="projects"><div className="section-page not-found"><p className="eyebrow">404 / A missing page</p><h1>This one isn&apos;t here.</h1><p>The link may have changed. You can find the current work in Projects.</p><Link href="/" className="back-link">← Back to Projects</Link></div></PortfolioShell>;
}
