"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 relative overflow-hidden group";

  const variants = {
    primary: "bg-neon-blue text-dark-bg hover:bg-neon-cyan glow",
    secondary:
      "bg-dark-card text-white hover:bg-dark-border border border-dark-border",
    outline:
      "border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-bg",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const buttonContent = (
    <motion.span
      className="relative z-10"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.span>
  );

  const buttonClasses = clsx(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonClasses}>
      {buttonContent}
    </button>
  );
}
