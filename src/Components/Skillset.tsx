"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SparklesCore } from "./ui/sparkles";

const Service = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const iconList = [
    "icon1.png",
    "icon2.png",
    "icon3.png",
    "icon4.png",
    "icon5.png",
    "icon6.png",
    "icon7.png",
    "icon8.png",
    "icon9.png",
    "icon10.png",
    "icon11.png",
    "icon12.png",
    "icon13.png",
    "icon14.png",
    "icon15.png",
    "icon16.png",
  ];

  return (
    <div
      ref={sectionRef}
      className="md:min-h-[70dvh] h-auto bg-cover bg-center px-10 py-10 flex flex-col justify-center items-center w-full max-w-6xl mx-auto"
    >
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="md:text-4xl text-2xl text-white font-bold"
        >
          My Skill Set
        </motion.h1>

        <div className="md:min-w-4xl w-full h-32 relative mt-6">
          {/* Gradient lines */}
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-[#0F0725] via-[#6E76FB] to-[#0F0725] h-[5px] w-full blur-sm opacity-70" />
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-[#0F0725] via-[#6E76FB] to-[#0F0725] h-px w-full" />

          {/* Sparkles */}
          <SparklesCore
            background="transparent"
            minSize={0.3}
            maxSize={1.2}
            particleDensity={800}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Mask gradient */}
          <div className="absolute inset-0 w-full h-full bg-[#0F0725] [mask-image:radial-gradient(250px_125px_at_center,transparent_20%,white)] sm:[mask-image:radial-gradient(300px_150px_at_center,transparent_20%,white)] md:[mask-image:radial-gradient(350px_175px_at_center,transparent_20%,white)] lg:[mask-image:radial-gradient(400px_200px_at_center,transparent_20%,white)]" />
        </div>
      </div>

      {/* Icons */}
      <motion.div
        className="grid grid-cols-4 md:grid-cols-8 gap-8 md:w-full mt-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.07,
              delayChildren: 0.3,
            },
          },
        }}
      >
        {iconList.map((icon, index) => (
          <motion.div
            key={index}
            className="w-16 h-16 md:w-24 md:h-24 border-2 border-[#3D1768] rounded-lg md:rounded-xl flex justify-center items-center hover:shadow-md hover:shadow-[#6E76FB] cursor-pointer transition-shadow duration-300 ease-in-out"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={icon}
              alt={`Skill ${index + 1}`}
              className="w-2/3 h-2/3 object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
