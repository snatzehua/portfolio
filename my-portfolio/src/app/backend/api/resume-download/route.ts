// app/api/resume/route.ts
import { NextResponse } from "next/server";

export const runtime = "nodejs"; // ensure Node runtime (not Edge)
export const dynamic = "force-dynamic"; // always run on request (no static cache)

export async function GET() {
  const driveUrl =
    "https://drive.google.com/uc?export=download&id=1Zvc8osQgFEsoJ2-tIw59-yqzby83imeV";

  const upstream = await fetch(driveUrl, {
    redirect: "follow",
    cache: "no-store",
  });
  if (!upstream.ok || !upstream.body) {
    return new NextResponse(`Upstream error ${upstream.status}`, {
      status: 502,
    });
  }

  // Format datetime as YYYYMMDD-HHmm
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  const datetime = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(
    now.getDate()
  )}-${pad(now.getHours())}${pad(now.getMinutes())}`;
  const filename = `kieran-ho-resume-${datetime}.pdf`;

  // Stream the file through without buffering it all in memory
  const headers = new Headers();
  headers.set("Content-Type", "application/pdf");
  headers.set("Content-Disposition", `attachment; filename="${filename}"`);
  headers.set("Cache-Control", "no-store");

  return new NextResponse(upstream.body, { status: 200, headers });
}
