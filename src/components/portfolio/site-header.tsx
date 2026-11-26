"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { NavigationGroup } from "@/content/navigation";

export default function SiteHeader({ navigation }: { navigation: NavigationGroup[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => { setOpen(false); }, [pathname]);
  return <header className="site-header" onKeyDown={(event) => {
    if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); }
  }}>
    <Link href="/" className="site-name" aria-label="Overview — Kieran Ho" aria-current={pathname === "/" ? "page" : undefined} onClick={() => setOpen(false)}>Overview</Link>
    <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>
      <span>{open ? "Close" : "Menu"}</span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d={open ? "M5 5l10 10M15 5L5 15" : "M3 5h14M3 10h14M3 15h14"} stroke="currentColor" strokeWidth="1.5" /></svg>
    </button>
    <nav id="site-navigation" className={`site-navigation${open ? " is-open" : ""}`} aria-label="Main navigation">
      {navigation.map(({ id, href, label }) => <Link key={id} href={href} onClick={() => setOpen(false)} aria-current={pathname === href ? "page" : pathname.startsWith(`${href}/`) ? "location" : undefined}>{label}</Link>)}
      <a className="header-email" href="mailto:snatzehua@gmail.com">Email <span aria-hidden="true">↗</span></a>
    </nav>
  </header>;
}
