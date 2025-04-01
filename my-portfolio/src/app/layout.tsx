"use client";

import "./globals.css";

import { Geist, Geist_Mono, Inter, Reenie_Beanie } from "next/font/google";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link"; // Import Link

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Explorations", href: "/explorations" },
  { name: "Contact", href: "/contact" },
];

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const reenieBeanie = Reenie_Beanie({
  variable: "--font-reenie-beanie",
  weight: "400",
  subsets: ["latin"],
});

// Menu animation using clipPath for a smooth reveal
const menuVariants = {
  hidden: { clipPath: "inset(0% 0% 100% 0%)", opacity: 0 },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 0.95,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
  exit: {
    clipPath: "inset(0% 0% 100% 0%)",
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

// Staggered animation for menu items
const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null); // New reference for menu button
  const pathname = usePathname();

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node) // Ignore clicks on the menu button
      ) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${reenieBeanie.variable} antialiased`}
      >
        {/* Fixed Overlay */}
        <div className="overlay">
          <button
            ref={menuButtonRef} // Attach ref to menu button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {/* Burger Menu Icon */}
            <div className="burger-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>

            {/* Vertical Divider Line */}
            <div className="divider"></div>

            {/* Menu Text */}
            <p className="menu-text">M E N U</p>
          </button>

          {/* Full-screen overlay that closes the menu when clicked */}
          {menuOpen && (
            <div className="menu-overlay" onClick={() => setMenuOpen(false)} />
          )}

          {/* Full-width sliding dropdown with smooth clipPath animation */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                ref={menuRef} // Attach ref to the menu container
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={menuVariants}
                className="menu-dropdown-wrapper"
              >
                <motion.ul className="menu-dropdown" variants={menuVariants}>
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      className="nav-link"
                    >
                      <Link
                        href={link.href}
                        scroll={false}
                        onClick={() => setMenuOpen(false)}
                      >
                        <span>{link.name}</span>
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <motion.div
          key={pathname}
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          exit={{ y: -10 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="min-h-screen w-full bg-[#EDEBE9]" // or whatever your page bg is
        >
          {children}
        </motion.div>
        <footer className="site-footer">
          <p>© 2025 Kieran Ho. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
