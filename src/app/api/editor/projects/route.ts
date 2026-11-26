import { authorizeEditorRequest, createProjectEditor, editorErrorResponse } from "@/lib/project-editor";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    authorizeEditorRequest(request);
    return Response.json({ projects: await createProjectEditor().list() }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) { return editorErrorResponse(error); }
}
