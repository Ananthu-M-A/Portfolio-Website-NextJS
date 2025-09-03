import React, { useState, useEffect } from "react";
import PulseLoader from "@/components/ui/PulseLoader";
import aboutImg from "../public/about.png";
import { ABOUT_TEXT } from "@/config/constants";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/legacy/image";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const img = new window.Image();
    img.src = aboutImg.src;
    img.onload = () => setLoaded(true);
  }, []);
  if (!loaded) {
    return <PulseLoader />;
  }
  return (
    <section className="border-b border-neutral-800 pb-16 px-4 sm:px-6 lg:px-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-12 text-center text-4xl sm:text-5xl font-bold"
      >
        About
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          {" "}
          Me
        </span>
      </motion.h2>
      <div className="w-full flex justify-center mb-10">
        <motion.div
          className="w-full max-w-6xl"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-white/10 backdrop-blur-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <CardContent>
              <p className="text-lg font-light leading-relaxed text-neutral-400 text-center">
                {ABOUT_TEXT}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden shadow-lg bg-white/10 backdrop-blur-lg hover:shadow-xl transition-shadow">
            <Image
              src={(aboutImg as StaticImageData).src}
              alt="Ananthu M A"
              layout="fill"
              objectFit="cover"
              className="rounded-lg hover:scale-105 transition-transform"
            />
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-5">
            {[
              { name: "React.js", level: 95 },
              { name: "Next.js", level: 90 },
              { name: "TypeScript", level: 90 },
              { name: "Node.js", level: 85 },
              { name: "Tailwind CSS", level: 85 },
              { name: "MongoDB", level: 80 },
              { name: "UI/UX Design", level: 80 },
            ].map((skill, idx) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-cyan-400 font-mono">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-3 bg-neutral-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, delay: idx * 0.2 }}
                    className="h-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
