import { ProjectCard } from "@/components/ProjectCard";
import { getProjects } from "@/lib/projects";

export default function Home() {
  const projects = getProjects();

  return (
    <main className="mx-auto flex max-w-3xl flex-1 flex-col gap-10 px-6 py-12">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold tracking-tight">
          Voy aprendiendo a programar, proyecto por proyecto.
        </h1>
        <p className="text-foreground/70">
          Cada tarjeta es algo que construí para aprender una tecnología o
          resolver un problema puntual. Se va sumando con el tiempo.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
