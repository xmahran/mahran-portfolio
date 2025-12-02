"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "@/components/ui/Button";
import Hero3D from "@/components/3d/Hero3DWrapper";
import { personalInfo } from "@/lib/content";

const TypewriterText = ({
  text,
  delay = 100,
}: {
  text: string;
  delay?: number;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return <span>{displayedText}</span>;
};

export default function Hero() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-surface to-dark-bg opacity-50" />

      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Hero3D />
      </div>

      {/* Content */}
      <div ref={ref} className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="gradient-text">
                {personalInfo.name.split(" ")[0]}
              </span>
              <br />
              <span className="text-white">
                {personalInfo.name.split(" ")[1]}
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 font-mono"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {inView && (
                <TypewriterText text={personalInfo.tagline} delay={50} />
              )}
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-gray-400 mb-12"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {personalInfo.location} • {personalInfo.title}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Button href="/projects" variant="primary" size="lg">
                View Work
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-neon-blue rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
