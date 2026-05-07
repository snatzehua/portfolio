"use client";

import "./page.css";

import { useState } from "react";
import HeroOverlay from "@/components/hero-overlay/hero-overlay";
import Sidebar from "@/components/sidebar/sidebar";
import TabViewer, { type Tab } from "@/components/tab-viewer/tab-viewer";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("Experience");

  return (
    <>
      <HeroOverlay />
      <div className="page-layout">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="page-content">
          <TabViewer activeTab={activeTab} />
        </main>
      </div>
    </>
  );
}
