"use client";

import { Geist, Geist_Mono, Inter } from "next/font/google";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

import "./globals.css";
import "./styles.css";

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

// Menu animation using clipPath for a smooth reveal
const menuVariants = {
  hidden: { clipPath: "inset(0% 0% 100% 0%)", opacity: 0 },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 0.95,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      staggerChildren: 0.2,
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
  const { scrollYProgress } = useScroll();
  const fadeOnScroll = useTransform(scrollYProgress, [0, 0.25], [1, 0]); // Reverse mapping

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        {/* Fixed Overlay */}
        <div className="overlay">
          <button
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

          {/* Full-width sliding dropdown with smooth clipPath animation */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={menuVariants}
                className="menu-dropdown-wrapper"
              >
                <motion.ul className="menu-dropdown" variants={menuVariants}>
                  <motion.li variants={itemVariants} className="nav-link">
                    <a href="/">
                      <span>Home</span>
                    </a>
                  </motion.li>
                  <motion.li variants={itemVariants} className="nav-link">
                    <a href="/projects">
                      <span>Projects</span>
                    </a>
                  </motion.li>
                  <motion.li variants={itemVariants} className="nav-link">
                    <a href="/about">
                      <span>About</span>
                    </a>
                  </motion.li>
                  <motion.li variants={itemVariants} className="nav-link">
                    <a href="/contact">
                      <span>Contact</span>
                    </a>
                  </motion.li>
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <motion.div
          className="header-statement"
          style={{ opacity: fadeOnScroll }}
        >
          Hi, I'm Kieran.
          <div className="white-line"></div>{" "}
          <p>I'm a Y2 Business Analytics student</p>
        </motion.div>
        <motion.img
          className="polaroid-pfp"
          src="/images/polaroid_pfp_edited.png"
          alt="PFP Image"
          style={{ opacity: fadeOnScroll }}
        ></motion.img>
        {children}
      </body>
    </html>
  );
}
