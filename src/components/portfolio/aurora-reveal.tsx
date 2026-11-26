"use client";

import Image from "next/image";
import { useEffect, useRef, type CSSProperties } from "react";
import { media } from "@/content/media";
import styles from "./aurora-reveal.module.css";

export default function AuroraReveal({ src, alt, title = "Northern lights" }: { src: string; alt: string; title?: string }) {
  const size = media[src];
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = track.current;
    if (!element) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let settleTimer = 0;
    let previousY = Math.max(0, window.scrollY);
    let entering = previousY === 0;

    function update() {
      frame = 0;
      if (!element || preference.matches) return;

      const y = Math.max(0, window.scrollY);
      const top = element.getBoundingClientRect().top;
      const start = Math.max(1, top + y);
      const progress = Math.min(1, y / start);
      const eased = progress * progress * (3 - 2 * progress);
      element.style.setProperty("--reveal", String(eased));
    }

    function onScroll() {
      if (!element || preference.matches) return;

      const y = Math.max(0, window.scrollY);
      window.clearTimeout(settleTimer);
      if (y === 0) entering = true;
      else if (y < previousY || element.getBoundingClientRect().top <= 1) entering = false;
      else if (entering && y > previousY) {
        // Follow the gesture directly, then finish a short first scroll after its momentum ends.
        settleTimer = window.setTimeout(() => {
          entering = false;
          if (!preference.matches) element.scrollIntoView({ block: "start", behavior: "smooth" });
        }, 90);
      }
      previousY = y;
      if (!frame) frame = window.requestAnimationFrame(update);
    }

    function applyPreference() {
      if (!element) return;
      window.clearTimeout(settleTimer);
      previousY = Math.max(0, window.scrollY);
      entering = previousY === 0;
      element.toggleAttribute("data-scroll", !preference.matches);
      update();
    }

    applyPreference();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    preference.addEventListener("change", applyPreference);
    return () => {
      window.clearTimeout(settleTimer);
      window.cancelAnimationFrame(frame);
      preference.removeEventListener("change", applyPreference);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div data-aurora className={styles.track} ref={track} style={{ "--source-width": `${size.width}px` } as CSSProperties}>
      <div className={styles.sticky}>
        <div className={styles.scene}>
          <div className={styles.frame}>
            <a href={src} data-essay-photo aria-label={`Enlarge: ${alt}`} className={styles.image}>
              <Image src={src} alt={alt} fill priority unoptimized />
            </a>
            <h2 id="aurora-title" className={styles.title}>{title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
