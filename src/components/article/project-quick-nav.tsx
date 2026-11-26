"use client";

import { useEffect, useRef, useState } from "react";
import type { ArticleSection } from "@/content/types";
import "./project-quick-nav.css";

export default function ProjectQuickNav({ sections }: { sections: Pick<ArticleSection, "id" | "title" | "navTitle">[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const mobileMenu = useRef<HTMLDetailsElement>(null);
  const desktopList = useRef<HTMLOListElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const targets = sections.map(({ id }) => document.getElementById(id)).filter((element): element is HTMLElement => !!element);
      let current: HTMLElement | undefined = targets[0];
      for (const target of targets) {
        if (target.getBoundingClientRect().top <= 120) current = target;
        else break;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) current = targets.at(-1);
      if (current) setActiveId(current.id);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    const observer = new ResizeObserver(schedule);
    const body = document.querySelector(".project-detail .article-body");
    if (body) observer.observe(body);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
    };
  }, [sections]);

  useEffect(() => {
    const list = desktopList.current;
    const current = list?.querySelector<HTMLElement>('[aria-current="location"]');
    if (!list || !current) return;
    // Keep a long list's current item visible without scrolling the article.
    if (current.offsetTop < list.scrollTop) list.scrollTop = current.offsetTop;
    else if (current.offsetTop + current.offsetHeight > list.scrollTop + list.clientHeight) {
      list.scrollTop = current.offsetTop + current.offsetHeight - list.clientHeight;
    }
  }, [activeId]);

  const links = (mobile: boolean) => sections.map(({ id, title }) => (
    <li key={id}>
      <a href={`#${id}`} aria-current={activeId === id ? "location" : undefined} onClick={() => {
        setActiveId(id);
        if (mobile && mobileMenu.current) mobileMenu.current.open = false;
      }}>{title}</a>
    </li>
  ));

  return (
    <>
      <nav className="project-quick-nav" aria-label="Project sections">
        <p className="project-quick-nav-label">Quick navigation</p>
        <ol ref={desktopList}>{links(false)}</ol>
      </nav>
      <details className="project-quick-nav-mobile" ref={mobileMenu}>
        <summary>Jump to section <span aria-hidden="true">↓</span></summary>
        <nav aria-label="Project sections"><ol>{links(true)}</ol></nav>
      </details>
    </>
  );
}
