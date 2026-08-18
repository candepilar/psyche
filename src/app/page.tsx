import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { categories } from "@/data/categories";
import { getProjectsByCategory, getUncategorizedProjects } from "@/lib/projects";
import { getTemasByCategoria } from "@/lib/temas";

export default function Home() {
  const uncategorized = getUncategorizedProjects();

  return (
    <main className="mx-auto flex max-w-3xl flex-1 flex-col gap-10 px-6 py-12">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold tracking-tight">
          Voy aprendiendo a programar, proyecto por proyecto.
        </h1>
        <p className="text-foreground/70">
          Cada tarjeta es algo que construí para aprender una tecnología o
          resolver un problema puntual, organizado por tema. Se va sumando
          con el tiempo.
        </p>
        <nav className="flex flex-wrap gap-2 pt-1">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`#${category.slug}`}
              className="rounded-full bg-foreground/5 px-3 py-1 text-xs text-foreground/70 hover:bg-foreground/10"
            >
              {category.name}
            </Link>
          ))}
        </nav>
      </div>

      {categories.map((category) => {
        const categoryProjects = getProjectsByCategory(category.slug);
        const temasCount = getTemasByCategoria(category.slug).length;
        return (
          <section key={category.slug} id={category.slug} className="scroll-mt-20">
            <div className="mb-4 flex items-center gap-3">
              <h2 className="text-lg font-medium tracking-tight">{category.name}</h2>
              {temasCount > 0 && (
                <Link
                  href={`/${category.slug}`}
                  className="text-xs text-foreground/50 hover:text-foreground/80 hover:underline"
                >
                  ver apuntes ({temasCount}) →
                </Link>
              )}
            </div>
            {categoryProjects.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {categoryProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            ) : (
              <p className="rounded-xl border border-dashed border-black/10 px-4 py-6 text-sm text-foreground/50 dark:border-white/10">
                Todavía no hay proyectos acá — pronto.
              </p>
            )}
          </section>
        );
      })}

      {uncategorized.length > 0 && (
        <section>
          <h2 className="mb-4 text-lg font-medium tracking-tight">Otros</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {uncategorized.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
