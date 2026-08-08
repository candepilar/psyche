import Link from "next/link";
import type { Project } from "@/data/projects";
import { StatusBadge } from "@/components/StatusBadge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/proyectos/${project.slug}`}
      className="group flex flex-col gap-3 rounded-xl border border-black/10 p-5 transition hover:border-black/25 dark:border-white/10 dark:hover:border-white/25"
    >
      <div className="flex items-start justify-between gap-3">
        <h2 className="font-medium group-hover:underline">{project.title}</h2>
        <StatusBadge status={project.status} />
      </div>
      <p className="text-sm text-foreground/70">{project.summary}</p>
      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-foreground/5 px-2.5 py-1 text-xs text-foreground/70"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
}
