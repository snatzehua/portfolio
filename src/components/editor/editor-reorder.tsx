"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import type { ArticleSection } from "@/content/types";

type Item = { sectionId: string; blockIndex?: number };
type Target = { item: Item; after: boolean };

function canMove(sections: ArticleSection[], source: Item, target: Target) {
  const from = sections.find(section => section.id === source.sectionId);
  const to = sections.find(section => section.id === target.item.sectionId);
  if (!from || !to) return false;
  if (source.blockIndex === undefined) {
    if (target.item.blockIndex !== undefined) return false;
    const index = sections.indexOf(from);
    const slot = sections.indexOf(to) + Number(target.after);
    return slot !== index && slot !== index + 1;
  }
  if (target.item.blockIndex === undefined || !from.blocks[source.blockIndex] || !to.blocks[target.item.blockIndex]) return false;
  if (from !== to) return to.blocks.length < 100;
  const slot = target.item.blockIndex + Number(target.after);
  return slot !== source.blockIndex && slot !== source.blockIndex + 1;
}

function reorder(sections: ArticleSection[], source: Item, target: Target) {
  const from = sections.findIndex(section => section.id === source.sectionId);
  const to = sections.findIndex(section => section.id === target.item.sectionId);
  if (source.blockIndex === undefined) {
    const next = sections.slice();
    const [section] = next.splice(from, 1);
    next.splice(to + Number(target.after) - Number(from < to), 0, section);
    return next;
  }
  const next = sections.map((section, index) => index === from || index === to
    ? { ...section, blocks: section.blocks.slice() } : section);
  const [block] = next[from].blocks.splice(source.blockIndex, 1);
  const slot = target.item.blockIndex! + Number(target.after);
  next[to].blocks.splice(slot - Number(from === to && source.blockIndex < slot), 0, block);
  if (!next[from].blocks.length) next[from].blocks.push({ type: "text", content: "[Draft]" });
  return next;
}

export function useEditorReorder(sections: ArticleSection[], onChange: (sections: ArticleSection[]) => void) {
  const [source, setSource] = useState<Item>();
  const [target, setTarget] = useState<Target>();
  const pointer = useRef<{ id: number; source: Item; x: number; y: number } | undefined>(undefined);
  const animation = useRef<number>(0);
  const toolbarBottom = useRef(0);

  useEffect(() => () => cancelAnimationFrame(animation.current), []);

  function finish() {
    pointer.current = undefined;
    cancelAnimationFrame(animation.current);
    setSource(undefined);
    setTarget(undefined);
  }

  function hitTest(source: Item, x: number, y: number): Target | undefined {
    const block = source.blockIndex !== undefined;
    const node = document.elementFromPoint(x, y)?.closest<HTMLElement>(block ? "[data-block-index]" : "[data-reorder-section]:not([data-block-index])");
    if (!node?.dataset.reorderSection) return;
    const item = { sectionId: node.dataset.reorderSection, blockIndex: block ? Number(node.dataset.blockIndex) : undefined };
    const sourceSection = sections.findIndex(section => section.id === source.sectionId);
    const destinationSection = sections.findIndex(section => section.id === item.sectionId);
    const rect = node.getBoundingClientRect();
    let after = y >= rect.top + rect.height / 2;
    // Within the same list, dragging onto an item moves to its index, even for tall text blocks.
    if (!block) after = destinationSection > sourceSection;
    else if (sourceSection === destinationSection) after = item.blockIndex! > source.blockIndex!;
    const next = { item, after };
    return canMove(sections, source, next) ? next : undefined;
  }

  function updateTarget() {
    const drag = pointer.current;
    if (!drag) return;
    const next = hitTest(drag.source, drag.x, drag.y);
    setTarget(previous => previous?.after === next?.after && previous?.item.sectionId === next?.item.sectionId
      && previous?.item.blockIndex === next?.item.blockIndex ? previous : next);
  }

  function autoScroll() {
    const drag = pointer.current;
    if (!drag) return;
    const edge = 55;
    const above = Math.max(0, toolbarBottom.current + edge - drag.y);
    const below = Math.max(0, drag.y - window.innerHeight + edge);
    if (above || below) {
      window.scrollBy(0, Math.max(-18, Math.min(18, (below - above) / 3)));
      updateTarget();
    }
    animation.current = requestAnimationFrame(autoScroll);
  }

  function dropProps(item: Item) {
    return {
      "data-reorder-section": item.sectionId,
      "data-block-index": item.blockIndex,
      "data-dragging": source?.sectionId === item.sectionId && source.blockIndex === item.blockIndex || undefined,
      "data-drop-edge": target && target.item.sectionId === item.sectionId && target.item.blockIndex === item.blockIndex
        ? target.after ? "bottom" : "top" : undefined,
    };
  }

  function handle(item: Item, label: string) {
    function begin(event: PointerEvent<HTMLSpanElement>) {
      if (event.button !== 0 || !event.isPrimary) return;
      event.preventDefault();
      event.currentTarget.setPointerCapture(event.pointerId);
      pointer.current = { id: event.pointerId, source: item, x: event.clientX, y: event.clientY };
      toolbarBottom.current = event.currentTarget.closest(".project-editor")?.querySelector(".editor-actions")?.getBoundingClientRect().height ?? 0;
      setSource(item);
      animation.current = requestAnimationFrame(autoScroll);
    }
    return <span className="editor-drag-handle" title={`Drag to move ${label}`} aria-hidden="true"
      onPointerDown={begin} onPointerMove={event => {
        const drag = pointer.current;
        if (!drag || event.pointerId !== drag.id) return;
        drag.x = event.clientX;
        drag.y = event.clientY;
        updateTarget();
      }} onPointerUp={event => {
        const drag = pointer.current;
        if (!drag || event.pointerId !== drag.id) return;
        const next = hitTest(drag.source, event.clientX, event.clientY);
        finish();
        if (next) onChange(reorder(sections, drag.source, next));
      }} onLostPointerCapture={() => { if (pointer.current) finish(); }}>⠿</span>;
  }
  function arrow(item: Item, direction: -1 | 1, label: string) {
    const index = sections.findIndex(section => section.id === item.sectionId);
    const blocks = sections[index].blocks;
    const adjacent = sections[index + direction];
    let dest: Item | undefined;
    if (item.blockIndex === undefined) {
      if (adjacent) dest = { sectionId: adjacent.id };
    } else if (blocks[item.blockIndex + direction]) {
      dest = { ...item, blockIndex: item.blockIndex + direction };
    } else if (adjacent) {
      dest = { sectionId: adjacent.id, blockIndex: direction < 0 ? adjacent.blocks.length - 1 : 0 };
    }
    // At a section boundary, put the block at the nearest end of the adjoining section.
    const after = item.blockIndex !== undefined && dest?.sectionId !== item.sectionId ? direction < 0 : direction > 0;
    const next = dest && { item: dest, after };
    const name = `Move ${label} ${direction < 0 ? "up" : "down"}`;
    return <button type="button" disabled={!next || !canMove(sections, item, next)} aria-label={name} title={name}
      onClick={() => { if (next) onChange(reorder(sections, item, next)); }}>{direction < 0 ? "↑" : "↓"}</button>;
  }
  function controls(item: Item, label: string) {
    return <div className="editor-order-controls">{handle(item, label)}{arrow(item, -1, label)}{arrow(item, 1, label)}</div>;
  }
  return { controls, dropProps };
}
