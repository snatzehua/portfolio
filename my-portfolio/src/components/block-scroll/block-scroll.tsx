"use client";

import "./styles.css";

import Folder from "@/components/folder/folder";
import { projects } from "@/components/block-scroll/block-scroll-entries";

export default function BlockScroll() {
  return (
    <>
      <div className="scroll-section">
        <div className="section-wrapper">
          <div className="folder-scroll-view">
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
          <div className="h-scroll-prompt">
            <div className="h-scroll-text">← SCROLL →</div>
          </div>
        </div>
      </div>
    </>
  );
}
