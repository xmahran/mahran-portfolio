"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experience } from "@/lib/content";
import { Briefcase } from "lucide-react";

export default function ExperienceTimeline() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="py-24 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-cyan to-transparent transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-20 md:pl-0 md:flex md:items-center"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-neon-blue rounded-full border-4 border-dark-bg transform md:-translate-x-1/2 z-10" />

                {/* Content Card */}
                <div
                  className={`glass rounded-xl p-6 md:w-[45%] ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Briefcase className="w-5 h-5 text-neon-blue" />
                    <span className="text-sm font-mono text-neon-cyan">
                      {exp.year}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-neon-blue font-semibold mb-4">
                    {exp.company}
                  </p>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-mono bg-dark-card border border-dark-border rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
