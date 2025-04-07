import "./styles.css";

import Image from "next/image";
import Link from "next/link";

export default function PolaroidNavigation() {
  return (
    <div className="scroll-section">
      <div className="section-wrapper">
        <div className="pattern-bg">
          <div className="scrap-container">
            <Image
              src="/images/5e9ec71f6534f010511f1fba5d064b12.png"
              alt="Description"
              fill
              className="scrap-image"
            />
            <p>Click a photo to explore more</p>
          </div>
          <div className="nav-container">
            <Link className="nav-component" href="/experience">
              <Image
                src="/images/polaroid-experience-1.jpg"
                alt="NUS Logo"
                width={500}
                height={500}
                className="polaroid-experience"
              ></Image>
            </Link>
            <Link className="nav-component" href="/about">
              <Image
                src="/images/polaroid-about-1.jpg"
                alt="NUS Logo"
                width={500}
                height={500}
                className="polaroid-about"
              ></Image>
            </Link>
            <Link className="nav-component" href="/explorations">
              <Image
                src="/images/polaroid-explorations-1.jpg"
                alt="NUS Logo"
                width={500}
                height={500}
                className="polaroid-explorations"
              ></Image>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
