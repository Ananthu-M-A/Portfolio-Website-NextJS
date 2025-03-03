"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import { FaGithub, FaInbox, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { CONTACT } from "@/config/constants";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const fadeIn = (delay: number) => ({
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay } },
});

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full backdrop-blur-lg bg-black dark:bg-black/40 shadow-md px-6 lg:px-16 py-4 flex items-center justify-between border-b border-gray-700 dark:border-gray-300">
      <motion.div variants={fadeIn(0.2)} initial="hidden" animate="visible">
        <Image
          src={logo}
          alt="Logo"
          width={48}
          height={48}
          className="rounded-lg border-2 border-gray-700 dark:border-gray-300"
        />
      </motion.div>
      <div className="flex items-center gap-4">
        {[
          { icon: FaLinkedin, href: CONTACT.linkedin, label: "LinkedIn" },
          { icon: FaGithub, href: CONTACT.github, label: "GitHub" },
          { icon: FaInbox, href: `mailto:${CONTACT.email}`, label: "Email" },
          { icon: FaInstagram, href: CONTACT.instagram, label: "Instagram" },
        ].map(({ icon: Icon, href, label }, index) => (
          <motion.div
            key={index}
            variants={fadeIn(0.3 + index * 0.2)}
            initial="hidden"
            animate="visible"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Icon className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all" />
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent>{label}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </motion.div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
