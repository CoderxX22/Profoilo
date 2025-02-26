"use client"
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkmodeToggle";

const NavbarFroProj = () => {
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

  return (
    <nav
      className={`transition-all shadow-lg duration-300 fixed top-0 left-0 w-full z-50 ${
        scrolled ? "bg-neutral-800 text-white shadow-lg" : "bg-transparent text-black"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/welcome" className="text-xl font-mono font-extrabold">
          Nir's Portfolio
        </a>
        <ul className="hidden md:flex space-x-6 font-mono justify-center flex-1">
          <li>
            <a href="/welcome" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">
              Contact me
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Dark Mode Toggle */}
      </div>
    </nav>
  );
};

export default NavbarFroProj;
