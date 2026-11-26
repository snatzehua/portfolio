"use client";

import { useEffect, useRef, type ComponentPropsWithoutRef } from "react";

export default function CollectionDetails(props: ComponentPropsWithoutRef<"details">) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    function openLinkedCollection() {
      const details = ref.current;
      const target = document.getElementById(window.location.hash.slice(1));
      if (details && target && details.contains(target)) {
        details.open = true;
        target.scrollIntoView({ block: "start" });
      }
    }

    openLinkedCollection();
    window.addEventListener("hashchange", openLinkedCollection);
    return () => window.removeEventListener("hashchange", openLinkedCollection);
  }, []);

  return (
    <details {...props} ref={ref} onToggle={(event) => {
      if (!event.currentTarget.open) {
        event.currentTarget.querySelectorAll("video").forEach((video) => video.pause());
      }
      props.onToggle?.(event);
    }} />
  );
}
