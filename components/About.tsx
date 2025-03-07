import React from "react";
import aboutImg from "../public/about.png";
import { ABOUT_TEXT } from "@/config/constants";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/legacy/image";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
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

      <div className="flex flex-col lg:flex-row items-center gap-8">
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1 }}
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
          className="w-full lg:w-1/2"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 1 }}
        >
          <Card className="bg-white/10 backdrop-blur-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <CardContent>
              <p className="text-lg font-light leading-relaxed text-neutral-400">
                {ABOUT_TEXT}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
