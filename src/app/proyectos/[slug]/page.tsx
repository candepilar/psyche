import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVisual } from "@/components/ProjectVisual";
import { StatusBadge } from "@/components/StatusBadge";
import { getProjectBySlug, getProjects } from "@/lib/projects";

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(props: PageProps<"/proyectos/[slug]">) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  return { title: project ? `${project.title} — psyche` : "Proyecto no encontrado" };
}

export default async function ProjectPage(props: PageProps<"/proyectos/[slug]">) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto flex max-w-3xl flex-1 flex-col gap-8 px-6 py-12">
      <Link href="/" className="text-sm text-foreground/60 hover:underline">
        ← volver
      </Link>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold tracking-tight">{project.title}</h1>
          <StatusBadge status={project.status} />
        </div>
        <p className="text-foreground/70">{project.description}</p>
      </div>

      {project.visual && <ProjectVisual visual={project.visual} />}

      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-foreground/5 px-2.5 py-1 text-xs text-foreground/70"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.learnings.length > 0 && (
        <div className="flex flex-col gap-2">
          <h2 className="text-sm font-medium text-foreground/60">Qué aprendí</h2>
          <ul className="list-inside list-disc text-foreground/80">
            {project.learnings.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {(project.repoUrl || project.demoUrl) && (
        <div className="flex gap-4 pt-2 text-sm font-medium">
          {project.repoUrl && (
            <a href={project.repoUrl} className="underline">
              Repositorio
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} className="underline">
              Demo
            </a>
          )}
        </div>
      )}
    </main>
  );
}
