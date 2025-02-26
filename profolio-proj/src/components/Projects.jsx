"use client";
import React from "react";
import ProjectSection from "./ProjectSection";

const Projects = ({ onBackClick }) => {
    return (
        <section id="projects" className="relative bg-gray-100 dark:bg-gray-800 h-screen px-6 py-16 overflow-hidden">
            <div className="max-w-5xl mx-auto text-center">

                {/* Header Section */}
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6 mt-6">My Projects</h1>
                <p className="text-xl text-gray-700 dark:text-gray-300 font-light leading-relaxed mb-8">
                    Explore some of the projects I've worked on during my journey as a software engineering student. 
                    From practical applications to creative experiments, these projects showcase my growth and passion for development.
                </p>

                {/* "Down" Button with space between text and icon */}
                <div className="flex justify-center mt-20">
                    <img
                        src="/down-arrow.png"
                        alt="Scroll Down"
                        className="w-16 h-16 object-cover filter grayscale transition-all duration-300 opacity-60 animate-bounce"
                    />
                </div>
            </div>

            {/* ProjectSection placed below */}
            <ProjectSection />
        </section>
    );
};

export default Projects;
