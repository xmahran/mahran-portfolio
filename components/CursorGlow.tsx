"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference transition-opacity duration-300"
        style={{
          left: mousePosition.x - 15,
          top: mousePosition.y - 15,
          opacity: isHovering ? 1 : 0,
        }}
      >
        <div className="w-[30px] h-[30px] rounded-full border-2 border-neon-blue animate-pulse" />
      </div>
      <div
        className="fixed pointer-events-none z-40 transition-opacity duration-500"
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          opacity: isHovering ? 0.1 : 0,
        }}
      >
        <div className="w-[200px] h-[200px] rounded-full bg-neon-blue blur-3xl" />
      </div>
    </>
  );
}
