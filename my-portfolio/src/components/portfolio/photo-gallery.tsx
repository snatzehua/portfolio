"use client";

import Image from "next/image";
import { media } from "@/content/media";
import { useEffect, useRef, useState } from "react";

type Photo = { src: string; alt: string };
export default function EssayViewer({ children }: { children: React.ReactNode }) {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (selected !== null && !dialog.current?.open) dialog.current?.showModal();
  }, [selected]);
  const photo = selected === null ? undefined : photos[selected];
  const size = photo && media[photo.src];
  const move = (direction: number) => setSelected((index) => index === null ? null : (index + direction + photos.length) % photos.length);
  return (
    <>
      <div onClick={(event) => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        const target = event.target;
        const link = target instanceof Element && target.closest<HTMLAnchorElement>("a[data-essay-photo]");
        if (!link) return;
        const links = Array.from(event.currentTarget.querySelectorAll<HTMLAnchorElement>("a[data-essay-photo]"));
        event.preventDefault();
        setPhotos(links.map((item) => ({ src: item.pathname, alt: item.querySelector("img")?.alt ?? "" })));
        setSelected(links.indexOf(link));
      }}>
        {children}
      </div>
      <dialog ref={dialog} className="photo-dialog" aria-label="Photo viewer" onClose={() => setSelected(null)} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }} onKeyDown={(event) => { if (event.key === "ArrowRight") move(1); if (event.key === "ArrowLeft") move(-1); }}>
        <div className="photo-dialog-content">
          <div className="photo-dialog-toolbar"><span>{selected === null ? "" : `${selected + 1} / ${photos.length}`}</span><button autoFocus onClick={() => dialog.current?.close()} aria-label="Close photo viewer">Close ×</button></div>
          {photo && size && (
            <div className="photo-dialog-image">
              <Image src={photo.src} alt={photo.alt} fill sizes="90vw" style={{
                maxWidth: `calc(${size.width}px / var(--media-dpr, 1))`,
                maxHeight: `calc(${size.height}px / var(--media-dpr, 1))`,
                margin: "auto",
              }} />
            </div>
          )}
          <div className="photo-dialog-toolbar"><button onClick={() => move(-1)} aria-label="Previous photo">← Previous</button><button onClick={() => move(1)} aria-label="Next photo">Next →</button></div>
        </div>
      </dialog>
    </>
  );
}
