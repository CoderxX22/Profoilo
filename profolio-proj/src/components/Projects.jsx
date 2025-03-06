"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "HealthVisualizer",
    description:
      "The project is a modern web application for healthcare professionals and patients, enabling user management, medical data administration, and information visualization.",
    technologies: ["Fullstack","NextJS", "Firebase", "Tailwind CSS", "User Based"],
    image: "/HealthVisualizer.png",
    link: "https://github.com/CoderxX22/WEB_poject.git",
  },
  {
    title: "GoNature",
    description:
      "An application for finding and exploring outdoor activities and nature spots. Features a Java-based client-server architecture.",
    technologies: ["Java", "SQL", "Client-Server", "User Based"],
    image: "/image.png",
    link: "https://github.com/CoderxX22/GoNature.git",
  },
  {
    title: "SharkCloud",
    description:
    "A search engine to find links for Cisco solutions, utilizing Python libraries for design and scraping. The results are organized into two levels: scrapper activation and Firebase DB. Additionally, there are screens for statistics and analysis.",
    technologies: ["Python", "Google Colab", "FireBase RealTime", "Search Engine"],
    image: "/SharkCloud.png",
    link: "https://github.com/CoderxX22/CISCOSHARK.git",
  },
  {
    title: "My Portfolio",
    description:
      "A personal portfolio website showcasing my projects and skills. Built using ReactJS, Tailwind CSS, and hosted on Netlify.",
    technologies: ["Fullstack","ReactJS", "Tailwind CSS", "Netlify","Firebase","EmailJS"],
    image: "/Protfolio.png",
    link: "https://github.com/CoderxX22/Profoilo.git",
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="projects" className="relative bg-gray-100 dark:bg-neutral-700 md:min-h-[80vh] min-h-screen px-6 py-16 flex flex-col items-center">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800 dark:text-white">My Projects</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mt-3 font-light">
          A collection of my work, showcasing my skills and passion for development.
        </p>
      </div>

      <div className="relative w-full max-w-5xl p-5 bg-white dark:bg-neutral-800 rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: direction * 100 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -direction * 100 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col md:flex-row items-center justify-center"
          >
            {/* Background Blur Image */}
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg blur-md dark:invert-100 dark:grayscale-100"
              style={{
                backgroundImage: `url(${projects[currentIndex].image})`,
              }}
            />

            {/* Project Details */}
            <div className="relative w-full lg:w-1/2 p-4 md:p-6 text-center z-10">
              <h3 className="text-3xl md:text-4xl font-semibold text-neutral-700 dark:text-neutral-300">
                {projects[currentIndex].title}
              </h3>
              <p className="text-lg md:text-xl text-gray-700 dark:text-neutral-300 mt-4 font-light">
                {projects[currentIndex].description}
              </p>
              <div className="mt-4">
                <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-400">Technologies Used:</p>
                <div className="flex flex-wrap justify-center mt-2">
                  {projects[currentIndex].technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-neutral-300 text-neutral-800 dark:bg-neutral-600 dark:text-neutral-200 text-xs font-semibold rounded-full px-3 py-1 m-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={projects[currentIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-neutral-600 dark:text-neutral-200 font-semibold hover:underline"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition z-50"
          onClick={prevProject}
        >
          <ChevronLeft size={40} />
        </button>

        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition z-50"
          onClick={nextProject}
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </section>

  );
};

export default Projects;
