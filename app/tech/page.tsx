import TechStackGrid from "@/components/sections/TechStackGrid";

export const metadata = {
  title: "Tech Stack - Mahran",
  description:
    "Technologies and tools Mohamed Mahran uses to build intelligent systems.",
};

export default function TechStack() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <TechStackGrid />
    </div>
  );
}
