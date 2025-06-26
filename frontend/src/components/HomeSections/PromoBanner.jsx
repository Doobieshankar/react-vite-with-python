import React from "react";
import { motion } from "framer-motion";

const PromoBanner = () => {
  return (
    <section className="w-full bg-gradient-to-r from-blue-600 to-indigo-900 py-12 px-4 mt-12">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center text-white rounded-2xl p-8 bg-white/10 backdrop-blur-lg shadow-lg"
      >
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          🎉 Limited Time Offer!
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl mb-6"
        >
          Get <span className="font-bold">20% OFF</span> on your first order.
          Use code: <span className="underline">WELCOME20</span>
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-xl transition"
        >
          Shop Now
        </motion.button>
      </motion.div>
    </section>
  );
};

export default PromoBanner;
