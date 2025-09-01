import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface MediumArticle {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

const MEDIUM_RSS =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ananthumapookkad";

const Blog = () => {
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(MEDIUM_RSS)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.items.slice(0, 3));
        setLoading(false);
      });
  }, []);

  return (
    <section className="border-b border-neutral-800 pb-16 px-4 sm:px-6 lg:px-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-12 text-center text-4xl sm:text-5xl font-bold"
      >
        Latest Articles
      </motion.h2>
      {loading ? (
        <p className="text-center text-neutral-400">Loading articles...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <motion.a
              key={article.link}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="block bg-white/10 backdrop-blur-lg rounded-xl shadow-md p-6 hover:shadow-cyan-500/40 transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">
                {article.title}
              </h3>
              <p
                className="text-neutral-400 text-sm mb-4"
                dangerouslySetInnerHTML={{
                  __html: article.description.substring(0, 120) + "...",
                }}
              />
              <span className="text-cyan-400 text-xs">
                {new Date(article.pubDate).toLocaleDateString()}
              </span>
            </motion.a>
          ))}
        </div>
      )}
    </section>
  );
};

export default Blog;
