import type { CategorySlug } from "@/data/categories";
import { temas, type Tema } from "@/data/temas";

export function getTemas(): Tema[] {
  return temas;
}

export function getTemaBySlug(slug: string): Tema | undefined {
  return temas.find((tema) => tema.slug === slug);
}

export function getTemasByCategoria(categoria: CategorySlug): Tema[] {
  return temas.filter((tema) => tema.categoria === categoria);
}

export function getPartesByCategoria(categoria: CategorySlug): { parte: string; temas: Tema[] }[] {
  const categoriaTemas = getTemasByCategoria(categoria);
  const partes: { parte: string; temas: Tema[] }[] = [];

  for (const tema of categoriaTemas) {
    let grupo = partes.find((p) => p.parte === tema.parte);
    if (!grupo) {
      grupo = { parte: tema.parte, temas: [] };
      partes.push(grupo);
    }
    grupo.temas.push(tema);
  }

  return partes;
}
