"use client";

import { ArrowDownCircle } from "lucide-react";
import { Particles } from "./magicui/particles";
import { Button } from "./ui/button";
import { TextAnimate } from "./magicui/text-animate";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      {/* Main Hero Section */}
      <div
        className="relative h-screen flex items-center justify-center px-4"
        id="home"
      >
        <div className="flex items-center justify-center h-full gap-8 w-full">
          {/* Image */}
          <motion.div
            className="md:block hidden"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img src="stic.png" alt="Jayanta" className="w-full h-auto" />
          </motion.div>

          {/* Text */}
          <motion.div
            className="text-white text-left space-y-5"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            <TextAnimate
              animation="blurInUp"
              by="character"
              once
              className="text-xl"
            >
              Hi, I’m
            </TextAnimate>

            <TextAnimate
              animation="blurInUp"
              by="character"
              once
              className="text-3xl font-semibold"
            >
              Jayanta Debnath
            </TextAnimate>

            <TextAnimate
              animation="blurInUp"
              by="character"
              once
              className="flex justify-center items-center text-4xl md:text-7xl font-bold gap-1.5"
            >
              Graphic Designer
            </TextAnimate>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button className="bg-gradient-to-r from-[#6E76FB] to-[#A970FF] text-white px-8 py-5 mt-8 cursor-pointer text-lg font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2">
                <a
                  href="https://drive.google.com/drive/folders/1nue96b9uyha7AK_freQmlY9N6g0zm0Xk?usp=drive_link"
                  target="_blank"
                >
                  View Resume
                </a>
                <ArrowDownCircle className="w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
