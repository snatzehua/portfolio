"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import SiteHeader from "./site-header";
import type { NavigationGroup } from "@/content/navigation";
import "./styles.css";

export default function PortfolioFrame({ children, navigation }: { children: React.ReactNode; navigation: NavigationGroup[] }) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  function settleFragment() {
    if (!window.location.hash) return;
    document.getElementById(decodeURIComponent(window.location.hash.slice(1)))?.scrollIntoView({ block: "start", behavior: "instant" });
  }
  return <div className="portfolio-shell">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <SiteHeader navigation={navigation} />
    <main className="portfolio-main" id="main-content" tabIndex={-1}>
      <motion.div key={pathname} className="page-transition" onAnimationComplete={settleFragment} initial={reducedMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : .24 }}>{children}</motion.div>
    </main>
    <footer className="portfolio-footer">
      <Link href="/" className="footer-name">Kieran Ho</Link>
      <nav aria-label="Contact links"><a href="https://github.com/snatzehua" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a><a href="https://www.linkedin.com/in/kieranhch" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a><a href="mailto:snatzehua@gmail.com">Email <span aria-hidden="true">↗</span></a></nav>
      <a href="#main-content">Back to top <span aria-hidden="true">↑</span></a>
    </footer>
  </div>;
}
