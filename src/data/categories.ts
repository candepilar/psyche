export type CategorySlug =
  | "biologia"
  | "estadistica"
  | "psicologia-intro"
  | "psicolinguistica"
  | "teologia"
  | "psicologia-evolutiva";

export type Category = {
  slug: CategorySlug;
  name: string;
};

export const categories: Category[] = [
  { slug: "biologia", name: "Biología" },
  { slug: "estadistica", name: "Estadística" },
  { slug: "psicologia-intro", name: "Introducción a la Psicología" },
  { slug: "psicolinguistica", name: "Psicolingüística" },
  { slug: "teologia", name: "Teología" },
  { slug: "psicologia-evolutiva", name: "Psicología Evolutiva" },
];
