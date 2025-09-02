import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const certifications = [
  {
    name: "Google IT Support",
    issuer: "Google | Coursera",
    image: "/certifications/gits1.png",
    link: "https://coursera.org/share/dcf0b637f6d04762c43c5256092f4777",
  },
  {
    name: "IT Security: Defense against the Digital Dark Arts",
    issuer: "Google | Coursera",
    image: "/certifications/itsdadda3.png",
    link: "https://coursera.org/share/993643b65816646316f9cc6663f1e0a0",
  },
  {
    name: "Operating Systems and You: Becoming a Power User",
    issuer: "Google | Coursera",
    image: "/certifications/osybpu5.png",
    link: "https://coursera.org/share/08b0c2cccda0210db0edd7d93db00073",
  },
  {
    name: "System Administration and IT Infrastructure Services",
    issuer: "Google | Coursera",
    image: "/certifications/saitis6.png",
    link: "https://coursera.org/share/5ca338c4aacafee4feb9af50376fe7a0",
  },
  {
    name: "The Bits and Bytes of Computer Networking",
    issuer: "Google | Coursera",
    image: "/certifications/tbbcn7.png",
    link: "https://coursera.org/share/9324f35b4530aea4d259ea747d8ba6a6",
  },
  {
    name: "Technical Support Fundamentals",
    issuer: "Google | Coursera",
    image: "/certifications/tsf9.png",
    link: "https://coursera.org/share/12ef6a470ab2a5672f6aeb684d5177c3",
  },
  {
    name: "Version Control",
    issuer: "Meta | Coursera",
    image: "/certifications/vc4.png",
    link: "https://coursera.org/share/aec4bdaf080959f21b5f397c08d8ea8b",
  },
  {
    name: "Programming with JavaScript",
    issuer: "Meta | Coursera",
    image: "/certifications/pwj8.png",
    link: "https://coursera.org/share/faf8635bce27ed9358f986636490314f",
  },
  {
    name: "Introduction to Front-End Development",
    issuer: "Meta | Coursera",
    image: "/certifications/ifed10.png",
    link: "https://coursera.org/share/fc71f2e0d56a26ad0c5308295ef1cba4",
  },
  {
    name: "Introduction to Software Engineering",
    issuer: "IBM | Coursera",
    image: "/certifications/ise2.png",
    link: "https://coursera.org/share/3df60db2f85c9d5df6ed1e569c51e74f",
  },
];

const Certifications = () => {
  return (
    <section className="border-b border-neutral-800 pb-16 px-4 sm:px-6 lg:px-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-12 text-center text-4xl sm:text-5xl font-bold"
      >
        Certifications & Badges
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => (
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

export default Certifications;
