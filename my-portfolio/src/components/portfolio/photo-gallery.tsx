"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Photo = { src: string; alt: string };
export default function PhotoGallery({ photos, polaroids = false }: { photos: Photo[]; polaroids?: boolean }) {
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (selected !== null && !dialog.current?.open) dialog.current?.showModal();
  }, [selected]);
  const move = (direction: number) => setSelected((index) => index === null ? null : (index + direction + photos.length) % photos.length);
  return (
    <>
      <div className={polaroids ? "polaroid-gallery" : "photography-grid"}>
        {photos.map((photo, i) => <button key={photo.src} onClick={() => setSelected(i)} aria-label={`View ${photo.alt}`}><Image src={photo.src} alt={photo.alt} width={600} height={600} sizes="(max-width: 600px) 28vw, 220px" /></button>)}
      </div>
      <dialog ref={dialog} className="photo-dialog" aria-label="Photo viewer" onClose={() => setSelected(null)} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }} onKeyDown={(event) => { if (event.key === "ArrowRight") move(1); if (event.key === "ArrowLeft") move(-1); }}>
        <div className="photo-dialog-content">
          <div className="photo-dialog-toolbar"><span>{selected === null ? "" : `${selected + 1} / ${photos.length}`}</span><button autoFocus onClick={() => dialog.current?.close()} aria-label="Close photo viewer">Close ×</button></div>
          {selected !== null && <div className="photo-dialog-image"><Image src={photos[selected].src} alt={photos[selected].alt} fill sizes="90vw" /></div>}
          <div className="photo-dialog-toolbar"><button onClick={() => move(-1)} aria-label="Previous photo">← Previous</button><button onClick={() => move(1)} aria-label="Next photo">Next →</button></div>
        </div>
      </dialog>
    </>
  );
}
