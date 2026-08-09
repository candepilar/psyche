"use client";

import dynamic from "next/dynamic";
import type { ProjectVisual as ProjectVisualKind } from "@/data/projects";

const Brain3D = dynamic(() => import("@/components/Brain3D").then((mod) => mod.Brain3D), {
  ssr: false,
  loading: () => (
    <div className="h-80 w-full animate-pulse rounded-xl border border-black/10 bg-foreground/5 dark:border-white/10" />
  ),
});

const VISUALS: Record<ProjectVisualKind, React.ComponentType> = {
  "brain-3d": Brain3D,
};

export function ProjectVisual({ visual }: { visual: ProjectVisualKind }) {
  const Component = VISUALS[visual];
  return <Component />;
}
