"use client";

import { useState } from "react";
import { media } from "@/content/media";
import type { ContentBlock } from "@/content/types";

type ImageBlock = Extract<ContentBlock, { type: "image" }>;
const existingImages = Object.keys(media).filter(src => src.startsWith("/images/")).sort();

export function AddImage({ projectSlug, onAdd }: { projectSlug: string; onAdd: (image: ImageBlock) => void }) {
  const [open, setOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  async function upload(file: File) {
    setError("");
    if (file.size > 12 * 1024 * 1024) { setError("Choose a file of 12 MiB or less."); return; }
    setUploading(true);
    try {
      const response = await fetch(`/api/editor/projects/${encodeURIComponent(projectSlug)}/images`, {
        method: "POST",
        headers: { "Content-Type": file.type || "application/octet-stream" },
        body: file,
      });
      if (!response.ok) {
        const failure = await response.json().catch(() => ({}));
        throw new Error(failure.error ?? "The upload failed. Try again.");
      }
      onAdd(await response.json());
      setOpen(false);
    } catch (reason) { setError((reason as Error).message); }
    finally { setUploading(false); }
  }

  return <div className="editor-image-picker">
    <button type="button" aria-expanded={open} disabled={uploading} onClick={() => { setOpen(!open); setError(""); }}>{open ? "Cancel" : "+ Add image"}</button>
    {open && <div className="editor-image-fields">
      <label>Upload an image<input type="file" accept="image/png,image/jpeg,image/webp" disabled={uploading} onChange={event => {
        const file = event.currentTarget.files?.[0];
        event.currentTarget.value = "";
        if (file) void upload(file);
      }} /></label>
      <label>Use a portfolio image<select value="" disabled={uploading} onChange={event => {
        if (!event.target.value) return;
        onAdd({ type: "image", src: event.target.value });
        setOpen(false);
      }}><option value="">Choose an existing image</option>{existingImages.map(src => <option key={src} value={src}>{src.slice("/images/".length)}</option>)}</select></label>
      {uploading && <span role="status">Uploading image…</span>}
      {error && <span role="alert">{error}</span>}
    </div>}
  </div>;
}

export function EditorImage({ block, onChange, onRemove }: {
  block: ImageBlock;
  onChange: (image: ImageBlock) => void;
  onRemove: () => void;
}) {
  return <div className="editor-image-fields">
    {/* Use the original asset in the local workspace, including newly uploaded files. */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img className="editor-image-thumb" alt={block.alt ?? ""} src={block.src} draggable={false} />
    <label>Alt text<input value={block.alt ?? ""} maxLength={3000} onChange={event => onChange({ ...block, alt: event.target.value || undefined })} /></label>
    <label>Caption<input value={block.caption ?? ""} maxLength={3000} onChange={event => onChange({ ...block, caption: event.target.value || undefined })} /></label>
    <button type="button" className="editor-text-button" onClick={onRemove}>Remove image</button>
  </div>;
}
