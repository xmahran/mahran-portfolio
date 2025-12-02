"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { socialLinks, personalInfo } from "@/lib/content";

export default function ContactHero() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const socialIcons = [
    { name: "Email", icon: Mail, href: `mailto:${socialLinks.email}` },
    { name: "GitHub", icon: Github, href: socialLinks.github },
    { name: "LinkedIn", icon: Linkedin, href: socialLinks.linkedin },
  ];

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
          Let&apos;s Connect
        </motion.h1>
        <motion.div
          className="space-y-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p className="text-xl md:text-2xl text-gray-300">
            Interested in collaboration or just want to chat? Get in touch.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-400">
            <a
              href={`tel:${personalInfo.phone?.replace(/\s/g, "")}`}
              className="hover:text-neon-blue transition-colors"
            >
              {personalInfo.phone}
            </a>
            <span className="hidden md:inline">•</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-neon-blue transition-colors"
            >
              {personalInfo.email}
            </a>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {socialIcons.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 glass rounded-full flex items-center justify-center text-gray-400 hover:text-neon-blue border border-dark-border hover:border-neon-blue transition-all duration-300"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              >
                <Icon size={24} />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
