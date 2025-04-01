"use client";

import "./styles.css";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Explorations", href: "/explorations" },
  { name: "Contact", href: "/contact" },
];

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

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
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
    <>
      <div className="overlay">
        <button
          ref={menuButtonRef}
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="burger-menu">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="divider"></div>
          <p className="menu-text">M E N U</p>
        </button>

        {menuOpen && (
          <div className="menu-overlay" onClick={() => setMenuOpen(false)} />
        )}

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              ref={menuRef}
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
    </>
  );
}
