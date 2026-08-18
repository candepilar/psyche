import Link from "next/link";
import { notFound } from "next/navigation";
import { getTemaBySlug, getTemas } from "@/lib/temas";
import { ConceptMap } from "@/components/ConceptMap";

export function generateStaticParams() {
  return getTemas().map((tema) => ({ categoria: tema.categoria, tema: tema.slug }));
}

export async function generateMetadata(props: PageProps<"/[categoria]/[tema]">) {
  const { categoria, tema: slug } = await props.params;
  const tema = getTemaBySlug(slug);
  if (!tema || tema.categoria !== categoria) {
    return { title: "Tema no encontrado" };
  }
  return { title: `${tema.titulo} — psyche` };
}

export default async function TemaPage(props: PageProps<"/[categoria]/[tema]">) {
  const { categoria, tema: slug } = await props.params;
  const tema = getTemaBySlug(slug);

  if (!tema || tema.categoria !== categoria) {
    notFound();
  }

  return (
    <main className="mx-auto flex max-w-3xl flex-1 flex-col gap-8 px-6 py-12">
      <Link href={`/${categoria}`} className="text-sm text-foreground/60 hover:underline">
        ← volver
      </Link>

      <div className="flex flex-col gap-3">
        <p className="text-xs font-medium tracking-wide text-foreground/50 uppercase">
          {tema.parte}
        </p>
        <h1 className="text-2xl font-semibold tracking-tight">{tema.titulo}</h1>
        <p className="text-foreground/70">{tema.resumen}</p>
      </div>

      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
        <ConceptMap root={tema.mapaConceptual} />
      </div>

      <div className="flex flex-col gap-8">
        {tema.secciones.map((seccion) => (
          <div key={seccion.titulo} className="flex flex-col gap-3">
            <h2 className="text-lg font-medium tracking-tight">{seccion.titulo}</h2>
            <ul className="flex flex-col gap-2 text-sm text-foreground/80">
              {seccion.contenido.map((parrafo, i) => (
                <li key={i} className="leading-relaxed">
                  {parrafo}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
