"use client";

import Link from "next/link";
import { projectPath } from "@/content/project-path";
import { useEffect, useRef, useState } from "react";
import ArticlePage from "@/components/article/article-page";
import { projectCover } from "@/content/project-covers";
import type { ArticleSection, ContentBlock, Project } from "@/content/types";
import { isYearOnlyProjectPeriod } from "@/content/project-dates";
import { hasFullProjectWriteup } from "@/content/project-writeups";
import "./project-editor.css";

type ProjectOption = { slug: string; title: string };
type Document = { project: Project; revision: string };
const preferred = ["crop-yield-research", "please-help-me", "careersphere"];
const clone = <T,>(value: T): T => JSON.parse(JSON.stringify(value));
const hasMedia = (section: ArticleSection) => section.blocks.some(block => block.type !== "text" && block.type !== "latex");

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(path, { cache: "no-store", ...options });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw Object.assign(new Error(body.error ?? `Request failed (${response.status}).`), { status: response.status });
  return body;
}

export default function ProjectEditor() {
  const [options, setOptions] = useState<ProjectOption[]>([]);
  const [document, setDocument] = useState<Document>();
  const [draft, setDraft] = useState<Project>();
  const [tagsText, setTagsText] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [conflict, setConflict] = useState(false);
  const [mobileView, setMobileView] = useState<"edit" | "preview">("edit");
  const loadSequence = useRef(0);
  const editor = useRef<HTMLDivElement>(null);
  const toolbar = useRef<HTMLDivElement>(null);
  const dirty = !!draft && !!document && JSON.stringify(draft) !== JSON.stringify(document.project);

  useEffect(() => {
    const element = toolbar.current;
    if (!element) return;
    const update = () => editor.current?.style.setProperty("--editor-toolbar-height", `${element.getBoundingClientRect().height}px`);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  async function load(slug: string) {
    const sequence = ++loadSequence.current;
    setLoading(true); setError(""); setNotice(""); setConflict(false);
    try {
      const result = await request<Document>(`/api/editor/projects/${encodeURIComponent(slug)}`);
      if (sequence !== loadSequence.current) return;
      setDocument(result); setDraft(clone(result.project)); setTagsText(result.project.tags.join(", "));
      const url = new URL(window.location.href); url.searchParams.set("project", slug);
      window.history.replaceState(null, "", url);
    } catch (reason) {
      if (sequence === loadSequence.current) setError((reason as Error).message);
    } finally { if (sequence === loadSequence.current) setLoading(false); }
  }

  useEffect(() => {
    let active = true;
    const pendingLoads = loadSequence;
    request<{ projects: ProjectOption[] }>("/api/editor/projects").then(result => {
      if (!active) return;
      const sorted = [...result.projects].sort((a, b) => {
        const ai = preferred.indexOf(a.slug), bi = preferred.indexOf(b.slug);
        return (ai < 0 ? 99 : ai) - (bi < 0 ? 99 : bi) || a.title.localeCompare(b.title);
      });
      setOptions(sorted);
      const requested = new URLSearchParams(window.location.search).get("project");
      const first = sorted.find(item => item.slug === requested) ?? sorted[0];
      if (first) void load(first.slug); else { setError("No projects were found."); setLoading(false); }
    }).catch(reason => { if (active) { setError(reason.message); setLoading(false); } });
    return () => { active = false; pendingLoads.current++; };
  }, []);

  useEffect(() => {
    if (!dirty) return;
    const guard = (event: BeforeUnloadEvent) => { event.preventDefault(); event.returnValue = ""; };
    const guardNavigation = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest("a") : null;
      if (!target || target.target === "_blank" || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const href = target.getAttribute("href");
      if (!href || href.startsWith("#")) return;
      if (!window.confirm("You have unsaved changes. Leave this editor without saving?")) { event.preventDefault(); event.stopPropagation(); }
    };
    window.addEventListener("beforeunload", guard);
    window.document.addEventListener("click", guardNavigation, true);
    return () => { window.removeEventListener("beforeunload", guard); window.document.removeEventListener("click", guardNavigation, true); };
  }, [dirty]);

  function edit(change: Partial<Project>) { setDraft(current => current ? { ...current, ...change } : current); setNotice(""); }
  function editSection(index: number, change: Partial<ArticleSection>) {
    if (!draft) return;
    edit({ sections: draft.sections.map((section, i) => i === index ? { ...section, ...change } : section) });
  }
  function editBlock(sectionIndex: number, blockIndex: number, change: Partial<ContentBlock>) {
    if (!draft) return;
    const section = draft.sections[sectionIndex];
    editSection(sectionIndex, { blocks: section.blocks.map((block, i) => i === blockIndex ? { ...block, ...change } as ContentBlock : block) });
  }
  function moveSection(index: number, direction: -1 | 1) {
    if (!draft) return;
    const sections = [...draft.sections];
    [sections[index], sections[index + direction]] = [sections[index + direction], sections[index]];
    edit({ sections });
  }
  function addSection() {
    if (!draft) return;
    const id = `section-${crypto.randomUUID()}`;
    edit({ sections: [...draft.sections, { id, title: "New section", blocks: [{ type: "text", content: "[Draft]" }] }] });
  }
  function reload() {
    if (!document || (dirty && !window.confirm("Discard your unsaved changes and load the latest saved version?"))) return;
    void load(document.project.slug);
  }
  function downloadDraft() {
    if (!draft) return;
    const text = [`# ${draft.title}`, draft.summary, ...draft.sections.flatMap(section => [`## ${section.title}`, ...section.blocks.filter(block => block.type === "text" || block.type === "latex").map(block => block.content)])].join("\n\n");
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain;charset=utf-8" }));
    const link = window.document.createElement("a"); link.href = url; link.download = `${draft.slug}-draft.txt`; link.click(); URL.revokeObjectURL(url);
  }
  async function save() {
    if (!draft || !document || saving) return;
    if (!isYearOnlyProjectPeriod(draft.period)) {
      setError("Use a year or an ascending year range for the period, such as 2026 or 2025–2026.");
      return;
    }
    const submitted = clone(draft);
    setSaving(true); setError(""); setNotice("");
    try {
      const result = await request<Document>(`/api/editor/projects/${encodeURIComponent(document.project.slug)}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ project: submitted, revision: document.revision }) });
      setDocument(result);
      // Preserve typing that happens while the save is in flight.
      setDraft(current => JSON.stringify(current) === JSON.stringify(submitted) ? clone(result.project) : current);
      setOptions(current => current.map(item => item.slug === result.project.slug ? { ...item, title: result.project.title } : item));
      setConflict(false); setNotice("Saved. A backup of the previous version is available locally.");
    } catch (reason) {
      const failure = reason as Error & { status?: number };
      setConflict(failure.status === 409);
      setError(failure.status === 409 ? "This project changed outside the editor. Your draft is still here. Download it before loading the latest version, then combine your edits." : failure.message);
    } finally { setSaving(false); }
  }

  return <div className="project-editor" ref={editor}>
    <header className="editor-heading"><div><p className="editor-kicker">Local workspace</p><h1>Edit projects</h1><p>Write here and preview the page beside it. Images and diagrams stay in place.</p></div></header>
    <div className="editor-actions" ref={toolbar}>
      <label className="editor-project-select">Project<select aria-label="Project" value={document?.project.slug ?? ""} disabled={!options.length || loading || saving} onChange={event => { if (!dirty || window.confirm("Discard unsaved changes and switch projects?")) void load(event.target.value); }}>
        {!document && <option value="">Choose a project</option>}{options.map(option => <option key={option.slug} value={option.slug}>{option.title}</option>)}
      </select></label>
      <div className="editor-save-actions"><span className="editor-save-state" aria-live="polite">{saving ? "Saving…" : dirty ? "Unsaved changes" : document ? "All changes saved" : ""}</span><button type="button" className="editor-primary-button" disabled={!dirty || loading || saving || conflict} onClick={save}>{saving ? "Saving…" : "Save changes"}</button>{document && <Link href={projectPath(document.project)} target="_blank" rel="noopener noreferrer">Open saved page ↗</Link>}</div>
    </div>
    {error && <div role="alert" className="editor-error"><p>{error}</p>{conflict && <div className="editor-inline-actions"><button type="button" onClick={downloadDraft}>Download my draft</button><button type="button" onClick={reload}>Load latest saved version</button></div>}</div>}
    {notice && <p role="status" className="editor-notice">{notice}</p>}
    <div className="editor-view-switch" role="group" aria-label="Editor view"><button type="button" aria-pressed={mobileView === "edit"} onClick={() => setMobileView("edit")}>Edit</button><button type="button" aria-pressed={mobileView === "preview"} onClick={() => setMobileView("preview")}>Preview</button></div>
    {loading ? <p role="status" className="editor-loading">Loading project…</p> : draft && <div className={`editor-workspace editor-view-${mobileView}`}>
      <form className="editor-form" onSubmit={event => { event.preventDefault(); void save(); }} aria-label="Project writing editor">
        <section className="editor-form-section"><h2>Introduction</h2><label>Project title<input value={draft.title} maxLength={200} onChange={event => edit({ title: event.target.value })} /></label><label>Summary<textarea aria-label="Summary" rows={3} value={draft.summary} onChange={event => edit({ summary: event.target.value })} /></label></section>
        <details className="editor-project-details"><summary>Project details</summary><label>Your role<input value={draft.role} onChange={event => edit({ role: event.target.value })} /></label><label>Period · years only<input value={draft.period} placeholder="2026 or 2025–2026" maxLength={9} pattern="[0-9]{4}(–[0-9]{4})?" onChange={event => edit({ period: event.target.value })} /></label><label>Outcome<textarea aria-label="Outcome" rows={3} value={draft.outcome} onChange={event => edit({ outcome: event.target.value })} /></label><label>Topics, separated by commas<input value={tagsText} onChange={event => { setTagsText(event.target.value); edit({ tags: event.target.value.split(",").map(tag => tag.trim()).filter(Boolean) }); }} /></label></details>
        <div className="editor-sections-heading"><h2>Sections</h2><button type="button" onClick={addSection}>+ Add section</button></div>
        {draft.sections.map((section, sectionIndex) => <section key={section.id} className="editor-form-section editor-content-section" aria-label={`Edit section ${sectionIndex + 1}`}>
          <div className="editor-section-toolbar"><span>Section {sectionIndex + 1}</span><div><button type="button" aria-label={`Move section ${sectionIndex + 1} up`} disabled={sectionIndex === 0} onClick={() => moveSection(sectionIndex, -1)}>↑</button><button type="button" aria-label={`Move section ${sectionIndex + 1} down`} disabled={sectionIndex === draft.sections.length - 1} onClick={() => moveSection(sectionIndex, 1)}>↓</button><button type="button" disabled={hasMedia(section) || draft.sections.length === 1} title={hasMedia(section) ? "This section contains a preserved image or diagram." : undefined} onClick={() => { if (window.confirm("Remove this section and its text from the draft?")) edit({ sections: draft.sections.filter((_, i) => i !== sectionIndex) }); }}>Remove section</button></div></div>
          <label>Section heading<input value={section.title} onChange={event => editSection(sectionIndex, { title: event.target.value })} /></label>
          {section.blocks.map((block, blockIndex) => block.type === "text" || block.type === "latex" ? <div className="editor-paragraph" key={`${section.id}-${blockIndex}`}><label>{block.type === "latex" ? "Formula" : "Paragraph"}<textarea aria-label={block.type === "latex" ? "Formula" : "Paragraph"} rows={block.type === "latex" ? 3 : Math.min(14, Math.max(4, Math.ceil(block.content.length / 75)))} value={block.content} onChange={event => editBlock(sectionIndex, blockIndex, { content: event.target.value })} spellCheck={block.type !== "latex"} /></label><button type="button" className="editor-text-button" disabled={section.blocks.length === 1} onClick={() => editSection(sectionIndex, { blocks: section.blocks.filter((_, i) => i !== blockIndex) })}>Remove {block.type === "latex" ? "formula" : "paragraph"}</button></div> : <p className="editor-preserved-media" key={`${section.id}-${blockIndex}`}>{block.type === "image" ? "Image" : "Diagram"} preserved · no editing needed</p>)}
          <button type="button" onClick={() => editSection(sectionIndex, { blocks: [...section.blocks, { type: "text", content: "[Draft]" }] })}>+ Add paragraph</button>
        </section>)}
        <div className="editor-bottom-actions"><button type="button" className="editor-primary-button" disabled={!dirty || saving || conflict} onClick={save}>Save changes</button><button type="button" onClick={reload} disabled={saving}>Reload saved version</button><button type="button" onClick={downloadDraft}>Download draft</button></div>
      </form>
      <section className="editor-preview-panel" aria-label="Live project preview"><div className="editor-preview-heading"><h2>Live preview</h2><span>{hasFullProjectWriteup(draft.slug) ? "Unsaved changes appear here" : "Draft preview · public write-up is marked WIP"}</span></div><div className="editor-preview-scroll"><ArticlePage kind="projects" title={draft.title} intro={draft.summary} tags={draft.tags} sections={draft.sections} facts={[{ label: "Role", value: draft.role }, { label: "Period", value: draft.period }]} cover={projectCover(draft.cover, draft.coverAlt)} /></div></section>
    </div>}
  </div>;
}
