"use client";

import "./styles.css";

import QuotedText from "@/components/quoted-text/quoted-text";

export default function Home() {
  return (
    <>
      <div className="scroll-section">
        <div className="section-wrapper">
          <div className="pattern-bg">
            <div className="about-me-text">
              <QuotedText
                text={`From video game mechanics to machine learning concepts, I've always enjoyed breaking things down to understand how they work — and then figuring out how to use it to up my game.`}
                header="About me"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
