import React from "react";
import logo from "../public/logo.png";
import {
  FaGithub,
  FaInbox,
  FaInstagram,
  FaLinkedin,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { StaticImageData } from "next/legacy/image";
import { CONTACT } from "@/config/constants";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

const container = (delay: number) => ({
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.4, delay } },
});

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 z-50 w-full backdrop-blur-lg bg-white/70 dark:bg-black/40 shadow-md px-6 py-4 flex items-center justify-between">
      <div className="flex items-center">
        <motion.img
          variants={container(0.3)}
          initial="hidden"
          animate="visible"
          className="w-12 h-12 rounded-lg"
          src={(logo as StaticImageData).src}
          alt="logo"
        />
      </div>
      <div className="flex items-center gap-4">
        {[
          { icon: FaLinkedin, href: CONTACT.linkedin, label: "LinkedIn" },
          { icon: FaGithub, href: CONTACT.github, label: "GitHub" },
          { icon: FaInbox, href: `mailto:${CONTACT.email}`, label: "Email" },
          { icon: FaInstagram, href: CONTACT.instagram, label: "Instagram" },
        ].map(({ icon: Icon, href, label }, index) => (
          <motion.div
            key={index}
            variants={container(0.5 + index * 0.2)}
            initial="hidden"
            animate="visible"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      <Icon className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{label}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </motion.div>
        ))}
        <motion.div
          variants={container(1.5)}
          initial="hidden"
          animate="visible"
        >
          <Switch
            checked={theme === "dark"}
            onCheckedChange={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
          />
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
