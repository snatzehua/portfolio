"use client";

import "./styles.css";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ArrowSVG from "@/assets/svg/ArrowSVG";
import PolaroidNavigation from "@/components/polaroid-nav/polaroid-nav";
import Head from "next/head";

<Head>
  <link
    rel="preload"
    as="image"
    href="/images/IMG_3726.PNG"
    fetchPriority="high"
  />
</Head>;

export default function Home() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const fadeOnScroll = useTransform(scrollYProgress, [0, 0.25], [1, 0]); // Reverse mapping
  return (
    <>
      <motion.div
        className="header-statement"
        style={{ opacity: fadeOnScroll }}
      >
        {"Hi, I'm Kieran."}
        <div className="white-line"></div>{" "}
        <p>{"I'm a computing student at NUS"}</p>
      </motion.div>
      <motion.img
        className="polaroid-pfp"
        style={{ opacity: fadeOnScroll }}
        src="/images/polaroid_pfp_edited.png"
        alt="PFP Image"
      ></motion.img>
      <div ref={scrollRef} className="scroll-view">
        <div className="scroll-section">
          <div className="base-screen">
            <motion.div
              className="arrow-container"
              style={{ opacity: fadeOnScroll }}
            >
              <ArrowSVG />
            </motion.div>
          </div>
        </div>
        <PolaroidNavigation />
      </div>
    </>
  );
}
