"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="md:min-h-screen h-autob flex justify-center items-center px-4 md:px-8 lg:px-12 py-10">
      <div
        className="w-full max-w-6xl md:h-[700px] h-screen mx-auto py-20 flex justify-center items-center px-[20px] border-2 border-white/15 overflow-hidden rounded-3xl"
        style={{
          backgroundImage: `url(container-bg.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:gap-6 gap-12 z-30">
          {/* Profile Image with animation */}
          <motion.div
            className="md:w-1/3 w-1/2 flex-shrink-0"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/my-img.png"
              className="md:w-[350px] w-60 h-auto rounded-xl"
              alt="My Image"
            />
          </motion.div>

          {/* Text Content with animation */}
          <motion.div
            className="text-white max-w-xl md:space-y-5 space-y-8 md:w-2/3 w-full"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h1 className="md:text-4xl text-2xl font-bold">About Me</h1>
            <h3 className="text-xl font-normal tracking-wider">
              A Creative UI/UX Designer & Web Developer
            </h3>
            <p className="text-sm leading-relaxed">
              I am a skilled UI/UX Designer with 2 years of experience, bringing
              a combined focus on user-centric design and front-end development
              to create exceptional mobile applications. I excel at translating
              complex user needs into intuitive and visually engaging interfaces
              that prioritize user experience (UX) principles. My expertise lies
              in crafting user flows and information architecture to optimize
              the user journey, while ensuring a seamless and efficient
              interaction through strong front-end development skills. I'm a
              quick learner and eager to expand my knowledge in the
              ever-evolving field of UX design. I'm confident that my skills and
              enthusiasm would be a valuable asset to your team.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
