"use client";

import { useEffect } from "react";

export default function ScrollMemory({ section }: { section: string }) {
  useEffect(() => {
    const key = `portfolio:scroll:${section}`;
    let frame = 0;
    let secondFrame = 0;
    const remember = () => {
      try { sessionStorage.setItem(key, String(window.scrollY)); } catch { /* Storage is optional. */ }
    };
    // Restore after navigation scroll handling; image ratios reserve their space.
    frame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        let previous = 0;
        try { previous = Number(sessionStorage.getItem(key)) || 0; } catch { /* Use the top. */ }
        window.scrollTo({ top: previous, behavior: "instant" });
        window.addEventListener("scroll", remember, { passive: true });
      });
    });
    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(secondFrame);
      window.removeEventListener("scroll", remember);
    };
  }, [section]);
  return null;
}
