import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, type CategorySlug } from "@/data/categories";
import { getPartesByCategoria } from "@/lib/temas";

export function generateStaticParams() {
  return categories.map((category) => ({ categoria: category.slug }));
}

function isCategorySlug(value: string): value is CategorySlug {
  return categories.some((category) => category.slug === value);
}

export async function generateMetadata(props: PageProps<"/[categoria]">) {
  const { categoria } = await props.params;
  const category = categories.find((c) => c.slug === categoria);
  return { title: category ? `${category.name} — psyche` : "Categoría no encontrada" };
}

export default async function CategoriaPage(props: PageProps<"/[categoria]">) {
  const { categoria } = await props.params;

  if (!isCategorySlug(categoria)) {
    notFound();
  }

  const category = categories.find((c) => c.slug === categoria)!;
  const partes = getPartesByCategoria(categoria);

  return (
    <main className="mx-auto flex max-w-3xl flex-1 flex-col gap-10 px-6 py-12">
      <div className="flex flex-col gap-3">
        <Link href="/" className="text-sm text-foreground/60 hover:underline">
          ← volver
        </Link>
        <h1 className="text-2xl font-semibold tracking-tight">{category.name}</h1>
      </div>

      {partes.length > 0 ? (
        partes.map((grupo) => (
          <div key={grupo.parte} className="flex flex-col gap-3">
            <h2 className="text-xs font-medium uppercase tracking-wide text-foreground/50">
              {grupo.parte}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {grupo.temas.map((tema) => (
                <Link
                  key={tema.slug}
                  href={`/${categoria}/${tema.slug}`}
                  className="flex flex-col gap-1.5 rounded-xl border border-black/10 p-4 transition hover:border-black/25 dark:border-white/10 dark:hover:border-white/25"
                >
                  <h3 className="font-medium">{tema.titulo}</h3>
                  <p className="text-sm text-foreground/70">{tema.resumen}</p>
                </Link>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className="rounded-xl border border-dashed border-black/10 px-4 py-6 text-sm text-foreground/50 dark:border-white/10">
          Todavía no hay apuntes acá — pronto.
        </p>
      )}
    </main>
  );
}
