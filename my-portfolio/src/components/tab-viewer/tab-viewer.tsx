"use client";

import "./styles.css";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import ExperiencePanel from "./experience-panel";
import ProjectsPanel from "./projects-panel";
import LifestylePanel from "./lifestyle-panel";

export type Tab = "Experience" | "Projects" | "Lifestyle";

interface TabViewerProps {
  activeTab: Tab;
}

export default function TabViewer({ activeTab }: TabViewerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [activeTab]);

  return (
    <div className="tab-content-area">
      <div className="tab-card">
        <div className="tab-scroll" ref={scrollRef}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.14, ease: "easeInOut" }}
            >
              {activeTab === "Experience" && <ExperiencePanel />}
              {activeTab === "Projects" && <ProjectsPanel />}
              {activeTab === "Lifestyle" && <LifestylePanel />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
