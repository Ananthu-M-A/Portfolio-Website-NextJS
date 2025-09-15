import React, { useState, useEffect } from "react";
import PulseLoader from "@/components/ui/PulseLoader";
import { PROJECTS } from "../config/constants";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";

const Projects = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 400);
  }, []);
  if (!loaded) {
    return <PulseLoader />;
  }
  return (
    <section className="border-b border-neutral-800 pb-16 px-4 sm:px-6 lg:px-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="my-12 text-center text-4xl sm:text-5xl font-bold"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Card
              className="bg-white/10 backdrop-blur-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-cyan-500/50 cursor-pointer"
              onClick={() => setSelected(index)}
            >
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
                    className="rounded-lg hover:scale-105 transition-transform"
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
                      className="text-cyan-400 border border-cyan-500 hover:bg-cyan-500 hover:text-white transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 w-full">
                  {project.website && (
                    <Button asChild variant="secondary" className="w-full">
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Website
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button asChild variant="outline" className="w-full">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit GitHub Repo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Modal Popup */}
      {selected !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-neutral-900 rounded-xl shadow-2xl p-8 max-w-lg w-full relative"
          >
            <button
              className="absolute top-3 right-3 text-2xl text-white hover:text-cyan-400 transition"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <Image
              src={(PROJECTS[selected].image as StaticImageData).src}
              alt={PROJECTS[selected].title}
              width={500}
              height={300}
              className="rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-2">
              {PROJECTS[selected].title}
            </h3>
            <p className="text-neutral-300 mb-4">
              {PROJECTS[selected].description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {PROJECTS[selected].technologies.map((tech, idx) => (
                <Badge
                  key={idx}
                  variant="default"
                  className="text-cyan-400 border border-cyan-500 hover:bg-cyan-500 hover:text-white transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex gap-2 w-full">
              {PROJECTS[selected].website && (
                <Button asChild variant="secondary" className="w-full">
                  <a
                    href={PROJECTS[selected].website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                  </a>
                </Button>
              )}
              {PROJECTS[selected].github && (
                <Button asChild variant="outline" className="w-full">
                  <a
                    href={PROJECTS[selected].github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit GitHub Repo
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;
