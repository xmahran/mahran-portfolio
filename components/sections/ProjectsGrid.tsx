"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { projects } from "@/lib/content";
import { ExternalLink, ArrowRight } from "lucide-react";

const categories = ["All", "AI", "Web", "Cloud", "Research"];

export default function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-neon-blue text-dark-bg glow"
                  : "bg-dark-card text-gray-300 hover:bg-dark-border border border-dark-border"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className="glass rounded-2xl p-6 h-full flex flex-col cursor-pointer border border-dark-border hover:border-neon-blue transition-all duration-300 relative overflow-hidden">
                    {/* Category Badge */}
                    <span className="absolute top-6 right-6 px-3 py-1 text-xs font-mono bg-neon-blue text-dark-bg rounded-full">
                      {project.category}
                    </span>

                    {/* Featured Badge */}
                    {project.featured && (
                      <span className="absolute top-6 left-6 px-3 py-1 text-xs font-mono bg-neon-purple text-white rounded-full">
                        Featured
                      </span>
                    )}

                    {/* Content */}
                    <div className="mt-8">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack Preview */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack
                          .slice(0, 3)
                          .map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 text-xs font-mono bg-dark-bg border border-dark-border rounded text-gray-400"
                            >
                              {tech}
                            </span>
                          ))}
                        {project.techStack.length > 3 && (
                          <span className="px-2 py-1 text-xs font-mono text-gray-500">
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Link Indicator */}
                      <div className="flex items-center text-neon-blue group-hover:gap-2 transition-all">
                        <span className="text-sm font-medium">
                          View Details
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
