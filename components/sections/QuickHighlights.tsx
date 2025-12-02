"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Brain, Code, Cloud, Network } from "lucide-react";
import { highlights } from "@/lib/content";

const iconMap = {
  brain: Brain,
  code: Code,
  cloud: Cloud,
  systems: Network,
};

export default function QuickHighlights() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Core Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const Icon =
              iconMap[highlight.icon as keyof typeof iconMap] || Code;
            return (
              <motion.div
                key={index}
                className="glass rounded-2xl p-8 hover:border-neon-blue transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <motion.div
                  className="mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon
                    className="w-12 h-12 text-neon-blue group-hover:text-neon-cyan transition-colors"
                    strokeWidth={1.5}
                  />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neon-blue transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
