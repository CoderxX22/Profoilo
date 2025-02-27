"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "My Portfolio",
    description:
      "A personal portfolio website showcasing my projects and skills. Built using ReactJS, Tailwind CSS, and hosted on GitHub Pages.",
    technologies: ["ReactJS", "Tailwind CSS", "GitHub Pages"],
    image: "/Protfolio.png",
    link: "https://github.com/CoderxX22/Portfolio",
  },
  {
    title: "HealthVisualizer",
    description:"Our project is a modern web application for healthcare professionals and patients, enabling user management, medical data administration, and information visualization. Built with Next.js and Tailwind CSS, it offers a seamless and dynamic user experience.",
    technologies: ["NextJS", "Firebase", "Tailwind CSS", "User Based"],
    image: "/HealthVisualizer.png",
    link: "https://github.com/CoderxX22/WEB_project",
  },
  {
    title: "GoNature",
    description:
      "An application for finding and exploring outdoor activities and nature spots. Features a Java-based client-server architecture.",
    technologies: ["Java", "SQL", "Client-Server", "User Based"],
    image: "/exercise.jpg",
    link: "https://github.com/CoderxX22/GoNature",
  },
  {
    title: "SharkCloud",
    description:
      "An application for finding and exploring outdoor activities and nature spots. Features a Java-based client-server architecture.",
    technologies: ["Python", "Google Colab", "FireBase RealTime", "Search Engine"],
    image: "/SharkCloud.png",
    link: "https://github.com/CoderxX22/CISCOSHARK",
  },
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
    <section id="projects" className="relative bg-gray-100 dark:bg-gray-900 h-screen px-6 py-16 flex flex-col items-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">My Projects</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-3 font-light">
          A collection of my work, showcasing my skills and passion for development.
        </p>
      </div>

      <div className="relative w-full max-w-5xl p-5 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: direction * 100 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -direction * 100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col lg:flex-row items-center">
              <div
                className="w-full lg:w-1/2 h-64 lg:h-80 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url(${projects[currentIndex].image})` }}
              />
              <div className="w-full lg:w-1/2 p-6 text-center lg:text-left">
                <h3 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300">
                  {projects[currentIndex].title}
                </h3>
                <p className="text-gray-700 dark:text-neutral-300 mt-2">{projects[currentIndex].description}</p>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-400">Technologies Used:</p>
                  <div className="flex flex-wrap justify-center lg:justify-start mt-2">
                    {projects[currentIndex].technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 text-xs font-semibold rounded-full px-3 py-1 m-1"
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
                  className="mt-4 inline-block text-neutral-600 dark:text-neutral-400 font-semibold hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-neutral-600 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md hover:bg-neutral-700 transition"
          onClick={prevProject}
        >
          ◀
        </button>

        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-neutral-600 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md hover:bg-neutral-700 transition"
          onClick={nextProject}
        >
          ▶
        </button>
      </div>
    </section>
  );
};

export default Projects;