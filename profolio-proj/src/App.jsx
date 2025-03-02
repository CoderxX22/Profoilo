"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Welcome from "./components/welcome";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/ContactMe";
import useTrackVisitors from "./hooks/firabase";

function App() {
    // State to toggle dark mode
    const [darkMode, setDarkMode] = useState(false);
    useTrackVisitors();

    // Load dark mode state from localStorage and set the class on mount
    useEffect(() => {
        const savedMode = localStorage.getItem("darkMode");
        if (savedMode === "true") {
          setDarkMode(true);
          document.documentElement.classList.add("dark"); // Force the dark class
        } else {
          setDarkMode(false);
          document.documentElement.classList.remove("dark"); // Remove dark class if not enabled
        }
      }, []);
      

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode((prevMode) => {
            const newMode = !prevMode;
            if (newMode) {
                document.documentElement.classList.add("dark");
                localStorage.setItem("darkMode", "true");
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("darkMode", "false");
            }

            // Log to check if the class is toggling correctly
            console.log("Dark mode class after toggle:", document.documentElement.classList);
            return newMode;
        });
    };

    return (
        <div className={`relative min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-white overflow-x-hidden`}>
            <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

            {/* Dark Mode Toggle Button */}
            <div className="absolute top-4 right-4">
                <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white focus:outline-none"
                >
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </div>

            {/* Main Page (Welcome, About, Skills, Projects, Contact) */}
            <div className="flex flex-col">
                <Welcome darkMode={darkMode} />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>

            {/* Footer */}
            <footer className="text-center text-gray-600 dark:text-gray-300 py-4 bg-neutral-300 dark:bg-neutral-800">
                &copy; {new Date().getFullYear()} Nir Froimovich. All rights reserved.
            </footer>
        </div>
    );
}

export default App;
