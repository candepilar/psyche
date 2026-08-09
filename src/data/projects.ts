import type { CategorySlug } from "@/data/categories";

export type ProjectStatus = "idea" | "en-progreso" | "terminado";

export type ProjectVisual = "brain-3d";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  stack: string[];
  status: ProjectStatus;
  date: string; // YYYY-MM
  repoUrl?: string;
  demoUrl?: string;
  learnings: string[];
  visual?: ProjectVisual;
  category?: CategorySlug;
};

export const projects: Project[] = [
  {
    slug: "cerebro-3d",
    title: "Cerebro 3D",
    summary: "Un cerebro humano generado de forma procedural y renderizado en 3D en el navegador.",
    description:
      "Repaso de biología (hemisferios cerebrales, corteza, tronco encefálico) mientras aprendo gráficos 3D en la web: geometría generada por código, ruido para simular los pliegues de la corteza y una escena interactiva que se puede rotar con el mouse.",
    stack: ["Next.js", "Three.js", "React Three Fiber"],
    status: "en-progreso",
    date: "2026-08",
    visual: "brain-3d",
    category: "biologia",
    learnings: [
      "Geometrías procedurales y ruido (simplex noise) para texturas orgánicas",
      "React Three Fiber: Canvas, luces, materiales y OrbitControls",
      "Anatomía básica: hemisferios, fisura longitudinal y tronco encefálico",
    ],
  },
];
