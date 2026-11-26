"use client";

import "./styles.css";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroOverlay() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="hero-overlay"
          onClick={() => setVisible(false)}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: "easeInOut" }}
        >
          <div className="hero-header">
            {"Hi, I'm Kieran."}
            <div className="hero-divider" />
            <p>{"I'm a computing student at NUS"}</p>
          </div>
          <img
            className="hero-polaroid"
            src="/images/polaroid_pfp_edited.png"
            alt="Portrait"
          />
          <span className="hero-prompt">click anywhere to enter</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
