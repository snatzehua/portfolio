"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./project-card";
import type { Project } from "@/content/types";

type FeaturedProject = Pick<Project, "slug" | "title" | "summary" | "cover" | "coverAlt" | "period" | "role">;
const interests = [
  { label: "alternative data", slug: "crop-yield-research" },
  { label: "AI assistants", slug: "careersphere" },
  { label: "algorithm design", slug: "please-help-me" },
];

export default function HomeProjects({ projects }: { projects: FeaturedProject[] }) {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const section = useRef<HTMLElement>(null);
  const interest = interests[active];

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!section.current) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.15 });
    observer.observe(section.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reducedMotion || !visible || hovered || focused) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive((current) => (current + 1) % interests.length);
    }, 2500);
    return () => window.clearInterval(timer);
  }, [reducedMotion, visible, hovered, focused]);

  return <section
    ref={section}
    className="home-projects"
    id="projects"
    aria-labelledby="overview-projects"
    onFocusCapture={() => setFocused(true)}
    onBlurCapture={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false);
    }}
  >
    <div className="home-section-heading">
      <h2 id="overview-projects" className="project-interest-heading" aria-label="Looking into alternative data, AI assistants, and algorithm design">
        <span>Looking into</span>
        <span className="project-interest-rotator" aria-hidden="true">
          <span className="project-interest-sizer" aria-hidden="true">algorithm design</span>
          <AnimatePresence initial={false}>
            <motion.span
              key={interest.slug}
              className="project-interest-word"
              aria-hidden="true"
              initial={{ y: reducedMotion ? 0 : "100%" }}
              animate={{ y: 0 }}
              exit={{ y: reducedMotion ? 0 : "-100%" }}
              transition={{ duration: reducedMotion ? 0 : 0.32, ease: [0.22, 0.61, 0.36, 1] }}
            >{interest.label}</motion.span>
          </AnimatePresence>
        </span>
      </h2>
      <Link className="text-link" href="/projects">All projects <span aria-hidden="true">→</span></Link>
    </div>
    <div className="selected-project-grid" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {projects.map((project, i) => <ProjectCard
        key={project.slug}
        project={project}
        featured
        highlighted={project.slug === interest.slug}
        priority={i === 0}
      />)}
    </div>
  </section>;
}
