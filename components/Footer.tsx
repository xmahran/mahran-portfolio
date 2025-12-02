"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { socialLinks, personalInfo } from "@/lib/content";

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  email: Mail,
};

export default function Footer() {
  return (
    <footer className="border-t border-dark-border glass">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {personalInfo.name}
            </p>
            <p className="text-gray-500 text-xs mt-1">
              {personalInfo.location}
            </p>
          </div>

          <div className="flex items-center space-x-6">
            {Object.entries(socialLinks)
              .filter(([key]) => key !== "email")
              .map(([key, url]) => {
                const Icon = socialIcons[key as keyof typeof socialIcons];
                return (
                  <motion.a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-neon-blue transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
          </div>
        </div>
      </div>
    </footer>
  );
}
