import React, { useState, useEffect } from "react";
import PulseLoader from "@/components/ui/PulseLoader";
import { motion } from "framer-motion";
import Image from "next/image";
import { CERTIFICATIONS } from "@/config/constants";

const Certificates = () => {
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
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-12 text-center text-4xl sm:text-5xl font-bold"
      >
        Certifications
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert) => (
          <motion.a
            key={cert.name}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            className="block bg-white/10 backdrop-blur-lg rounded-xl shadow-md p-6 hover:shadow-cyan-500/40 transition-shadow"
          >
            <Image
              src={cert.image}
              alt={cert.name}
              width={80}
              height={80}
              className="w-20 h-20 object-contain mb-4 mx-auto rounded"
            />
            <h3 className="text-lg font-semibold text-white mb-1 text-center">
              {cert.name}
            </h3>
            <p className="text-cyan-400 text-sm text-center">{cert.issuer}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
