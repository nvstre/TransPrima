"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BentoGridProps {
  className?: string;
  children?: ReactNode;
}

interface BentoGridItemProps {
  className?: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
  header?: ReactNode;
  icon?: ReactNode;
}

export const BentoGrid = ({ className, children }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid auto-rows-[14rem] md:auto-rows-[20rem] grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-7xl mx-auto mb-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: BentoGridItemProps) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl p-8 bg-gradient-to-br from-neutral-900/80 to-neutral-800/60 backdrop-blur-md border border-neutral-700/50 justify-between flex flex-col space-y-4 hover:from-neutral-800/90 hover:to-neutral-700/70 hover:border-neutral-600/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group cursor-pointer",
        className
      )}
    >
      {header && (
        <div className="mb-4">
          {header}
        </div>
      )}
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-3">
          {icon && (
             <div className="p-2 rounded-lg bg-gradient-to-br from-gray-500/20 to-gray-600/20 border border-gray-400/30 group-hover:from-gray-400/30 group-hover:to-gray-500/30 transition-all duration-300">
               <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                 {icon}
               </div>
             </div>
           )}
          <div className="font-sans font-bold text-white text-lg group-hover:text-blue-100 transition-colors duration-300">
            {title}
          </div>
        </div>
        <div className="font-sans font-normal text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </div>
      </div>
    </div>
  );
};