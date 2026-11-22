import { createHash, randomUUID } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";
import { isDeepStrictEqual } from "node:util";
import type { ArticleSection, ContentBlock, Project } from "@/content/types";
import { isYearOnlyProjectPeriod } from "../content/project-dates";

const MAX_BODY_BYTES = 1024 * 1024;
const mutableFields = new Set(["title", "summary", "period", "role", "outcome", "status", "tags", "sections"]);
const statuses = new Set(["In progress", "Completed", "Paused", "Archived"]);
const idPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const sourcePattern = /^\s*import type \{ Project \} from ["']\.\.\/types["'];\s*const project: Project = ([\s\S]+);\s*export default project;\s*$/;

export class ProjectEditorError extends Error {
  constructor(public status: number, message: string) { super(message); this.name = "ProjectEditorError"; }
}
function fail(status: number, message: string): never { throw new ProjectEditorError(status, message); }
function object(value: unknown, label: string): asserts value is Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) fail(400, `${label} must be an object.`);
}
function keys(value: Record<string, unknown>, allowed: string[], label: string) {
  if (Object.keys(value).some(key => !allowed.includes(key))) fail(400, `${label} has unsupported fields.`);
}
function text(value: unknown, label: string, maximum: number, optional = false): asserts value is string {
  if (optional && value === undefined) return;
  if (typeof value !== "string" || !value.trim() || value.length > maximum) fail(400, `${label} must contain 1–${maximum} characters.`);
}
function rejectUnsafeKeys(value: unknown) {
  if (!value || typeof value !== "object") return;
  for (const [key, child] of Object.entries(value)) {
    if (["__proto__", "constructor", "prototype"].includes(key)) fail(400, "Unsupported content field.");
    rejectUnsafeKeys(child);
  }
}
function revision(source: string) { return createHash("sha256").update(source).digest("hex"); }
function parseSource(source: string): Project {
  const match = sourcePattern.exec(source);
  if (!match) fail(500, "This project uses an unsupported source format. Edit it in the source file first.");
  try {
    const project: unknown = JSON.parse(match[1]);
    object(project, "Project");
    if (typeof project.slug !== "string" || !idPattern.test(project.slug) || typeof project.title !== "string" || !Array.isArray(project.sections)) throw new Error("Invalid project");
    return project as unknown as Project;
  } catch { return fail(500, "The project source could not be read as JSON. No changes were made."); }
}
function assets(section: ArticleSection) { return section.blocks.filter(block => block.type === "image" || block.type === "diagram"); }

export function validateProjectUpdate(incoming: unknown, original: Project): Project {
  rejectUnsafeKeys(incoming);
  object(incoming, "Project");
  const oldImmutable = Object.fromEntries(Object.entries(original).filter(([key]) => !mutableFields.has(key)));
  const newImmutable = Object.fromEntries(Object.entries(incoming).filter(([key]) => !mutableFields.has(key)));
  if (!isDeepStrictEqual(newImmutable, oldImmutable)) fail(400, "Project identity, publication date, links and cover images cannot be changed here.");
  for (const [key, max] of [["title", 200], ["summary", 3000], ["period", 200], ["role", 500], ["outcome", 5000]] as const) text(incoming[key], key, max);
  if (!isYearOnlyProjectPeriod(incoming.period)) fail(400, "Use a year or an ascending year range for the period, such as 2026 or 2025–2026.");
  if (typeof incoming.status !== "string" || !statuses.has(incoming.status)) fail(400, "Choose a valid project status.");
  if (!Array.isArray(incoming.tags) || incoming.tags.length > 40) fail(400, "Use at most 40 tags.");
  incoming.tags.forEach(tag => text(tag, "Tag", 100));
  if (!Array.isArray(incoming.sections) || incoming.sections.length < 1 || incoming.sections.length > 80) fail(400, "Keep between 1 and 80 sections.");
  const ids = new Set<string>();
  for (const section of incoming.sections) {
    object(section, "Section"); keys(section, ["id", "title", "navTitle", "blocks"], "Section");
    text(section.id, "Section ID", 100);
    if (!idPattern.test(section.id) || ids.has(section.id)) fail(400, "Section IDs must be unique lowercase words separated by hyphens.");
    ids.add(section.id);
    text(section.title, "Section title", 300); text(section.navTitle, "Navigation label", 40, true);
    if (!Array.isArray(section.blocks) || section.blocks.length < 1 || section.blocks.length > 100) fail(400, "Each section needs between 1 and 100 paragraphs or media blocks.");
    for (const block of section.blocks) {
      object(block, "Content block");
      if (block.type === "text" || block.type === "latex") {
        keys(block, block.type === "text" ? ["type", "content"] : ["type", "content", "caption"], "Text block");
        text(block.content, "Paragraph", 50000); text(block.caption, "Math caption", 3000, true);
      } else if (block.type !== "image" && block.type !== "diagram") fail(400, "Unsupported content block.");
    }
    const previous = original.sections.find(item => item.id === section.id);
    const currentAssets = (section.blocks as ContentBlock[]).filter(block => block.type === "image" || block.type === "diagram");
    if (!isDeepStrictEqual(currentAssets, previous ? assets(previous) : [])) fail(400, "Existing images and diagrams must stay unchanged in their section.");
  }
  for (const previous of original.sections) if (assets(previous).length && !ids.has(previous.id)) fail(400, "A section containing images or diagrams cannot be deleted here.");
  return incoming as unknown as Project;
}

export function authorizeEditorRequest(request: Request, mutation = false, environment = process.env.NODE_ENV) {
  if (environment !== "development") fail(404, "Not found.");
  const url = new URL(request.url);
  const host = request.headers.get("host");
  if (!host || !/^(?:localhost|127\.0\.0\.1|\[::1\])(?::\d{1,5})?$/i.test(host) || !["http:", "https:"].includes(url.protocol) || !["localhost", "127.0.0.1", "[::1]"].includes(url.hostname.toLowerCase())) fail(403, "The editor is available on localhost only.");
  // Next can normalize request.url to localhost even when the browser used 127.0.0.1.
  // The actual Host must still be loopback; Origin must match that exact browser origin.
  let browserOrigin: string;
  try { browserOrigin = new URL(`${url.protocol}//${host}`).origin; }
  catch { return fail(403, "The editor is available on localhost only."); }
  if (request.headers.has("origin") && request.headers.get("origin") !== browserOrigin) fail(403, "Open the editor from this local site.");
  if (mutation) {
    if (request.headers.get("origin") !== browserOrigin) fail(403, "Save from the local editor page.");
    if (request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !== "application/json") fail(415, "Send application/json.");
    const size = request.headers.get("content-length");
    if (size !== null && (!/^\d+$/.test(size) || Number(size) > MAX_BODY_BYTES)) fail(413, "This project is too large to save in the editor.");
  }
}

export async function readEditorPayload(request: Request): Promise<unknown> {
  const reader = request.body?.getReader();
  if (!reader) fail(400, "Missing project data.");
  let size = 0;
  const chunks: Uint8Array[] = [];
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BODY_BYTES) { await reader.cancel(); fail(413, "This project is too large to save in the editor."); }
      chunks.push(value);
    }
    return JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch (error) {
    if (error instanceof ProjectEditorError) throw error;
    return fail(400, "Invalid JSON project data.");
  } finally { reader.releaseLock(); }
}

export function createProjectEditor(rootDirectory = process.cwd(), environment = process.env.NODE_ENV) {
  const directory = path.join(rootDirectory, "src/content/projects");
  const backupDirectory = path.join(rootDirectory, ".local-content-backups");
  function enabled() { if (environment !== "development") fail(404, "Not found."); }
  async function inventory() {
    enabled();
    const canonical = await fs.realpath(directory);
    const entries = await fs.readdir(directory, { withFileTypes: true });
    const records: { filename: string; source: string; project: Project }[] = [];
    for (const entry of entries) {
      if (!entry.isFile() || entry.name === "index.ts" || !/^[a-z0-9-]+\.ts$/.test(entry.name)) continue;
      const filename = path.join(directory, entry.name);
      if (path.dirname(await fs.realpath(filename)) !== canonical) fail(400, "Project path is outside the content directory.");
      const source = await fs.readFile(filename, "utf8");
      const project = parseSource(source);
      if (records.some(record => record.project.slug === project.slug)) fail(500, "Duplicate project identity.");
      records.push({ filename, source, project });
    }
    return records;
  }
  async function record(slug: string) {
    enabled();
    if (!idPattern.test(slug) || slug.length > 100) fail(404, "Project not found.");
    const value = (await inventory()).find(item => item.project.slug === slug);
    if (!value) fail(404, "Project not found.");
    return value;
  }
  return {
    async list() { return (await inventory()).map(({ project }) => ({ slug: project.slug, title: project.title })).sort((a, b) => a.title.localeCompare(b.title)); },
    async read(slug: string) { const item = await record(slug); return { project: item.project, revision: revision(item.source) }; },
    async save(slug: string, payload: unknown) {
      const item = await record(slug);
      object(payload, "Save request"); keys(payload, ["project", "revision"], "Save request");
      if (typeof payload.revision !== "string" || !/^[a-f0-9]{64}$/.test(payload.revision)) fail(400, "Missing project revision. Reload the project first.");
      await fs.mkdir(backupDirectory, { recursive: true, mode: 0o700 });
      const backupInfo = await fs.lstat(backupDirectory);
      if (!backupInfo.isDirectory() || backupInfo.isSymbolicLink()) fail(400, "The backup directory must be a local directory.");
      const lockFilename = path.join(backupDirectory, `${path.basename(item.filename)}.lock`);
      let lock;
      try { lock = await fs.open(lockFilename, "wx", 0o600); }
      catch (error) { if ((error as NodeJS.ErrnoException).code === "EEXIST") fail(409, "Another save is in progress. Try again."); throw error; }
      let temporary: string | undefined;
      try {
        // Re-read inside the cross-process lock. No stale browser save overwrites a VS Code save.
        const currentSource = await fs.readFile(item.filename, "utf8");
        if (revision(currentSource) !== payload.revision) fail(409, "This project changed since you opened it. Reload before saving; your draft has not been saved.");
        const current = parseSource(currentSource);
        const project = validateProjectUpdate(payload.project, current);
        const output = `import type { Project } from "../types";\n\nconst project: Project = ${JSON.stringify(project, null, 2)};\n\nexport default project;\n`;
        const token = `${new Date().toISOString().replace(/[:.]/g, "-")}-${randomUUID()}`;
        const backup = path.join(backupDirectory, `${current.slug}-${token}.ts.bak`);
        await fs.writeFile(backup, currentSource, { flag: "wx", mode: 0o600 });
        temporary = path.join(directory, `.${path.basename(item.filename)}-${token}.tmp`);
        await fs.writeFile(temporary, output, { flag: "wx", mode: 0o600 });
        if (revision(await fs.readFile(item.filename, "utf8")) !== payload.revision) fail(409, "The source changed during this save. Reload before saving again.");
        await fs.rename(temporary, item.filename); temporary = undefined;
        return { project, revision: revision(output) };
      } finally {
        if (temporary) await fs.unlink(temporary).catch(() => {});
        await lock.close();
        await fs.unlink(lockFilename).catch(() => {});
      }
    },
  };
}

export function editorErrorResponse(error: unknown) {
  const known = error instanceof ProjectEditorError;
  return Response.json({ error: known ? error.message : "The editor could not complete this request. No successful save was confirmed." }, { status: known ? error.status : 500, headers: { "Cache-Control": "no-store" } });
}
