"use client";

import "./styles.css";

import Image from "next/image";
import PageIntroduction from "@/components/page-introduction/page-introduction";

export default function Home() {
  return (
    <>
      <div className="scroll-view">
        <PageIntroduction
          text={
            <>
              Beyond school and work, I’m drawn to things that challenge and
              ground me — from the quiet intensity of <u>forging metal</u>, to
              the spontaneous freedom of <u>solo backpacking</u>.
            </>
          }
          header="Explorations"
        />
        <div className="scroll-section">
          <div className="section-wrapper">
            <video className="video-element" controls preload="auto">
              <source src="/videos/japan-vlog-portfolio.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="scroll-section">
          <div className="section-wrapper">
            <div className="section-container">
              <Image
                src="/images/blacksmith1.JPG"
                alt="bs1"
                width={1000}
                height={1000}
                className="bs1"
                priority
              />
              <Image
                src="/images/blacksmith2.JPG"
                alt="bs1"
                width={1000}
                height={1000}
                className="bs2"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
