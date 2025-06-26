import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Menu, Sun, Moon } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "../theme-provider";
import { useSelector } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Link, Links } from "react-router";

const navLinks = ["Home", "Shop", "About", "Contact"];

const Navbar = () => {
  const { setTheme } = useTheme();

  const { isAuthenticated, user } = useSelector((state) => state.authState);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-white dark:bg-slate-950 shadow-md absolute top-2 left-0 z-10 rounded-2xl"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-gray-800 dark:text-gray-300"
        >
          <Link to={"/"}>ShopEase</Link>
        </motion.div>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={`#${link.toLowerCase()}`}
              whileHover={{ scale: 1.1, color: "#2563eb" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-gray-600 dark:text-gray-300 dark:hover:text-blue-300 hover:text-blue-600 font-medium"
            >
              {link}
            </motion.a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex gap-4 justify-center items-center">
          {/*theme */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* Right Side: Cart Icon */}
          {isAuthenticated ? (
            <img
              src={`http://localhost:8000${user.avatar}`}
              className=" rounded-full size-8 bg-red-500 object-cover"
            />
          ) : (
            <>
              <Button
                className="cursor-pointer border-2 font-semibold text-md"
                variant="ghost"
              >
                <Link to={"/login"}>Login</Link>
              </Button>
              <Button className="cursor-pointer border-2 font-semibold text-md">
                <Link to={"/signup"}>Signup</Link>
              </Button>
            </>
          )}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="relative cursor-pointer"
          >
            <ShoppingCart className="text-gray-700 dark:text-gray-300" />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full">
              2
            </span>
          </motion.div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <Menu className="text-gray-700 dark:text-gray-300" />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
