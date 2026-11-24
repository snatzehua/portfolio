"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import styles from "./lifestyle-essay.module.css";

const clamp = (value: number) => Math.min(1, Math.max(0, value));
const ease = (value: number) => value * value * (3 - 2 * value);

export default function LifestyleSequence({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const track = ref.current;
    const stage = track?.firstElementChild;
    if (!track || !(stage instanceof HTMLElement)) return;
    const chapters = Array.from(stage.querySelectorAll<HTMLElement>(":scope > section"));
    // The aurora opens with its panorama, then dissolves into the pair of stills.
    const scenes = [chapters[0], ...chapters];
    track.style.setProperty("--scene-count", String(scenes.length));
    const colours = scenes.map(chapter =>
      getComputedStyle(chapter).getPropertyValue("--chapter-rgb").trim().split(/\s+/).map(Number)
    );
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const hero = chapters[0].querySelector<HTMLElement>("[data-aurora]");
    const pair = hero?.nextElementSibling;
    let frame = 0;

    function update() {
      frame = 0;
      if (!track || !(stage instanceof HTMLElement) || motion.matches) return;
      const height = stage.clientHeight;
      if (!height) return;
      const top = track.getBoundingClientRect().top;
      stage.style.setProperty("--editorial-width", track.clientWidth + "px");
      stage.style.setProperty("--entry", String(ease(clamp(1 - top / Math.max(1, top + scrollY)))));
      const progress = Math.min(scenes.length - 1, Math.max(0, -top / height));
      const from = Math.floor(progress);
      const to = Math.min(scenes.length - 1, from + 1);
      const fraction = clamp((progress - from - .22) / .7);
      const mix = ease(fraction);
      const active = mix < .5 ? from : to;
      const colour = colours[from].map((v, i) => Math.round(v + (colours[to][i] - v) * mix));
      stage.style.setProperty("--sequence-colour", 'rgb(' + colour.join(" ") + ')');
      for (const chapter of chapters) {
        const isFrom = chapter === scenes[from];
        const isTo = chapter === scenes[to];
        const opacity = (isFrom ? 1 - mix : 0) + (isTo ? mix : 0);
        chapter.style.setProperty("--layer-opacity", String(opacity));
        chapter.style.setProperty("--arrival", String(isFrom ? 1 : isTo ? fraction : 0));
        chapter.inert = chapter !== scenes[active];
        if (chapter.inert) chapter.querySelectorAll("video").forEach(video => {
          if (!video.paused) video.pause();
        });
      }
      const pairAmount = progress >= 1 ? 1 : mix;
      chapters[0].style.setProperty("--pair-opacity", String(pairAmount));
      if (hero) hero.inert = active !== 0;
      if (pair instanceof HTMLElement) pair.inert = active !== 1;
    }

    function schedule() {
      if (!frame && !motion.matches) frame = requestAnimationFrame(update);
    }

    function alignHash() {
      if (!track || !(stage instanceof HTMLElement) || motion.matches) return;
      const index = scenes.findIndex(scene => scene.id && "#" + scene.id === location.hash);
      if (index >= 0) {
        window.scrollTo({ top: track.getBoundingClientRect().top + scrollY + index * stage.clientHeight, behavior: "instant" });
        update();
      }
    }

    function configure() {
      if (!track || !(stage instanceof HTMLElement)) return;
      track.toggleAttribute("data-pinned", !motion.matches);
      stage.toggleAttribute("data-transitioning", !motion.matches);
      if (motion.matches) {
        chapters.forEach(chapter => { chapter.inert = false; });
        if (hero) hero.inert = false;
        if (pair instanceof HTMLElement) pair.inert = false;
      } else {
        alignHash();
        update();
      }
    }

    configure();
    window.addEventListener("hashchange", alignHash);
    window.addEventListener("scroll", schedule, { passive: true });
    const observer = new ResizeObserver(schedule);
    observer.observe(stage);
    motion.addEventListener("change", configure);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("hashchange", alignHash);
      window.removeEventListener("scroll", schedule);
      motion.removeEventListener("change", configure);
    };
  }, []);

  return <div ref={ref} className={styles.sequence}><div className={styles.stage}>{children}</div></div>;
}
