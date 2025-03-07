"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import {
  FaGithub,
  FaInbox,
  FaInstagram,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";
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

interface NavbarProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const Navbar = ({ containerRef }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setIsScrolled(containerRef.current.scrollTop > 0);
      }
    };

    const currentContainer = containerRef.current;
    if (currentContainer) {
      currentContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [containerRef]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const socialLinks = [
    { icon: FaLinkedin, href: CONTACT.linkedin, label: "LinkedIn" },
    { icon: FaGithub, href: CONTACT.github, label: "GitHub" },
    { icon: FaInbox, href: `mailto:${CONTACT.email}`, label: "Email" },
    { icon: FaInstagram, href: CONTACT.instagram, label: "Instagram" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full backdrop-blur-lg bg-black dark:bg-black/40 shadow-md px-6 lg:px-16 py-4 flex items-center justify-between border-b transition-all ${
        isScrolled
          ? "border-gray-700 dark:border-gray-300 shadow-lg"
          : "border-transparent"
      }`}
    >
      <motion.div variants={fadeIn(0.2)} initial="hidden" animate="visible">
        <Image
          src={logo}
          alt="Logo"
          width={48}
          height={48}
          className="rounded-lg border-2 border-gray-700 dark:border-gray-300"
        />
      </motion.div>

      <div className="hidden md:flex items-center gap-4">
        {socialLinks.map(({ icon: Icon, href, label }, index) => (
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

      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all"
      >
        {isMobileMenuOpen ? (
          <FaTimes className="text-2xl" />
        ) : (
          <FaBars className="text-2xl" />
        )}
      </button>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-16 right-0 w-full bg-black dark:bg-black/90 backdrop-blur-lg shadow-lg py-4 px-6"
        >
          <div className="flex flex-col items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all"
              >
                <Icon className="text-2xl" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
