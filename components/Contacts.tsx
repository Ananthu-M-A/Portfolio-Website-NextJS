import React, { useEffect, useState } from "react";
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
import PulseLoader from "./ui/PulseLoader";

const Contacts = () => {
  const [submitted, setSubmitted] = useState(false);

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
        className="my-12 text-center text-4xl sm:text-5xl font-bold"
      >
        Get in Touch
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <Card className="mt-8 bg-white/10 backdrop-blur-lg shadow-md p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-cyan-500/50">
          <CardContent>
            <p className="text-lg text-neutral-400 mb-4">
              Feel free to reach out via any platform below or send a direct
              message!
            </p>
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col gap-4 items-center max-w-md mx-auto mb-8"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded bg-neutral-900 text-white border border-neutral-700 focus:border-cyan-400 outline-none transition"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded bg-neutral-900 text-white border border-neutral-700 focus:border-cyan-400 outline-none transition"
                required
              />
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-2 rounded bg-neutral-900 text-white border border-neutral-700 focus:border-cyan-400 outline-none transition"
                rows={4}
                required
              />
              <Button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold"
              >
                Send Message
              </Button>
              {typeof submitted !== "undefined" && submitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400 mt-2"
                >
                  Thank you! Your message has been sent.
                </motion.p>
              )}
            </motion.form>

            <div className="mt-6 flex items-center justify-center gap-8 text-3xl text-neutral-400">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Link href={CONTACT.linkedin || "#"} target="_blank">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 8 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaLinkedin className="hover:text-blue-500 transition-all duration-200" />
                      </motion.div>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>LinkedIn</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger>
                    <Link href={CONTACT.github || "#"} target="_blank">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 8 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub className="hover:text-gray-500 transition-all duration-200" />
                      </motion.div>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>GitHub</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger>
                    <Link href={CONTACT.instagram || "#"} target="_blank">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 8 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaInstagram className="hover:text-pink-500 transition-all duration-200" />
                      </motion.div>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Instagram</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger>
                    <Link href={`mailto:${CONTACT.email}`} target="_blank">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 8 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaInbox className="hover:text-red-500 transition-all duration-200" />
                      </motion.div>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Email</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="mt-6">
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <a href={`mailto:${CONTACT.email}`} target="_blank">
                  Send an Email
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default Contacts;
