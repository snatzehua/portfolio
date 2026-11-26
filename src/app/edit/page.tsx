import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectEditor from "@/components/editor/project-editor";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Edit projects | Kieran Ho", robots: { index: false, follow: false } };

export default function EditPage() {
  if (process.env.NODE_ENV !== "development") notFound();
  return <ProjectEditor />;
}
