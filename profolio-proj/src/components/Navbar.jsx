"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkmodeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true); // Change navbar style after scrolling 50px
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scroll behavior
    });
  };

  return (
    <nav
      className={`transition-all shadow-lg duration-300 fixed top-0 left-0 w-full z-50 ${
        scrolled ? "bg-neutral-800 text-white shadow-lg" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto py-3 flex justify-between items-center">
        <a 
          href="" 
          className="text-xl font-stretch-50% font-extrabold transition-all duration-300"
          onClick={scrollToTop} // Add scroll to top on Home link click
        >
          NF
        </a>
        <ul className="hidden md:flex space-x-6 font-mono justify-center flex-1">
          <li>
            <a href="#about" className="hover:text-gray-400 transition-all duration-300">
              About
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className="hover:text-gray-400 transition-all duration-300"
              onClick={scrollToTop} // Scroll to top on "Home" link click
            >
              skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400 transition-all duration-300">
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="hover:text-gray-400 border-1 rounded-lg py-2 px-4 transition-all duration-300"
            >
              Contact me
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Dark Mode Toggle */}
      </div>
    </nav>
  );
};

export default Navbar;
