"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function FloatingPathsBackground({
  position,
  children,
  className,
}: {
  position: number;
  className?: string;
  children: React.ReactNode;
}) {
  // Reduce paths on mobile for better performance
  const pathCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 18 : 36;
  const paths = Array.from({ length: pathCount }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(255, 255, 255, ${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
    isBlue: (i + position) % 5 === 0,
  }));

  return (
    <div className={cn("w-full relative", className)}>
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="w-full h-full text-slate-950 dark:text-white"
          viewBox="0 0 696 316"
          fill="none"
        >
          {paths.map((path) => (
            <motion.path
              key={path.id}
              d={path.d}
              stroke="white"
               strokeWidth={path.width}
               strokeOpacity={path.isBlue ? 0.8 : 0.1 + path.id * 0.03}
               filter={path.isBlue ? "drop-shadow(0 0 12px rgba(255, 255, 255, 0.8))" : "none"}
              initial={{ pathLength: 0.3, opacity: 0.6 }}
              animate={{
                pathLength: 1,
                opacity: path.isBlue ? [0.6, 1, 0.6] : [0.2, 0.4, 0.2],
                pathOffset: [0, 1, 0],
              }}
              transition={{
                duration: typeof window !== 'undefined' && window.innerWidth < 768 ? 30 + Math.random() * 15 : 20 + Math.random() * 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
        </svg>
      </div>
      {children}
    </div>
  );
}