"use client";

import "./styles.css";

import { useRef, useState, useEffect } from "react";
import Folder from "@/components/folder/folder";
import { projects } from "@/components/block-scroll/block-scroll-entries";

export default function BlockScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const itemWidth = el.scrollWidth / projects.length;
      const index = Math.round(scrollLeft / itemWidth);
      setActiveIndex(index);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="scroll-section">
        <div className="section-wrapper">
          <div className="scroll-indicator-wrapper">
            <div className="resume-download-container">
              <a
                href="/documents/KieranHoChengHong_Resume_Apr25.pdf"
                download
                className="resume-btn"
              >
                DOWNLOAD RESUME
              </a>
              <p className="resume-date">Accurate as of April 2025</p>
            </div>
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
            <div className="pagination-dots">
              {projects.map((_, i) => (
                <div
                  key={i}
                  className={`dot ${i === activeIndex ? "active" : ""}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
