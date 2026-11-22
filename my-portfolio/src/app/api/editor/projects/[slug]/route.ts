import { authorizeEditorRequest, createProjectEditor, editorErrorResponse, readEditorPayload } from "@/lib/project-editor";

type Context = { params: Promise<{ slug: string }> };
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request, { params }: Context) {
  try {
    authorizeEditorRequest(request);
    return Response.json(await createProjectEditor().read((await params).slug), { headers: { "Cache-Control": "no-store" } });
  } catch (error) { return editorErrorResponse(error); }
}

export async function PUT(request: Request, { params }: Context) {
  try {
    authorizeEditorRequest(request, true);
    const payload = await readEditorPayload(request);
    return Response.json(await createProjectEditor().save((await params).slug, payload), { headers: { "Cache-Control": "no-store" } });
  } catch (error) { return editorErrorResponse(error); }
}
