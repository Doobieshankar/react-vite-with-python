import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Layout/Navbar";
import { useDispatch } from "react-redux";
import { register } from "@/actions/userActions";

const Signup = () => {
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("/images/hero.jpg");

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(e.target.files[0]);
          setUserData({ ...userData, [e.target.name]: e.target.files[0] });
        }
      };

      reader.readAsDataURL(e.target.files[0]);

      //console.log("current userData ", userData);
    } else {
      const { name, value } = e.target;
      setUserData({ ...userData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData.name);
    const formData = new FormData();
    formData.append("name", userData.name);
    formData.append("email", userData.email);
    formData.append("password", userData.password);
    formData.append("avatar", avatar);

    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    dispatch(register(formData));
  };

  return (
    <div className="max-w-7xl w-full relative">
      <Navbar />
      <section className="mt-20 w-full bg-white flex items-center justify-center px-6 md:px-16 rounded-2xl dark:bg-slate-950 shadow-xl pb-7 pt-7">
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
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={userData.name}
                onChange={handleInputChange}
                className="mt-3 block w-full px-4 py-2 border-0 border-gray-300 rounded-lg shadow-sm ring-2 focus:ring-blue-500 text-gray-800 dark:text-white"
                required
                autoComplete="on"
              />
            </div>
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
            <div>
              <label
                htmlFor="avatar_upload"
                className="block text-white font-medium mb-2"
              >
                Avatar
              </label>
              <div className="flex flex-col sm:flex-row items-center p-2 space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="w-full sm:w-auto">
                  <figure className="flex justify-center">
                    <img
                      src={avatarPreview}
                      className="rounded-full object-cover size-8 sm:size-12"
                      alt="Avatar"
                    />
                  </figure>
                </div>
                <div className="flex flex-col items-center w-full sm:w-auto">
                  <input
                    type="file"
                    name="avatar"
                    onChange={handleInputChange}
                    className="mt-3 block w-full px-4 py-2 border-0 border-gray-300 rounded-lg shadow-sm ring-2 focus:ring-blue-500 text-gray-800 dark:text-white"
                    id="customFile"
                    required
                  />
                  <label
                    htmlFor="customFile"
                    className="mt-2 block hover:text-blue-600 cursor-pointer"
                  >
                    Choose Avatar
                  </label>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-300"
            >
              Create Account
            </button>
            <div className="mt-6 text-center text-sm text-gray-300">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-blue-600 hover:underline font-medium"
              >
                Log in here
              </a>
            </div>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default Signup;
