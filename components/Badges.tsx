import React, { useState, useEffect } from "react";
import PulseLoader from "@/components/ui/PulseLoader";
import { motion } from "framer-motion";

const CREDLY_RSS = process.env.NEXT_PUBLIC_CREDLY_BADGES_RSS || "";

const Badges = () => {
  const [badges, setBadges] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(CREDLY_RSS)
      .then((res) => res.json())
      .then((data) => {
        setBadges(data.items.slice(0, 3));
        setLoading(false);
      });
  }, []);

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
        Badges
      </motion.h2>
      {loading ? (
        <p className="text-center text-neutral-400">Loading badges...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge) => (
            <motion.a
              key={badge.link}
              href={badge.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="block bg-white/10 backdrop-blur-lg rounded-xl shadow-md p-6 hover:shadow-cyan-500/40 transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">
                {badge.title}
              </h3>
              <p className="text-neutral-400 text-sm mb-4">
                {badge.description?.substring(0, 120)}...
              </p>
              <span className="text-cyan-400 text-xs">
                {new Date(badge.pubDate).toLocaleDateString()}
              </span>
            </motion.a>
          ))}
        </div>
      )}
    </section>
  );
};

export default Badges;
