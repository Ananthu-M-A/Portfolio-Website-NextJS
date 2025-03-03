import { FaNodeJs } from "react-icons/fa";
import {
  RiJavascriptLine,
  RiNextjsLine,
  RiReactjsLine,
  RiTailwindCssLine,
  RiHtml5Line,
} from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { motion, Variants } from "framer-motion";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const iconVariants = (duration: number): Variants => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const technologies = [
  { icon: <RiReactjsLine className="text-cyan-400" />, duration: 2.5 },
  { icon: <FaNodeJs className="text-green-500" />, duration: 2.8 },
  { icon: <SiExpress className="text-green-800" />, duration: 2.5 },
  { icon: <RiNextjsLine className="text-cyan-400" />, duration: 2.8 },
  { icon: <RiJavascriptLine className="text-yellow-300" />, duration: 2.5 },
  { icon: <SiMongodb className="text-green-500" />, duration: 2.8 },
  { icon: <RiTailwindCssLine className="text-cyan-400" />, duration: 2.5 },
  { icon: <RiHtml5Line className="text-cyan-400" />, duration: 2.8 },
];

const Technologies = () => {
  return (
    <section className="border-b border-neutral-800 pb-24 px-6 lg:px-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-12 text-center text-4xl font-bold"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-center"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(tech.duration)}
            initial="initial"
            animate="animate"
          >
            <Card className="flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-lg shadow-lg p-6 transition-transform duration-300 hover:scale-110 hover:shadow-cyan-500/50">
              <CardContent className="flex items-center justify-center text-6xl">
                {tech.icon}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Technologies;
