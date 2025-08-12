import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function PlasticButton({ text, icon }: { text: string; icon?: ReactNode }) {
  return (
    <button
      className={cn(
        "relative inline-block px-6 py-3 rounded-full text-black font-medium text-lg transition-all duration-200",
        "bg-gradient-to-b from-white to-gray-100",
        "active:scale-[0.98] hover:scale-105 flex justify-center items-center gap-2 hover:shadow-xl"
      )}
      style={{
        background: `linear-gradient(to bottom, rgb(255, 255, 255), rgb(243, 244, 246))`,
        boxShadow: `0 2px 8px 0 rgba(0, 0, 0, 0.15), 0 1.5px 0 0 rgba(255,255,255,0.8) inset, 0 -2px 8px 0 rgba(0, 0, 0, 0.1) inset`,
      }}
    >
      {icon && <span className="relative z-10">{icon}</span>}
      <span className="relative z-10">{text}</span>
      <span
        className="absolute left-1/2 top-0 z-20 w-[80%] h-2/5 -translate-x-1/2 rounded-t-full pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 80%, transparent 100%)",
          filter: "blur(1.5px)",
        }}
      />
      <span
        className="absolute inset-0 z-0 rounded-full pointer-events-none"
        style={{
          boxShadow:
            "0 0 0 2px rgba(0,0,0,0.05) inset, 0 1.5px 0 0 rgba(255,255,255,0.9) inset, 0 -2px 8px 0 rgba(0, 0, 0, 0.08) inset",
        }}
      />
    </button>
  );
}