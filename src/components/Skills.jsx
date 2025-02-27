"use client"
import React, { useEffect, useState } from "react";

const Skills = () => {
    const [animationStarted, setAnimationStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setAnimationStarted(true);
                }
            },
            { threshold: 0.5 }
        );

        const skillsSection = document.getElementById("skills");
        if (skillsSection) {
            observer.observe(skillsSection);
        }

        return () => {
            if (skillsSection) {
                observer.unobserve(skillsSection);
            }
        };
    }, []);

    return (
        <section id="skills" className="relative min-h-screen bg-gray-50 dark:bg-gray-800 py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-center items-center flex-col mb-12">
                    <h1 className="text-4xl font-semibold text-gray-800 dark:text-white mb-4">Skills</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 font-light leading-relaxed text-center max-w-3xl ">
                        Here's a quick overview of my skills in various areas. I'm constantly improving and learning to keep up with the latest trends in software engineering.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-center gap-6">
                    {[
                        "ReactJS/NextJS",
                        "Git and GitHub",
                        "Machine Learning",
                        "AI Based Algorithms",
                        "Python",
                        "OOP by Java",
                        "C",
                        "SQL",
                        "Data Structures and Algorithms",
                        "Cloud Principles"
                    ].map((skill, index) => (
                        <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 flex justify-center items-center h-32">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center">{skill}</h3>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center flex-col">
                    <p className="text-xl text-gray-700 font-light leading-relaxed mt-20">
                        And More...                    
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Skills;