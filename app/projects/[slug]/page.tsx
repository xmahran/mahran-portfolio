import { notFound } from "next/navigation";
import ProjectDetail from "@/components/sections/ProjectDetail";
import { projects } from "@/lib/content";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Normalize metrics to ensure all values are strings
  const normalizedProject = {
    ...project,
    metrics: Object.fromEntries(
      Object.entries(project.metrics).map(([key, value]) => [key, value || ""])
    ) as Record<string, string>,
  };

  return <ProjectDetail project={normalizedProject} />;
}
