/* // src/components/ProductList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("http://127.0.0.1:8000/api/products/");
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {products.map((product) => (
        <motion.div
          key={product.id}
          className="bg-white p-4 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300"
          variants={item}
        >
          {product.images.length > 0 && (
            <img
              src={`http://127.0.0.1:8000${product.images[0].image}`}
              alt={product.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
          )}
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-700 mb-2">
            {product.description.substring(0, 60)}...
          </p>
          <p className="text-lg font-bold text-indigo-600">${product.price}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProductList;
 */

import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/productActions";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsState);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <section className="w-full py-16 bg-white dark:bg-slate-950 mt-12 rounded-2xl shadow-xl">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center"
      >
        Our Products
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {products &&
          products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white p-4 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300"
              variants={item}
            >
              {product.images.length > 0 && (
                <img
                  src={`http://127.0.0.1:8000${product.images[0].image}`}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
              )}
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-2">
                {product.description.substring(0, 60)}...
              </p>
              <p className="text-lg font-bold text-indigo-600">
                ${product.price}
              </p>
            </motion.div>
          ))}
      </motion.div>
    </section>
  );
};

export default ProductList;
