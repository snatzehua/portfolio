"use client";

import "./styles.css";

import Image from "next/image";
import Link from "next/link";
import PageIntroduction from "@/components/page-introduction/page-introduction";

export default function Home() {
  return (
    <>
      <div className="scroll-view">
        <PageIntroduction
          text={
            <>
              From <u>video game mechanics</u> to{" "}
              <u>machine learning concepts</u>, I’ve always enjoyed breaking
              things down to understand how they work — and then figuring out
              how to use it to up my game.
            </>
          }
          header="About me"
        />
        <div className="scroll-section">
          <div className="section-wrapper">
            <div className="section-container">
              <div className="text-side">
                <div className="text-container">
                  <h1>Optimising Outcomes</h1>
                  <p>
                    It started with video games, where I’d test and figure out
                    the most efficient strategies — which spots generated the
                    most gold per hour, or which builds dealt the highest
                    damage. That data-driven mindset became the foundation for
                    how I solve problems today: breaking things down, testing
                    solutions, and refining what works. Whether it’s optimising
                    code or improving decision logic, I still find satisfaction
                    in chasing that “perfect build” — just in a different arena.
                  </p>
                  <Link href="/experience" className="learn-more">
                    <span>Find out more about my projects & experience</span>
                    <span className="arrow">→</span>
                  </Link>
                </div>
              </div>
              <div className="img-side">
                <div className="img-wrapper">
                  <Image
                    src="/images/factorio.jpg"
                    alt="factorio"
                    width={1000}
                    height={1000}
                    className="img"
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="flow-line-1" />
          </div>
        </div>
        <div className="scroll-section">
          <div className="section-wrapper">
            <div className="flow-line-1" />
            <div className="flow-line-2" />
            <div className="section-container">
              <div className="img-side">
                <div className="img-wrapper">
                  <Image
                    src="/images/davinci-resolve.png"
                    alt="factorio"
                    width={1000}
                    height={1000}
                    className="img"
                    priority
                  />
                </div>
              </div>
              <div className="text-side">
                <div className="text-container">
                  <h1>Creative Exploration</h1>
                  <p>
                    Sometimes, it’s not just about finding an efficient
                    solution, but finding ways to express creativity or fun.
                    Design is something that matters to me — from how apps work
                    to how stories are told. Whether I’m building an interface
                    or editing a video, I care about the experience it creates,
                    and I’m drawn to projects that let me build something that
                    feels authentic and meaningful.
                  </p>
                  <div className="flow-line" />
                  <Link href="/explorations" className="learn-more">
                    <span>Find out more about my hobbies & explorations</span>
                    <span className="arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-section">
          <div className="section-wrapper">
            <div className="flow-line-2" />
            <div className="section-container">
              <div className="text-side">
                <div className="text-container">
                  <h1>Moving Forward</h1>
                  <p>
                    What drives me forward isn’t hitting certain goals — but my
                    interest in exciting concepts that challenge me and better
                    my understanding of the world. I’m eager to keep learning
                    through the work I do, whether that means diving deeper into
                    systems I’ve worked with before, or exploring entirely new
                    domains. I don’t have a rigid checklist of things I want to
                    master — just a broad curiosity and the drive to keep
                    growing wherever I can bring value.
                  </p>
                  <Link href="/contact" className="learn-more">
                    <span>Find my contact information and socials here</span>
                    <span className="arrow">→</span>
                  </Link>
                </div>
              </div>
              <div className="img-side">
                <div className="img-wrapper">
                  <Image
                    src="/images/path.jpg"
                    alt="factorio"
                    width={1000}
                    height={1000}
                    className="img"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
