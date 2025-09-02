import { FaNodeJs } from "react-icons/fa";
import {
  RiJavascriptLine,
  RiNextjsLine,
  RiReactjsLine,
  RiTailwindCssLine,
  RiHtml5Line,
} from "react-icons/ri";
import { motion, Variants } from "framer-motion";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiRedux,
  SiNestjs,
  SiSocketdotio,
  SiFramer,
  SiStripe,
  SiFirebase,
  SiChartdotjs,
} from "react-icons/si";

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
  {
    icon: <RiReactjsLine className="text-cyan-400" />,
    name: "React.js",
    duration: 2.5,
  },
  {
    icon: <RiNextjsLine className="text-cyan-400" />,
    name: "Next.js",
    duration: 2.8,
  },
  {
    icon: <SiRedux className="text-purple-600" />,
    name: "Redux",
    duration: 2.5,
  },
  {
    icon: <RiTailwindCssLine className="text-cyan-400" />,
    name: "Tailwind CSS",
    duration: 2.8,
  },
  {
    icon: <SiFramer className="text-pink-500" />,
    name: "Framer Motion",
    duration: 2.5,
  },
  {
    icon: <RiJavascriptLine className="text-yellow-300" />,
    name: "JavaScript",
    duration: 2.8,
  },
  {
    icon: <SiTypescript className="text-blue-500" />,
    name: "TypeScript",
    duration: 2.5,
  },
  {
    icon: <RiHtml5Line className="text-orange-500" />,
    name: "HTML5",
    duration: 2.8,
  },
  {
    icon: <FaNodeJs className="text-green-500" />,
    name: "Node.js",
    duration: 2.5,
  },
  {
    icon: <SiExpress className="text-green-800" />,
    name: "Express.js",
    duration: 2.8,
  },
  {
    icon: <SiNestjs className="text-red-500" />,
    name: "Nest.js",
    duration: 2.5,
  },
  {
    icon: <SiMongodb className="text-green-500" />,
    name: "MongoDB",
    duration: 2.8,
  },
  {
    icon: <SiFirebase className="text-yellow-400" />,
    name: "Firebase",
    duration: 2.5,
  },
  {
    icon: <SiSocketdotio className="text-purple-400" />,
    name: "Socket.IO",
    duration: 2.8,
  },
  {
    icon: <SiChartdotjs className="text-blue-600" />,
    name: "Chart.js",
    duration: 2.5,
  },
  {
    icon: <SiStripe className="text-blue-500" />,
    name: "Stripe",
    duration: 2.8,
  },
];

const Technologies = () => {
  return (
    <section className="border-b border-neutral-800 pb-24 px-4 sm:px-6 lg:px-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-12 text-center text-4xl sm:text-5xl font-bold"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 1.2 }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8"
      >
        <TooltipProvider>
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={iconVariants(tech.duration)}
              initial="initial"
              animate="animate"
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <Card className="flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg p-8 transition-transform duration-300 hover:scale-110 hover:shadow-cyan-400/60 cursor-pointer">
                    <CardContent className="flex items-center justify-center text-5xl sm:text-6xl">
                      {tech.icon}
                    </CardContent>
                  </Card>
                </TooltipTrigger>
                <TooltipContent side="top" className="text-base font-semibold">
                  {tech.name}
                </TooltipContent>
              </Tooltip>
            </motion.div>
          ))}
        </TooltipProvider>
      </motion.div>
    </section>
  );
};

export default Technologies;
