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
            <div className="flow-line-1" />
            <div className="explorations-section-container">
              <video className="video-element" controls preload="auto">
                <source
                  src="/videos/japan-vlog-portfolio.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="explorations-text-container-left">
                <h1>Exploring Authenticity</h1>
                <p>
                  I love diving deep into authentic experiences, whether it’s
                  going to where only locals eat, talking to strangers, or
                  having a freezing barbeque in front of Mt. Fuji — just because
                  I wanted to. I love the spontaneity of the moment, and the
                  warmth of genuine connections — and making the most out of
                  fleeting moments.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-section">
          <div className="section-wrapper">
            <div className="flow-line-1" />
            <div className="flow-line-2" />
            <div className="explorations-section-container reverse-on-mobile">
              <div className="explorations-text-container-right">
                <h1>Finding Moments</h1>
                <p>
                  While I prefer telling stories through videos, I enjoy taking
                  photos as well. With a Sony A6400 and an iPhone 15 Pro, I try
                  to capture authentic moments, expressing emotions in subtle
                  ways. For me, photography isn’t about technical perfection;
                  it’s about presence — noticing the beauty in what’s already
                  there.
                </p>
              </div>
              <div className="explorations-photo-grid">
                {Array.from({ length: 18 }).map((_, i) => (
                  <div className="photo-cell" key={i}>
                    <Image
                      src={`/images/grid/photo${i + 1}.webp`}
                      alt={`photo ${i + 1}`}
                      width={300}
                      height={300}
                      className="grid-img"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-section">
          <div className="section-wrapper">
            <div className="flow-line-2" />
            <div className="explorations-section-container">
              <div className="explorations-img-container">
                <Image
                  src="/images/blacksmith1-polaroid.png"
                  alt="bs1"
                  width={1000}
                  height={1000}
                  className="bs1"
                  priority
                />
                <Image
                  src="/images/blacksmith2-polaroid.png"
                  alt="bs1"
                  width={1000}
                  height={1000}
                  className="bs2"
                  priority
                />
              </div>
              <div className="explorations-text-container-left">
                <h1>Forging Ahead</h1>
                <p>
                  Blacksmithing is something that most people don’t expect when
                  they ask about your hobbies. I’ve always been interested in
                  blacksmithing — so I jumped at the chance to try it out at a
                  local workshop. I learned how to work with high-carbon steel,
                  shape it into a blade, and refine it through grinding and
                  polishing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
