"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personalInfo } from "@/lib/content";

export default function AboutHero() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-surface to-dark-bg opacity-50" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 gradient-text"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            About Me
          </motion.h1>

          <motion.div
            className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            <p>
              I&apos;m a{" "}
              <span className="text-neon-blue font-semibold">
                Lead Full Stack Engineer & Founder
              </span>{" "}
              with 3+ years of experience, currently pursuing an{" "}
              <span className="text-neon-cyan font-semibold">
                M.Sc. in Computer Science (AI/ML)
              </span>{" "}
              at the German International University in Berlin seeking Working
              Student Positions (Werkstudent).
            </p>
            <p>
              I specialize in bridging the gap between Data Science and Web
              Development, with a proven ability to design scalable backend
              architectures (Node.js, Java) and integrate complex Machine
              Learning models into production-grade applications.
            </p>
            <p>
              Proficient in cloud infrastructure (AWS, Kubernetes), event
              streaming, and modern frontend development. I&apos;m passionate
              about building intelligent, data-driven software solutions that
              make a real impact.
            </p>
            <p className="text-gray-400 italic">
              &quot;Building intelligent systems that bridge AI research and
              production applications.&quot;
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
