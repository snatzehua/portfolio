import { authorizeEditorRequest, createProjectEditor, editorErrorResponse, readEditorImage } from "@/lib/project-editor";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  try {
    authorizeEditorRequest(request, "image");
    const image = await createProjectEditor().uploadImage((await params).slug, await readEditorImage(request));
    return Response.json(image, { status: 201, headers: { "Cache-Control": "no-store" } });
  } catch (error) { return editorErrorResponse(error); }
}
