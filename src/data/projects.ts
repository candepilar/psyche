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
    learnings: [
      "Geometrías procedurales y ruido (simplex noise) para texturas orgánicas",
      "React Three Fiber: Canvas, luces, materiales y OrbitControls",
      "Anatomía básica: hemisferios, fisura longitudinal y tronco encefálico",
    ],
  },
  {
    slug: "psyche",
    title: "Psyche",
    summary: "Esta misma página: una bitácora de proyectos para registrar lo que voy aprendiendo.",
    description:
      "Un sitio simple armado con Next.js para ir documentando cada proyecto nuevo que hago mientras aprendo a programar: qué construí, con qué tecnologías y qué aprendí en el camino.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "en-progreso",
    date: "2026-08",
    learnings: [
      "App Router y rutas dinámicas de Next.js 16",
      "Tailwind CSS v4 con theming basado en variables",
    ],
  },
];
