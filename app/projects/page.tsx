import ProjectsHero from "@/components/sections/ProjectsHero";
import ProjectsGrid from "@/components/sections/ProjectsGrid";

export const metadata = {
  title: "Projects - Mahran",
  description:
    "Explore Mohamed Mahran's portfolio of full-stack, AI, and cloud projects.",
};

export default function Projects() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGrid />
    </>
  );
}
