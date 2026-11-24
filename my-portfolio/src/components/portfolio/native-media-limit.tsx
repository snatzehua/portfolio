"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function NativeMediaLimit({ children }: { children: ReactNode }) {
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let query: MediaQueryList;
    function syncDensity() {
      query?.removeEventListener("change", syncDensity);
      const density = window.devicePixelRatio || 1;
      wrapper.current?.style.setProperty("--media-dpr", String(density));
      query = window.matchMedia(`(resolution: ${density}dppx)`);
      query.addEventListener("change", syncDensity);
    }
    function syncWidth() {
      wrapper.current?.style.setProperty("--media-viewport-width", document.documentElement.clientWidth + "px");
    }
    syncDensity();
    syncWidth();
    const observer = new ResizeObserver(syncWidth);
    observer.observe(document.documentElement);
    return () => {
      observer.disconnect();
      query.removeEventListener("change", syncDensity);
    };
  }, []);

  return <div ref={wrapper} style={{ display: "contents" }}>{children}</div>;
}
