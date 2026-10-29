import Sidebar from "@/components/sidebar/sidebar";
import type { Section } from "@/content/types";
import "./styles.css";

export default function PortfolioShell({ section, children }: { section: Section; children: React.ReactNode }) {
  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Sidebar activeSection={section} />
      <main className="portfolio-main" id="main-content" tabIndex={-1}>
        <div className="portfolio-paper">{children}</div>
      </main>
    </div>
  );
}
