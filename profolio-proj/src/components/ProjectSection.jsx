"use client";
import React from "react";
import { Carousel } from "react-bootstrap"; // Import Carousel from React Bootstrap

const ProjectSection = () => {
  return (
    <section id="projectSection" className="relative bg-gray-50 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-6">
        {/* Project Carousel */}
        <Carousel>
          {[
            {
              name: "Portfolio",
              description:
                "A personal portfolio website showcasing my projects and skills.",
              technologies: "ReactJS, Tailwind CSS, GitHub Pages",
              link: "https://github.com/CoderxX22/Portfolio",
            },
            {
              name: "HealthVizualizer",
              description:
                "A web app that helps users visualize their health data and trends.",
              technologies: "NextJS, Tailwind CSS, Firebase, User Based",
              link: "https://github.com/CoderxX22/WEB_project",
            },
            {
              name: "GoNature",
              description:
                "A nature-based app helping users find nearby outdoor activities and places.",
              technologies: "Java, SQL, GUI, Client-Server Communication, User Based",
              link: "https://github.com/CoderxX22/GoNature",
            },
            {
              name: "Shark Cloud",
              description:
                "A cloud-based service for shark conservation and tracking.",
              technologies: "Python, Google Colab, Firebase RealTime DB",
              link: "/SharkCloud",
            },
          ].map((project, index) => (
            <Carousel.Item key={index}>
              <Carousel.Caption>
                {/* Project Name */}
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {project.name}
                </h3>

                {/* Project Description */}
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                  Technologies: {project.technologies}
                </p>
                
                {/* Link */}
                <a 
                  href={project.link} 
                  className="text-blue-500 hover:underline" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectSection;
