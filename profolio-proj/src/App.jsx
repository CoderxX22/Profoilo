"use client";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
    // State to toggle dark mode
    const [darkMode, setDarkMode] = useState(false);
    const [showProjects, setShowProjects] = useState(false); // State to track if projects should be shown

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark"); // Add/remove 'dark' class from <html>
    };

    return (
        <div className={`relative min-h-screen md:h-auto sm:h-auto bg-gray-50 dark:bg-gray-700 overflow-hidden`}>
            <Navbar />
            
            {/* Sliding Container */}
            <div className={`flex transition-transform duration-700 ease-in-out`}>
                {/* Main Page (Welcome, About, Skills) */}
                <div className="w-full min-w-full">
                    <Welcome/>
                    <About />
                    <Skills />
                    <Projects/>
                </div>
            </div>

            {/* Footer */}
            <footer className="text-center text-gray-600 dark:text-gray-300 py-4 bg-neutral-300">
                &copy; {new Date().getFullYear()} Nir Froimovich. All rights reserved.
            </footer>
        </div>
    );
}

export default App;
