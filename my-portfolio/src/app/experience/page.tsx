"use client";

import BlockScroll from "@/components/block-scroll/block-scroll";
import PageIntroduction from "@/components/page-introduction/page-introduction";
import TechStack from "@/components/tech-stacks/tech-stacks";
import Timeline from "@/components/timeline/timeline";

export default function Home() {
  return (
    <>
      <div className="scroll-view">
        <PageIntroduction
          header="Experience"
          text={
            <>
              A <u>Business Analytics</u> major with roots in{" "}
              <u>Computer Engineering</u>, and a double specialisation in{" "}
              financial analytics and machine learning — with numerous projects
              in various domains.
            </>
          }
        />
        <Timeline />
        <BlockScroll />
        <TechStack />
      </div>
    </>
  );
}
