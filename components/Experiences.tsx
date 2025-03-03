import React from "react";
import { EXPERIENCES } from "../config/constants";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experiences = () => {
  return (
    <section className="border-b border-neutral-800 pb-16 px-6 lg:px-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-12 text-center text-4xl font-bold"
      >
        Experiences
      </motion.h2>
      <div className="relative border-l border-neutral-700 pl-6">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative mb-10"
          >
            <div className="absolute -left-[10px] top-3 h-4 w-4 rounded-full bg-cyan-500 shadow-lg"></div>
            <Card className="bg-white/10 backdrop-blur-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-cyan-500/50">
              <CardContent className="p-6">
                <p className="mb-2 text-sm text-white">{experience.year}</p>
                <h6 className="mb-2 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {experience.role} - <span className="text-sm text-purple-100">{experience.type}</span>
                </h6>
                <p className="mb-4 text-white">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <Badge key={index} variant="default" className="text-cyan-400 border border-cyan-500">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
