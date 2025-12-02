"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Button from "@/components/ui/Button";

interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  outcome: string;
  metrics: Record<string, string>;
  image: string;
}

export default function ProjectDetail({ project }: { project: Project }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-neon-blue transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </Link>

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-2 text-sm font-mono bg-neon-blue text-dark-bg rounded-full mb-6">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            {project.title}
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        {/* Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="glass rounded-xl p-6"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">Problem</h2>
            <p className="text-gray-300 leading-relaxed">{project.problem}</p>
          </motion.div>

          <motion.div
            className="glass rounded-xl p-6"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">Solution</h2>
            <p className="text-gray-300 leading-relaxed">{project.solution}</p>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          className="glass rounded-xl p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 font-mono bg-dark-bg border border-dark-border rounded-lg text-gray-300 hover:border-neon-blue hover:text-neon-blue transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Metrics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {Object.entries(project.metrics).map(([key, value], index) => (
            <div key={key} className="glass rounded-xl p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">
                {value}
              </div>
              <div className="text-sm text-gray-400 capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Outcome */}
        <motion.div
          className="glass rounded-xl p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">Outcome</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            {project.outcome}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
