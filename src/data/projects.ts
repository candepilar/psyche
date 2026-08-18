import type { CategorySlug } from "@/data/categories";

export type ProjectStatus = "idea" | "en-progreso" | "terminado";

export type ProjectVisual = "brain-3d" | "neural-net";

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
  temasRelacionados?: string[];
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
    temasRelacionados: ["teoria-celular", "genetica", "procesos", "partes-sistema-nervioso", "desarrollo-sistema-nervioso"],
    learnings: [
      "Geometrías procedurales y ruido (simplex noise) para texturas orgánicas",
      "React Three Fiber: Canvas, luces, materiales y OrbitControls",
      "Anatomía básica: hemisferios, fisura longitudinal y tronco encefálico",
    ],
  },
  {
    slug: "red-neuronal-desde-cero",
    title: "Red neuronal desde cero",
    summary: "Un perceptrón multicapa escrito a mano en TypeScript, sin ninguna librería de ML, entrenándose en vivo.",
    description:
      "El ejercicio que estaba anotado en la ruta de IA: escribir el forward pass y el backpropagation a mano, sin frameworks, para entender de verdad cómo aprende una red neuronal. Se entrena en el navegador sobre datasets 2D (círculos, XOR, espirales) y el límite de decisión se dibuja en tiempo real mientras baja el error.",
    stack: ["TypeScript", "Canvas API", "React"],
    status: "en-progreso",
    date: "2026-08",
    visual: "neural-net",
    category: "ia",
    temasRelacionados: ["matematica-ml-clasico", "deep-learning-llms"],
    learnings: [
      "Backpropagation y regla de la cadena, implementados a mano capa por capa",
      "Por qué sigmoide + entropía cruzada binaria simplifican el gradiente de salida a (predicción − real)",
      "Cómo la capacidad de la red (neuronas por capa) determina si puede separar datos como las espirales",
    ],
  },
];
