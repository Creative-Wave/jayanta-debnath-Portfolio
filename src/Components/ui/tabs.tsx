"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
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

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        className={cn(
          "flex flex-wrap items-center justify-center gap-4 mb-10",
          containerClassName
        )}
      >
        {propTabs.map((tab) => (
          <button
            key={tab.title}
            onClick={() => setActive(tab)}
            className={cn(
              "px-5 py-2 rounded-full transition-all duration-300",
              tab.value === active.value
                ? cn("bg-fuchsia-900 text-white font-bold", activeTabClassName)
                : cn("bg-white/10 text-white font-bold", tabClassName)
            )}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <motion.div
        key={active.value}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn("w-full", contentClassName)}
      >
        {active.content}
      </motion.div>
    </div>
  );
};
