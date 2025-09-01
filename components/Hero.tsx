import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "UI/UX Enthusiast",
  "Tech Explorer",
  "Open Source Contributor",
];

function useTypewriter(words: string[], speed = 120) {
  const [index, setIndex] = useState<number>(0);
  const [subIndex, setSubIndex] = useState<number>(0);
  const [blink, setBlink] = useState<boolean>(true);
  useEffect(() => {
    if (subIndex === words[index].length + 1) {
      setTimeout(() => {
        setIndex((prev: number) => (prev + 1) % words.length);
        setSubIndex(0);
      }, 1000);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev: number) => prev + 1);
    }, speed);
    return () => clearTimeout(timeout);
  }, [subIndex, index, words, speed]);
  useEffect(() => {
    const blinkTimeout = setInterval(() => setBlink((b: boolean) => !b), 500);
    return () => clearInterval(blinkTimeout);
  }, []);
  return words[index].substring(0, subIndex) + (blink ? "|" : " ");
}

const Hero = () => {
  const typewriter = useTypewriter(roles);
  return (
    <section className="relative w-full flex flex-col items-center justify-center py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 -z-10"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 320"
          className="absolute top-0 left-0"
        >
          <path
            fill="#60a5fa"
            fillOpacity="0.3"
            d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,186.7C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </motion.div>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={128}
          height={128}
          className="rounded-full mb-4 shadow-lg"
          priority
        />
      </motion.div>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold mb-2 text-center"
      >
        Ananthu M A
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="text-lg text-blue-500 mb-4 font-mono h-8"
      >
        {typewriter}
      </motion.p>
      <motion.a
        href="/resume.pdf"
        download
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition shadow"
        whileHover={{ scale: 1.05 }}
      >
        Download Resume
      </motion.a>
    </section>
  );
};

export default Hero;
