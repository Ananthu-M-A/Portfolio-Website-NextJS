import React from "react";
import { PROJECTS } from "../config/constants";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";

const Projects = () => {
  return (
    <section className="border-b border-neutral-800 pb-16 px-6 lg:px-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="my-12 text-center text-4xl font-bold"
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Card className="bg-white/10 backdrop-blur-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-cyan-500/50">
              <CardContent className="p-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6 overflow-hidden rounded-lg"
                >
                  <Image
                    src={(project.image as StaticImageData).src}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="rounded-lg"
                    loading="lazy"
                  />
                </motion.div>
                <h6 className="mb-2 text-xl font-semibold text-white">
                  {project.title}
                </h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="default"
                      className="text-cyan-400 border border-cyan-500"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button asChild variant="secondary" className="w-full">
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Project
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
