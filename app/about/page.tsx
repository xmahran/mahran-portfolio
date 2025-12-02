import AboutHero from "@/components/sections/AboutHero";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";

export const metadata = {
  title: "About - Mahran",
  description:
    "Learn about Mohamed Mahran's journey, experience, and passion for building intelligent systems.",
};

export default function About() {
  return (
    <>
      <AboutHero />
      <ExperienceTimeline />
    </>
  );
}
