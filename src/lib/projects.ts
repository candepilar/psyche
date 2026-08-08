import { projects, type Project } from "@/data/projects";

export function getProjects(): Project[] {
  return [...projects].sort((a, b) => b.date.localeCompare(a.date));
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
