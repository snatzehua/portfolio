"use client";

import "./styles.css";

import { useRef, useState, useEffect } from "react";
import Folder from "@/components/folder/folder";
import { projects } from "@/components/block-scroll/block-scroll-entries";

export default function BlockScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const updateScrollProgress = () => {
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      const progress = (el.scrollLeft / maxScrollLeft) * 100;
      setScrollProgress(progress);
    };

    el.addEventListener("scroll", updateScrollProgress);
    window.addEventListener("resize", updateScrollProgress);

    updateScrollProgress();

    return () => {
      el.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  return (
    <>
      <div className="scroll-section">
        <div className="section-wrapper">
          <div className="scroll-indicator-wrapper">
            <div className="folder-scroll-view" ref={scrollRef}>
              {projects.map((project, index) => (
                <Folder
                  key={index}
                  index={index}
                  title={project.title}
                  period={project.period}
                  description={project.description}
                  tags={project.tags}
                  imgSrc={project.imgSrc}
                />
              ))}
            </div>
            <div className="custom-scroll-bar">
              <div
                className="custom-scroll-thumb"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
