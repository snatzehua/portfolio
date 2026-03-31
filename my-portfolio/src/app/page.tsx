"use client";

import "./styles.css";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ArrowSVG from "@/assets/svg/ArrowSVG";
import PolaroidNavigation from "@/components/polaroid-nav/polaroid-nav";
import Head from "next/head";
import BlockContact from "@/components/block-contact/page";
import BlockIntro from "@/components/block-intro/page";
import BlockScroll from "@/components/block-scroll/block-scroll";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const fadeOnScroll = useTransform(scrollYProgress, [0, 0.25], [1, 0]); // Reverse mapping

  return (
    <>
      <Head>
        <link
          rel="preload"
          as="image"
          href="/images/IMG_3726.webp"
          fetchPriority="high"
        />
      </Head>

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
      />

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
        <BlockIntro />
        <BlockScroll />
        <BlockContact />
      </div>
    </>
  );
}
