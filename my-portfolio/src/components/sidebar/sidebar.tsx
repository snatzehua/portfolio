"use client";

import "./styles.css";

import { SiLinkedin, SiGithub, SiMaildotru } from "react-icons/si";
import type { Tab } from "@/components/tab-viewer/tab-viewer";

const TABS: Tab[] = ["Experience", "Projects", "Writing", "Lifestyle"];

const CONTACT_LINKS = [
  {
    href: "https://www.linkedin.com/in/kieranhch",
    icon: SiLinkedin,
    label: "/kieranhch",
    external: true,
  },
  {
    href: "https://github.com/snatzehua",
    icon: SiGithub,
    label: "/snatzehua",
    external: true,
  },
  {
    href: "mailto:snatzehua@gmail.com",
    icon: SiMaildotru,
    label: "snatzehua",
    external: false,
  },
];

interface SidebarProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <aside className="sidebar">
      <p className="sidebar-name">K I E R A N</p>

      <div className="sidebar-divider" />

      <nav className="sidebar-nav">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`sidebar-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      <div className="sidebar-spacer" />

      <div className="sidebar-divider" />

      <div className="sidebar-contact">
        {CONTACT_LINKS.map(({ href, icon: Icon, label, external }) => (
          <a
            key={href}
            href={href}
            className="contact-link"
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <Icon className="contact-icon" />
            <span className="contact-label">{label}</span>
          </a>
        ))}
      </div>

      <p className="sidebar-copyright">© {new Date().getFullYear()} Kieran Ho</p>
    </aside>
  );
}
