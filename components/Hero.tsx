import React from "react";
import profile from "../public/profile.jpg";
import { HERO_CONTENT } from "@/config/constants";
import { motion } from "framer-motion";
import { StaticImageData } from "next/legacy/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay } },
});

const Hero = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between gap-8 border-b border-neutral-800 pb-12 lg:mb-24 px-6 lg:px-16 lg:py-20 bg-neutral-900">
      <div className="w-full lg:w-1/2 text-center lg:text-left text-white">
        <motion.h1
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="text-5xl font-bold tracking-tight lg:text-6xl"
        >
          Ananthu M A
        </motion.h1>
        <motion.div
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
        >
          <Badge className="mt-4 text-lg px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md">
            Full Stack Developer
          </Badge>
        </motion.div>
        <motion.p
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className="my-4 max-w-xl text-lg font-light leading-relaxed text-neutral-400"
        >
          {HERO_CONTENT}
        </motion.p>
        <motion.div
          variants={container(1.5)}
          initial="hidden"
          animate="visible"
          className="flex gap-4 mt-6 justify-center lg:justify-start"
        >
          <Button
            size="lg"
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Download Resume
          </Button>
          <Button size="lg" variant="secondary">
            Contact Me
          </Button>
        </motion.div>
      </div>
      <motion.div
        className="w-full lg:w-1/2 flex justify-center relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.img
          src={(profile as StaticImageData).src}
          alt="Ananthu M A"
          className="w-60 h-60 lg:w-80 lg:h-80 rounded-full object-cover shadow-xl"
          whileHover={{
            scale: 1.05,
            rotate: [0, 2, -2, 0],
            transition: {
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
