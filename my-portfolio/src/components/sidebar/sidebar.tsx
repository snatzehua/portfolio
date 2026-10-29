import Link from "next/link";
import Image from "next/image";
import { SiLinkedin, SiGithub, SiMaildotru } from "react-icons/si";
import type { Section } from "@/content/types";
import "./styles.css";

const sections: { id: Section; label: string; number: string }[] = [
  { id: "projects", label: "Projects", number: "01" },
  { id: "experience", label: "Experience & Education", number: "02" },
  { id: "writing", label: "Writing", number: "03" },
  { id: "lifestyle", label: "Lifestyle", number: "04" },
];
const contacts = [
  { href: "https://www.linkedin.com/in/kieranhch", icon: SiLinkedin, label: "LinkedIn" },
  { href: "https://github.com/snatzehua", icon: SiGithub, label: "GitHub" },
  { href: "mailto:snatzehua@gmail.com", icon: SiMaildotru, label: "Email" },
];
export default function Sidebar({ activeSection }: { activeSection: Section }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-profile">
        <Link href="/" className="sidebar-portrait" aria-label="Kieran Ho — portrait and home">
          <Image src="/images/polaroid_pfp_edited.png" alt="Kieran holding a white dog in a polaroid photograph" width={377} height={601} sizes="(max-width: 760px) 46px, 96px" priority />
        </Link>
        <div className="sidebar-profile-copy">
          <Link href="/" className="sidebar-name" aria-label="Kieran Ho — home">KIERAN HO<span className="name-dot">.</span></Link>
          <p className="sidebar-intro">Business Analytics at NUS. Curious about data, systems, and how things work.</p>
        </div>
      </div>
      <nav className="sidebar-nav" aria-label="Main navigation">
        {sections.map(({ id, label, number }) => (
          <Link key={id} href={id === "projects" ? "/" : `/?section=${id}`} className={`sidebar-tab${activeSection === id ? " active" : ""}`} aria-current={activeSection === id ? "page" : undefined}>
            <span className="sidebar-number" aria-hidden="true">{number}</span><span>{label}</span>
          </Link>
        ))}
      </nav>
      <div className="sidebar-bottom">
        <p className="sidebar-note">Always a work in progress.</p>
        <div className="sidebar-contact">
          {contacts.map(({ href, icon: Icon, label }) => (
            <a key={label} href={href} className="contact-link" aria-label={label} {...(href.startsWith("https:") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
              <Icon aria-hidden="true" /><span>{label}</span>
            </a>
          ))}
        </div>
        <p className="sidebar-copyright">© {new Date().getFullYear()} Kieran Ho</p>
      </div>
    </aside>
  );
}
