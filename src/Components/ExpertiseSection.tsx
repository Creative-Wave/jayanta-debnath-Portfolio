"use client";

import { motion } from "framer-motion";
import Maincard from "./Maincard";

const ExpertiseSection = () => {
  return (
    <section className="md:h-[70dvh] h-auto bg-cover bg-center px-10 py-10 flex flex-col justify-center items-center w-full max-w-6xl mx-auto text-white">
      <motion.h2
        className="md:text-4xl text-2xl font-bold mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        My Expertise
      </motion.h2>

      <motion.div
        className=""
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Maincard />
      </motion.div>
    </section>
  );
};

export default ExpertiseSection;
