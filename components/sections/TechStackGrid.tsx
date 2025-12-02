"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { techStack } from "@/lib/content";

export default function TechStackGrid() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const categories = Array.from(
    new Set(techStack.map((tech) => tech.category))
  );

  return (
    <div ref={ref} className="container mx-auto px-6 max-w-7xl">
      <motion.h1
        className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 gradient-text"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Tech Stack
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-center text-gray-300 mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Technologies I use to build intelligent systems
      </motion.p>

      {categories.map((category, categoryIndex) => {
        const categoryTechs = techStack.filter(
          (tech) => tech.category === category
        );
        return (
          <motion.div
            key={category}
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-neon-blue mb-6">
              {category}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categoryTechs.map((tech, techIndex) => (
                <motion.div
                  key={tech.name}
                  className="glass rounded-xl p-6 text-center cursor-pointer group border border-dark-border hover:border-neon-blue transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    delay: categoryIndex * 0.1 + techIndex * 0.05,
                    duration: 0.5,
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto bg-dark-bg rounded-lg flex items-center justify-center text-lg font-bold group-hover:glow transition-all duration-300">
                      {tech.icon === "typescript" && (
                        <span className="text-[#3178C6]">TS</span>
                      )}
                      {tech.icon === "javascript" && (
                        <span className="text-[#F7DF1E]">JS</span>
                      )}
                      {tech.icon === "nextjs" && <span>⚡</span>}
                      {tech.icon === "react" && <span>⚛️</span>}
                      {tech.icon === "python" && <span>🐍</span>}
                      {tech.icon === "java" && (
                        <span className="text-[#ED8B00]">Java</span>
                      )}
                      {tech.icon === "nodejs" && (
                        <span className="text-[#339933]">Node</span>
                      )}
                      {tech.icon === "spring" && (
                        <span className="text-[#6DB33F]">SB</span>
                      )}
                      {tech.icon === "aws" && <span>☁️</span>}
                      {tech.icon === "docker" && <span>🐳</span>}
                      {tech.icon === "kubernetes" && <span>☸️</span>}
                      {tech.icon === "postgresql" && (
                        <span className="text-[#336791]">PG</span>
                      )}
                      {tech.icon === "mongodb" && (
                        <span className="text-[#47A248]">M</span>
                      )}
                      {tech.icon === "redis" && (
                        <span className="text-[#DC382D]">R</span>
                      )}
                      {tech.icon === "prisma" && (
                        <span className="text-[#2D3748]">P</span>
                      )}
                      {tech.icon === "tensorflow" && (
                        <span className="text-[#FF6F00]">TF</span>
                      )}
                      {tech.icon === "pytorch" && (
                        <span className="text-[#EE4C2C]">Py</span>
                      )}
                      {tech.icon === "threejs" && <span>🎨</span>}
                      {tech.icon === "express" && (
                        <span className="text-[#000000] dark:text-white">
                          EX
                        </span>
                      )}
                      {tech.icon === "microservices" && <span>🔧</span>}
                      {tech.icon === "rabbitmq" && (
                        <span className="text-[#FF6600]">MQ</span>
                      )}
                      {tech.icon === "github" && <span>🐙</span>}
                      {tech.icon === "cicd" && <span>🔄</span>}
                      {tech.icon === "nginx" && (
                        <span className="text-[#269539]">Nx</span>
                      )}
                      {tech.icon === "nx" && (
                        <span className="text-[#143055]">Nx</span>
                      )}
                      {tech.icon === "redux" && (
                        <span className="text-[#764ABC]">Rx</span>
                      )}
                      {tech.icon === "dotnet" && (
                        <span className="text-[#512BD4]">.NET</span>
                      )}
                      {tech.icon === "terraform" && (
                        <span className="text-[#7B42BC]">TF</span>
                      )}
                      {tech.icon === "jest" && (
                        <span className="text-[#C21325]">J</span>
                      )}
                      {tech.icon === "sql" && (
                        <span className="text-[#336791]">SQL</span>
                      )}
                      {![
                        "typescript",
                        "javascript",
                        "nextjs",
                        "react",
                        "python",
                        "java",
                        "nodejs",
                        "spring",
                        "aws",
                        "docker",
                        "kubernetes",
                        "postgresql",
                        "mongodb",
                        "redis",
                        "prisma",
                        "tensorflow",
                        "pytorch",
                        "threejs",
                        "express",
                        "microservices",
                        "rabbitmq",
                        "github",
                        "cicd",
                        "nginx",
                        "nx",
                        "redux",
                        "dotnet",
                        "terraform",
                        "jest",
                        "sql",
                      ].includes(tech.icon) && (
                        <span className="text-neon-blue text-xs">
                          {tech.name.substring(0, 3).toUpperCase()}
                        </span>
                      )}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">
                    {tech.name}
                  </h3>
                  <span className="text-xs text-gray-400 font-mono">
                    {tech.proficiency}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
