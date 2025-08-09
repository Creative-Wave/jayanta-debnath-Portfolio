"use client";

import { Maintab } from "./Maintab";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Tabbar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="h-auto flex flex-col justify-center items-center py-10 space-y-8 mt-10  md:px-0 px-5"
      id="projects"
    >
      <div className="md:text-4xl text-2xl text-white font-bold">
        My Projects
      </div>
      <Maintab />
    </motion.div>
  );
};

export default Tabbar;
