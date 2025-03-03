import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInbox, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { CONTACT } from "@/config/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

const Contacts = () => {
  return (
    <section className="border-b border-neutral-800 pb-16 px-6 lg:px-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="mt-20 text-center text-4xl font-bold"
      >
        Get in Touch
      </motion.h2>
      <Card className="mt-8 bg-white/10 backdrop-blur-lg shadow-md p-6 text-center">
        <CardContent>
          <p className="text-lg text-neutral-400">
            Feel free to reach out via any platform below!
          </p>
          <div className="mt-6 flex items-center justify-center gap-6 text-3xl text-neutral-400">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link href={CONTACT.linkedin || "#"} target="_blank">
                    <FaLinkedin className="hover:text-blue-500 transition-all duration-200" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>LinkedIn</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <Link href={CONTACT.github || "#"} target="_blank">
                    <FaGithub className="hover:text-gray-500 transition-all duration-200" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>GitHub</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <Link href={CONTACT.instagram || "#"} target="_blank">
                    <FaInstagram className="hover:text-pink-500 transition-all duration-200" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>Instagram</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <Link href={`mailto:${CONTACT.email}`} target="_blank">
                    <FaInbox className="hover:text-red-500 transition-all duration-200" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>Email</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="mt-6">
            <Button asChild variant="outline">
              <a href={`mailto:${CONTACT.email}`} target="_blank">
                Send an Email
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Contacts;
