"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import DarkmodeToggle from "./DarkmodeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth scroll function
  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`transition-all shadow-lg duration-300 fixed top-0 left-0 w-full z-50 ${
        scrolled ? "bg-neutral-800 text-white shadow-lg dark:bg-neutral-300 dark:text-neutral-700" : "bg-white text-black dark:bg-neutral-800 dark:text-white"
      }`}
    >
      <div className="container mx-auto py-3 flex justify-between items-center sm:justify-center md:justify-between md:px-0 px-4">
        <a
          href="#welcome"
          className="text-xl font-stretch-50% font-extrabold transition-all duration-300"
          onClick={(e) => smoothScroll(e, "#welcome")}
        >
          NF
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none transition-all duration-300 sm:absolute sm:right-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden md:flex space-x-6 font-mono justify-center flex-1">
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:text-gray-400 transition-all duration-300" onClick={(e) => smoothScroll(e, "#about")}>About</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-gray-400 transition-all duration-300" onClick={(e) => smoothScroll(e, "#skills")}>Skills</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-400 transition-all duration-300" onClick={(e) => smoothScroll(e, "#projects")}>Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400 border-1 rounded-lg py-2 px-4 transition-all duration-300" onClick={(e) => smoothScroll(e, "#contact")}>Contact me</a>
            </li>
          </ul>
        </div>
        
        {/* Dark Mode Toggle - Only visible in desktop view */}
        <div className="hidden md:block mr-4">
          <DarkmodeToggle />
        </div>
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-neutral-800 text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden shadow-lg`}
      >
        <button className="absolute top-5 right-5" onClick={() => setIsOpen(false)}>
          <X size={24} />
        </button>
        <ul className="flex flex-col items-center mt-16 space-y-6 text-lg">
          <li>
            <a href="#about" className="hover:text-gray-400 transition-all duration-300" onClick={(e) => smoothScroll(e, "#about")}>About</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-gray-400 transition-all duration-300" onClick={(e) => smoothScroll(e, "#skills")}>Skills</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400 transition-all duration-300" onClick={(e) => smoothScroll(e, "#projects")}>Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400 border-1 rounded-lg py-2 px-4 transition-all duration-300" onClick={(e) => smoothScroll(e, "#contact")}>Contact me</a>
          </li>
          
          {/* Dark Mode Toggle in Mobile Menu */}
          <li className="mt-4">
            <DarkmodeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
