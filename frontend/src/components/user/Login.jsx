import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Layout/Navbar";
import { useDispatch } from "react-redux";
import { login } from "@/actions/userActions";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData.name);
    const formData = new FormData();

    formData.append("email", userData.email);
    formData.append("password", userData.password);

    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    dispatch(login(userData));
  };

  return (
    <div className="max-w-7xl w-full relative">
      <Navbar />
      <section className="mt-20 w-full h-[600px] bg-white flex items-center justify-center px-6 md:px-16 rounded-2xl dark:bg-slate-950 shadow-xl pb-7 pt-7">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white leading-tight">
            Create a new Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={userData.email}
                onChange={handleInputChange}
                className="mt-3 block w-full px-4 py-2 border-0 border-gray-300 rounded-lg shadow-sm ring-2 focus:ring-blue-500 text-gray-800 dark:text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={userData.password}
                onChange={handleInputChange}
                className="mt-3 block w-full px-4 py-2 border-0 border-gray-300 rounded-lg shadow-sm ring-2 focus:ring-blue-500 text-gray-800 dark:text-white"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-300"
            >
              Login to Your Account
            </button>
            <div className="mt-6 text-center text-sm text-gray-300">
              Dont have any account?{" "}
              <a
                href="/signup"
                className="text-blue-600 hover:underline font-medium"
              >
                Sign up here
              </a>
            </div>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default Login;
