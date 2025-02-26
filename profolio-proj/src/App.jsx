"use client"
import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Welcome from './components/welcome';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects'; // Import Projects component

function App() {
    // State to toggle dark mode
    const [darkMode, setDarkMode] = useState(false);
    const [showProjects, setShowProjects] = useState(false); // State to show Projects

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark'); // Add/remove 'dark' class from <html>
    };

    // Function to handle the "next" button click
    const onNextClick = () => {
        setShowProjects(true); // This will show the Projects component
        window.scrollTo({
            top: 0,
            left: window.innerWidth, // Move page to the left
            behavior: "smooth",
        });
    };

    return (
        <div>
            <div className="relative min-h-screen md:h-auto sm:h-auto bg-gray-50 dark:bg-gray-700">
                <Navbar />
                <Welcome onNextClick={onNextClick} /> {/* Pass the onNextClick to Welcome */}
                <About />
                <Skills />
                
                {showProjects && <Projects />} {/* Conditionally render the Projects component */}
            </div>
            <footer className="text-center text-gray-600 dark:text-gray-300 py-4">
                &copy; {new Date().getFullYear()} Nir Froimovich. All rights reserved.
            </footer>
        </div>
    );
}

export default App;
