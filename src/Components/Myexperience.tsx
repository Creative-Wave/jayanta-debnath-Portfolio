"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Myexperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); // animate when 30% in view

  const boxItems = [
    { icon: "/mini (1).png", heading: "Creativity", title: "77%" },
    { icon: "/mini (2).png", heading: "Design", title: "85%" },
    { icon: "/mini (3).png", heading: "Concept", title: "80%" },
  ];

  return (
    <div className="min-h-screen flex justify-center items-center px-4 md:px-8 lg:px-12 py-10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="w-full max-w-6xl md:h-[700px] h-screen mx-auto py-20 flex justify-center items-center px-[20px] border-2 border-white/15 overflow-hidden rounded-3xl"
        style={{
          backgroundImage: `url(container-bg.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Content */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center md:gap-6 gap-12 z-30">
          {/* Text Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white max-w-xl md:space-y-5 space-y-8 md:w-2/3 w-full md:text-right"
          >
            <h1 className="md:text-4xl text-2xl font-bold">
              {" "}
              My Experience & Skills
            </h1>

            <p className="text-sm leading-relaxed">
              Domain expertise in specific mobile application sectors (e.g.,
              e-commerce, education, gaming). Your design and development
              process (e.g., user research, wireframing, prototyping,
              development using specific frameworks). Quantifiable achievements
              from past projects showcasing the impact of your design and
              development solutions (e.g., increased user engagement, improved
              conversion rates, reduced development time).
            </p>

            {/* Small Boxes */}
            <div className="grid grid-cols-3 gap-3">
              {boxItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
                  className="bg-black/25 h-auto p-5 rounded-md hover:bg-[#6E76FB]/35 flex flex-col items-center justify-center space-y-2 transition"
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="md:w-8 w-5 md:h-8 h-5"
                  />
                  <h2 className="text-white md:text-2xl text-lg font-medium">
                    {item.title}
                  </h2>
                  <h1 className="md:text-xl text-md font-bold">
                    {item.heading}
                  </h1>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="md:w-1/3 w-1/2 flex-shrink-0"
          >
            <img
              src="/my2.png"
              className="md:w-[350px] w-60 h-auto rounded-xl"
              alt="My Image"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Myexperience;
