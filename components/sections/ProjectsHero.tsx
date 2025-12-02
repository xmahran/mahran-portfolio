"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ProjectsHero() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="min-h-[60vh] flex items-center justify-center px-6 py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-surface to-dark-bg opacity-50" />

      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Crafting intelligent solutions that make an impact
        </motion.p>
      </div>
    </section>
  );
}
