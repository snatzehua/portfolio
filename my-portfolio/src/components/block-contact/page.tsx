"use client";

import "./styles.css";
import { SiLinkedin, SiGithub, SiMaildotru } from "react-icons/si";

export default function BlockContact() {
  return (
    <div className="scroll-section" id="contact">
      <div className="section-wrapper">
        <div className="pattern-bg">
          <div className="contacts-container">
            <div className="contacts-block">
              <h1 className="contacts-title">Let’s connect</h1>
              <p className="contacts-subtext">
                Reach me through any of these channels:
              </p>
              <div className="contacts-icons">
                <a href="https://www.linkedin.com/in/kieranhch" target="_blank">
                  <SiLinkedin className="contacts-icon" />
                  <span>/kieranhch</span>
                </a>
                <a href="https://github.com/snatzehua" target="_blank">
                  <SiGithub className="contacts-icon" />
                  <span>/snatzehua</span>
                </a>
                <a href="mailto:snatzehua@gmail.com">
                  <SiMaildotru className="contacts-icon" />
                  <span>snatzehua@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
