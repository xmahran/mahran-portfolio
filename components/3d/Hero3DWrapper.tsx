"use client";

import dynamic from "next/dynamic";

// Lazy load the 3D component for better performance
const Hero3D = dynamic(() => import("./Hero3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-neon-blue border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

export default Hero3D;
