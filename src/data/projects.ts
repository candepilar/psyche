export type ProjectStatus = "idea" | "en-progreso" | "terminado";

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
};

export const projects: Project[] = [
  {
    slug: "anamnesis",
    title: "Anamnesis",
    summary: "Chat de paciente + dashboard de doctor con extracción estructurada por IA.",
    description:
      "Un MVP donde el paciente conversa con un chat y un doctor revisa un dashboard con la información extraída automáticamente. Sirvió para aprender a combinar Next.js con modelos de lenguaje para extracción de datos estructurados.",
    stack: ["Next.js", "TypeScript", "IA / LLM"],
    status: "en-progreso",
    date: "2026-08",
    learnings: [
      "Extracción estructurada con JSON schema estricto",
      "Diseño de UI con shadcn y tokens de tema",
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
