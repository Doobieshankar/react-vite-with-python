import React from "react";
import { motion } from "framer-motion";

// Dummy Categories Data
const categories = [
  {
    id: 1,
    name: "Men's Fashion",
    image: "/images/ct1.jpg",
  },
  {
    id: 2,
    name: "Women's Fashion",
    image: "/images/ct2.jpg",
  },
  {
    id: 3,
    name: "Electronics",
    image: "/images/ct3.jpg",
  },
  {
    id: 4,
    name: "Accessories",
    image: "/images/ct4.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Categories = () => {
  return (
    <section className="w-full py-16 bg-white dark:bg-slate-950 mt-12 rounded-2xl shadow-xl">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-12"
        >
          Shop by Categories
        </motion.h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover"
              />
              <div className="bg-white p-4">
                <h3 className="text-lg font-semibold text-gray-700">
                  {category.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
