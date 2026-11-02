import type { ProjectStatus } from "@/content/types";

export default function ProjectStatusBadge({ status }: { status: ProjectStatus }) {
  return <span className="status" data-status={status}><span aria-hidden="true" />{status}</span>;
}
