"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import Sidebar from "@/components/sidebar/sidebar";
import type { NavigationGroup } from "@/content/navigation";
import type { Section } from "@/content/types";
import "./styles.css";

export default function PortfolioFrame({ children, navigation }: { children: React.ReactNode; navigation: NavigationGroup[] }) {
  const pathname = usePathname();
  const router = useRouter();
  const reducedMotion = useReducedMotion();
  const [leaving, setLeaving] = useState(false);
  const navigationTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isOverview = pathname === "/";
  const activeSection: Section | "home" = navigation.find((group) => pathname === group.href || pathname.startsWith(`${group.href}/`))?.id ?? "home";
  const showGreeting = isOverview && !leaving;
  const GreetingHeading = isOverview ? "h1" : "p";

  useEffect(() => {
    setLeaving(false);
    if (navigationTimer.current) clearTimeout(navigationTimer.current);
    return () => { if (navigationTimer.current) clearTimeout(navigationTimer.current); };
  }, [pathname]);

  function navigateWithTransition(event: MouseEvent<HTMLDivElement>) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = event.target;
    const link = target instanceof Element ? target.closest<HTMLAnchorElement>("a[href]") : null;
    if (!link || link.hasAttribute("download") || (link.target && link.target !== "_self")) return;
    const destination = new URL(link.href, window.location.href);
    if (destination.origin !== window.location.origin) return;
    if (destination.pathname === pathname) {
      if (navigationTimer.current) clearTimeout(navigationTimer.current);
      setLeaving(false);
      return;
    }
    event.preventDefault();
    if (navigationTimer.current) clearTimeout(navigationTimer.current);
    const href = `${destination.pathname}${destination.search}${destination.hash}`;
    if (reducedMotion) { router.push(href); return; }
    setLeaving(true);
    // Keep the current route mounted until its banner and content have closed.
    navigationTimer.current = setTimeout(() => router.push(href), 280);
  }

  function settleFragment() {
    if (leaving || !window.location.hash) return;
    // Banner height and the entering content transform can shift a fragment target.
    document.getElementById(window.location.hash.slice(1))?.scrollIntoView({ block: "start", behavior: "instant" });
  }

  return <div className="portfolio-shell" onClickCapture={navigateWithTransition} data-transition={leaving ? "leaving" : "ready"}>
    <div className="portfolio-backdrop" aria-hidden="true"><Image src="/images/IMG_3726.webp" alt="" fill sizes="100vw" quality={80} priority /></div>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Sidebar activeSection={activeSection} navigation={navigation} />
    <main className="portfolio-main" id="main-content" tabIndex={-1} aria-busy={leaving}>
      <motion.header className="welcome-banner" id="intro" initial={false} animate={{ height: showGreeting ? "auto" : 0, opacity: showGreeting ? 1 : 0, marginBottom: showGreeting ? 16 : 0 }} transition={{ duration: reducedMotion ? 0 : .28, ease: [.22, .61, .36, 1] }} aria-hidden={!showGreeting} inert={!showGreeting}>
        <div className="welcome-banner-copy"><p className="eyebrow">Building, learning, exploring</p><GreetingHeading className="welcome-name">Hi, I&apos;m Kieran.</GreetingHeading><p>A little of what I do, and how I think.</p></div>
      </motion.header>
      <motion.div key={pathname} className="page-transition" onAnimationComplete={settleFragment} initial={reducedMotion ? false : { opacity: 0, y: 12, scaleY: .98 }} animate={{ opacity: leaving ? 0 : 1, y: leaving ? -8 : 0, scaleY: leaving ? .985 : 1 }} transition={{ duration: reducedMotion ? 0 : leaving ? .2 : .36, ease: [.22, .61, .36, 1] }}>
        {children}
      </motion.div>
    </main>
  </div>;
}
