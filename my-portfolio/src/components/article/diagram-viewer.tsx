"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import "./diagram-viewer.css";

export default function DiagramViewer({ src, caption, width, height, narrow = false }: {
  src: string;
  caption?: string;
  width: number;
  height: number;
  narrow?: boolean;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const labelId = useId();
  const descriptionId = useId();
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [fit, setFit] = useState(1);
  const alt = caption ?? "Technical implementation diagram";

  function close() { dialog.current?.close(); }
  function show() {
    opener.current = document.activeElement as HTMLElement | null;
    setZoom(1);
    dialog.current?.showModal();
    setOpen(true);
  }

  useEffect(() => {
    if (!open) return;
    const element = viewport.current;
    if (!element) return;
    const body = document.body;
    const overflow = body.style.overflow;
    const padding = body.style.paddingRight;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbar) body.style.paddingRight = `${parseFloat(getComputedStyle(body).paddingRight) + scrollbar}px`;
    body.style.overflow = "hidden";
    function resize() {
      const bounds = element!.getBoundingClientRect();
      setFit(Math.min((bounds.width - 32) / width, (bounds.height - 32) / height, 1));
    }
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(element);
    return () => {
      observer.disconnect();
      body.style.overflow = overflow;
      body.style.paddingRight = padding;
    };
  }, [open, width, height]);

  useEffect(() => {
    if (viewport.current) { viewport.current.scrollTop = 0; viewport.current.scrollLeft = 0; }
  }, [zoom]);

  return (
    <figure className={`article-figure${narrow ? " article-figure-narrow" : ""}`}>
      <button type="button" className="diagram-viewer-trigger" onClick={show} aria-label={`Expand diagram: ${alt}`} aria-haspopup="dialog">
        <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 760px) 90vw, 760px" className="article-image" />
        <span className="diagram-viewer-hint" aria-hidden="true">Expand diagram ↗</span>
      </button>
      {caption && <figcaption>{caption}</figcaption>}
      <a href={src} target="_blank" rel="noopener noreferrer" className="article-diagram-open">Open original image ↗</a>
      <dialog ref={dialog} className="diagram-viewer-dialog" aria-labelledby={labelId} aria-describedby={descriptionId}
        onClose={() => { setOpen(false); opener.current?.focus({ preventScroll: true }); }}
        onKeyDown={event => {
          if (event.key !== "Tab") return;
          const controls = dialog.current?.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], [tabindex="0"]');
          const first = controls?.[0];
          const last = controls?.[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
          else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
        }}
        onClick={event => { if (event.target === dialog.current) close(); }}>
        <div className="diagram-viewer-shell">
          <div className="diagram-viewer-heading">
            <h2 id={labelId}>Technical diagram</h2>
            <button type="button" className="diagram-viewer-close" onClick={close} autoFocus aria-label="Close diagram">Close <span aria-hidden="true">×</span></button>
          </div>
          <div className="diagram-viewer-toolbar" aria-label="Diagram zoom controls">
            <button type="button" onClick={() => setZoom(value => Math.max(.5, value / 1.5))} disabled={zoom <= .5} aria-label="Zoom out">−</button>
            <output aria-live="polite" aria-label="Zoom relative to fitted view">{Math.round(zoom * 100)}%</output>
            <button type="button" onClick={() => setZoom(value => Math.min(8, value * 1.5))} disabled={zoom >= 8} aria-label="Zoom in">+</button>
            <button type="button" onClick={() => setZoom(1)}>Fit</button>
            <span className="diagram-viewer-scroll-hint">Scroll to explore when zoomed</span>
          </div>
          <div ref={viewport} className="diagram-viewer-viewport" tabIndex={0} aria-label="Diagram image; scroll to explore">
            {open && <div className="diagram-viewer-canvas" style={{ minWidth: width * fit * zoom + 32, minHeight: height * fit * zoom + 32 }}>
              <Image src={src} alt={alt} width={width} height={height} unoptimized className="diagram-viewer-image" style={{ width: width * fit * zoom, height: height * fit * zoom }} />
            </div>}
          </div>
          <p id={descriptionId} className="diagram-viewer-caption">{caption ?? "Use the zoom controls to inspect the implementation diagram."}</p>
        </div>
      </dialog>
    </figure>
  );
}
