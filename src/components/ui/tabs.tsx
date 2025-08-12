"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full gap-2 mb-4",
          containerClassName
        )}
      >
        {propTabs.slice(0, 3).map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(
              "relative px-4 py-2 rounded-full font-bold text-sm transition-all duration-200",
              "active:scale-[0.98] hover:scale-105 flex justify-center items-center gap-2",
              tabClassName
            )}
            style={{
              transformStyle: "preserve-3d",
              background: active.value === tab.value 
                ? `linear-gradient(to bottom, rgb(255, 255, 255), rgb(243, 244, 246))` 
                : `linear-gradient(to bottom, rgb(156, 163, 175), rgb(107, 114, 128))`,
              boxShadow: `0 2px 8px 0 rgba(0, 0, 0, 0.15), 0 1.5px 0 0 rgba(255,255,255,0.8) inset, 0 -2px 8px 0 rgba(0, 0, 0, 0.1) inset`,
            }}
          >
            <span className={cn(
              "relative z-10",
              active.value === tab.value ? "text-black" : "text-white"
            )}>
              {tab.title}
            </span>
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
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-8", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};