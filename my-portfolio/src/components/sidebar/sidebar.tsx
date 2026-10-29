"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SiLinkedin, SiGithub, SiMaildotru } from "react-icons/si";
import type { Section } from "@/content/types";
import type { NavigationGroup } from "@/content/navigation";
import "./styles.css";

const contacts = [
  { href: "https://www.linkedin.com/in/kieranhch", icon: SiLinkedin, label: "LinkedIn" },
  { href: "https://github.com/snatzehua", icon: SiGithub, label: "GitHub" },
  { href: "mailto:snatzehua@gmail.com", icon: SiMaildotru, label: "Email" },
];

export default function Sidebar({ activeSection, navigation }: {
  activeSection: Section | "home";
  navigation: NavigationGroup[];
}) {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [expanded, setExpanded] = useState<Partial<Record<Section, boolean>>>(() => activeSection === "home" ? {} : { [activeSection]: true });

  useEffect(() => {
    if (activeSection !== "home") setExpanded({ [activeSection]: true });
    else setExpanded({});
  }, [activeSection]);

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, [pathname]);

  return (
    <aside className="sidebar">
      <div className="sidebar-profile">
        <div className="sidebar-portrait">
          <Image src="/images/polaroid_pfp_edited.png" alt="Kieran holding a white dog in a polaroid photograph" width={377} height={601} sizes="(max-width: 760px) 56px, (max-height: 700px) 84px, (max-height: 800px) 100px, 120px" priority />
        </div>
        <div className="sidebar-profile-copy">
          <Link href="/" className="sidebar-name" aria-label="Kieran Ho — overview">KIERAN HO<span className="name-dot">.</span></Link>
          <p className="sidebar-intro">Business Analytics at NUS. Curious about data, systems, and how things work.</p>
        </div>
      </div>
      <nav className="sidebar-nav" aria-label="Main navigation">
        <Link href="/" className={`sidebar-tab sidebar-home${activeSection === "home" ? " active" : ""}`} aria-current={activeSection === "home" ? "page" : undefined}>Overview</Link>
        {navigation.map((group) => (
          <div key={group.id} className="sidebar-menu-group">
            <div className="sidebar-menu-row">
              <Link href={group.href} className={`sidebar-tab${activeSection === group.id ? " active" : ""}`} aria-current={activeSection === group.id ? pathname === group.href ? "page" : "location" : undefined} onClick={() => { if (activeSection === group.id) setExpanded({ [group.id]: true }); }}>{group.label}</Link>
              <button type="button" className="sidebar-expand" aria-label={`${group.label} subsections`} aria-expanded={!!expanded[group.id]} aria-controls={`menu-${group.id}`} onClick={() => setExpanded((previous) => ({ ...previous, [group.id]: !previous[group.id] }))}>
                <span aria-hidden="true">{expanded[group.id] ? "−" : "+"}</span>
              </button>
            </div>
            <div id={`menu-${group.id}`} className="sidebar-submenu-wrap" data-expanded={!!expanded[group.id]} aria-hidden={!expanded[group.id]} inert={!expanded[group.id]}>
              <div className="sidebar-submenu-content"><ul className="sidebar-submenu">
              {group.children.map((child) => {
                const current = child.detailHref === pathname ? "page" : child.href === `${pathname}${hash}` ? "location" : undefined;
                return <li key={child.href}><Link href={child.href} aria-current={current} onClick={() => setHash(child.href.includes("#") ? `#${child.href.split("#")[1]}` : "")}>{child.label}</Link></li>;
              })}
              </ul></div>
            </div>
          </div>
        ))}
      </nav>
      <div className="sidebar-bottom">
        <p className="sidebar-note">Always a work in progress.</p>
        <div className="sidebar-contact">
          {contacts.map(({ href, icon: Icon, label }) => <a key={label} href={href} className="contact-link" aria-label={label} {...(href.startsWith("https:") ? { target: "_blank", rel: "noopener noreferrer" } : {})}><Icon aria-hidden="true" /><span>{label}</span></a>)}
        </div>
        <p className="sidebar-copyright">© {new Date().getFullYear()} Kieran Ho</p>
      </div>
    </aside>
  );
}
