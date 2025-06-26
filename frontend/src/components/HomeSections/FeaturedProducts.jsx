import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    title: "Stylish Sneakers",
    price: "$120",
    image: "/images/Sneakers.jpg",
  },
  {
    id: 2,
    title: "Elegant Watch",
    price: "$250",
    image: "/images/Watch.jpg",
  },
  {
    id: 3,
    title: "Designer Handbag",
    price: "$320",
    image: "/images/Handbag.jpg",
  },
  {
    id: 4,
    title: "Cool Sunglasses",
    price: "$80",
    image: "/images/Sunglasses.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const FeaturedProducts = () => {
  return (
    <section
      className="w-full py-16 bg-gray-50 mt-12 rounded-2xl dark:bg-slate-950 shadow-xl"
      id="shop"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-12"
        >
          Featured Products
        </motion.h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-slate-950 p-4 rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer flex flex-col items-center dark:shadow-blue-300 dark:shadow-2xs dark:hover:shadow-md "
            >
              <div className="overflow-hidden w-full rounded-xl mb-4">
                <motion.img
                  src={product.image}
                  alt={product.title}
                  whileHover={{ scale: 1.1 }}
                  className="w-full h-48 object-cover rounded-xl "
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                {product.title}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-bold mt-2">
                {product.price}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
