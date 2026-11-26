"use client";

import Link from "next/dist/client/link";
import "./styles.css";

// import Image from "next/image";

export default function BlockIntro() {
  return (
    <>
      <div className="scroll-section" id="about">
        <div className="section-wrapper">
          <div className="section-container">
            <div className="text-side">
              <div className="text-container">
                <h1>About Me</h1>
                <p>
                  Hi, I&apos;m Kieran! I live in Singapore, and am currently a
                  computing student at the National University of Singapore
                  (NUS). I&apos;m passionate about learning, experiencing and
                  creating just about anything! In fact, my mission in life is
                  to not be bored. A few of my recent interests span from seeing
                  if I could{" "}
                  <Link
                    href="/#experience"
                    style={{ textDecoration: "underline", color: "#165a9d" }}
                  >
                    beat the market
                  </Link>
                  , to{" "}
                  <Link
                    href="/#explorations"
                    style={{ textDecoration: "underline", color: "#165a9d" }}
                  >
                    making travel videos
                  </Link>{" "}
                  and even{" "}
                  <Link
                    href="/#explorations"
                    style={{ textDecoration: "underline", color: "#165a9d" }}
                  >
                    blacksmithing
                  </Link>
                  .
                  <br />
                  <br />
                  If you&apos;re here to see my academic or professional
                  history, feel free to check out my{" "}
                  <a
                    href="https://www.linkedin.com/in/kieranhch/"
                    style={{ textDecoration: "underline", color: "#165a9d" }}
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                  .
                  {/* What drives me forward isn’t hitting certain goals — but my
                  interest in exciting concepts that challenge me and better my
                  understanding of the world. I’m eager to keep learning through
                  the work I do, whether that means diving deeper into systems
                  I’ve worked with before, or exploring entirely new domains. I
                  don’t have a rigid checklist of things I want to master — just
                  a broad curiosity and the drive to keep growing wherever I can
                  bring value. */}
                </p>
              </div>
            </div>

            {/* <div className="img-side">
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
            </div> */}
          </div>
          <div className="flow-line-1" />
        </div>
      </div>
    </>
  );
}
