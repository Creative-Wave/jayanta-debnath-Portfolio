"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowDownCircle,
  Facebook,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

// Schema
const fromSchema = z.object({
  YourName: z.string().min(1, "Name is required"),
  YourEmail: z.string().email("Invalid email address"),
  Message: z.string().min(1, "Message is required"),
});
type FromType = z.infer<typeof fromSchema>;

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FromType>({
    resolver: zodResolver(fromSchema),
  });

  const handleFormSubmit = (data: FromType) => {
    console.log("Form submitted with data:", data);
    reset();
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center px-4 md:px-0 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto py-10 text-white">
          <div className="bg-transparent w-full flex flex-col lg:flex-row justify-between items-start lg:space-x-10 space-y-10 lg:space-y-0 px-4 md:px-8">
            {/* Contact Info */}
            <motion.div
              className="w-full lg:w-1/2 flex flex-col justify-center space-y-4"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-4xl font-bold text-white">
                Contact Me
              </h2>
              <p className="mt-2 md:mt-4 text-sm md:text-base">
                I am a passionate web developer and designer dedicated to
                creating intuitive and dynamic user experiences. Let's connect
                and build something great together!
              </p>

              <div className="mt-6 space-y-3 text-sm md:text-base">
                <p className="flex items-center gap-2">
                  <span className="text-[#6E76FB] font-medium">Phone:</span>
                  <span>+91 99036 83766</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-[#6E76FB] font-medium">Email:</span>
                  <span>jayantadebnathwork7@gmail.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-[#6E76FB] font-medium">Location:</span>
                  <span>North 24 Pgs, Kolkata, India</span>
                </p>
              </div>

              <div className="w-full mt-6">
                <h2 className="text-lg md:text-xl font-semibold mb-4 text-white">
                  Social Handle
                </h2>
                <div className="flex items-center space-x-4">
                  {[
                    {
                      icon: <Linkedin className="text-[#6E76FB]" />,
                      href: "https://www.linkedin.com/in/jayanta-debnath-622a7b316/",
                      label: "LinkedIn",
                    },
                    {
                      icon: <Github className="text-[#6E76FB]" />,
                      href: "https://github.com/Creative-Wave",
                      label: "GitHub",
                    },
                    {
                      icon: <Twitter className="text-[#6E76FB]" />,
                      href: "https://twitter.com",
                      label: "Twitter",
                    },
                    {
                      icon: <Mail className="text-[#6E76FB]" />,
                      href: "mailto:jayantadebnathwork7@gmail.com",
                      label: "Email",
                    },
                    {
                      icon: <Facebook className="text-[#6E76FB]" />,
                      href: "https://www.facebook.com/profile.php?id=100048386407006",
                      label: "Facebook",
                    },
                  ].map(({ icon, href, label }, i) => (
                    <a
                      key={i}
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 md:w-12 md:h-12 bg-white flex justify-center items-center rounded-full hover:scale-105 transition"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="w-full lg:w-1/2 backdrop-blur-sm bg-white/5 border border-[#6E76FB] rounded-xl p-5 sm:p-8 shadow-lg"
              style={{
                backgroundImage: `url(blurbg.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white/90"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter Your Name"
                      {...register("YourName")}
                      className={`w-full px-4 py-2 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#6E76FB] border ${
                        errors.YourName ? "border-red-500" : "border-white/20"
                      } rounded-lg transition duration-200`}
                    />
                    {errors.YourName && (
                      <span className="text-red-500 text-sm">
                        {errors.YourName.message}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white/90"
                    >
                      Your Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter Your Email"
                      {...register("YourEmail")}
                      className={`w-full px-4 py-2 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#6E76FB] border ${
                        errors.YourEmail ? "border-red-500" : "border-white/20"
                      } rounded-lg transition duration-200`}
                    />
                    {errors.YourEmail && (
                      <span className="text-red-500 text-sm">
                        {errors.YourEmail.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="mt-6 space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white/90"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    {...register("Message")}
                    className={`h-40 w-full px-4 py-2 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#6E76FB] border ${
                      errors.Message ? "border-red-500" : "border-white/20"
                    } rounded-lg transition duration-200`}
                  />
                  {errors.Message && (
                    <span className="text-red-500 text-sm">
                      {errors.Message.message}
                    </span>
                  )}
                </div>

                <div className="mt-8 flex justify-center">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-[#6E76FB] to-[#A970FF] text-white px-8 py-5 mt-8 cursor-pointer text-lg font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2"
                  >
                    Send Message
                    <ArrowDownCircle className="w-5 h-5" />
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {isSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4">
          <div className="bg-white text-black p-6 md:p-8 rounded-xl shadow-lg text-center max-w-sm w-full">
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
              Success!
            </h3>
            <p className="text-sm md:text-base">
              Your message has been sent successfully.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
