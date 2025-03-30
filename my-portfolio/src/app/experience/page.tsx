"use client";

import Timeline from "@/components/timeline/timeline";

export default function Home() {
  return (
    <>
      <div className="scroll-view">
        <Timeline />
        <div className="scroll-section">
          <div className="section-wrapper"></div>
        </div>
      </div>
    </>
  );
}
