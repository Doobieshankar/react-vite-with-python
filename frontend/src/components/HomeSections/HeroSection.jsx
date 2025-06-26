import React from "react";
import { motion, scale } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="mt-20 w-full bg-white flex items-center justify-center px-6 md:px-16 rounded-2xl dark:bg-slate-950 shadow-xl pb-7 pt-7"
      id="home"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Discover the Latest Trends in Fashion
          </h1>
          <p className="text-gray-600 text-lg dark:text-gray-300">
            Shop the best styles from top brands at unbeatable prices.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md"
          >
            Shop Now
          </motion.button>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="overflow-hidden rounded-2xl"
        >
          <motion.img
            src="/images/hero.jpg"
            alt="Fashion Model"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full h-auto rounded-3xl shadow-lg object-cover"
          />
        </motion.div>
        {/* <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full h-[500px] rounded-3xl overflow-hidden shadow-lg"
        >
          <motion.img
            src="/images/hero.jpg"
            alt="Fashion Model"
            whileHover={{ scale: 1.1 }}
            className="w-full h-full object-cover"
          />
        </motion.div> */}
      </div>
    </section>
  );
};

export default HeroSection;
