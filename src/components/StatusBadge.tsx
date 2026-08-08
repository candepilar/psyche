import type { ProjectStatus } from "@/data/projects";

const LABELS: Record<ProjectStatus, string> = {
  idea: "Idea",
  "en-progreso": "En progreso",
  terminado: "Terminado",
};

const STYLES: Record<ProjectStatus, string> = {
  idea: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  "en-progreso": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  terminado: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${STYLES[status]}`}
    >
      {LABELS[status]}
    </span>
  );
}
