"use client"
import React from "react"

const About = () => {
    return(
        <section id="about" className="flex justify-center items-center max-h-full lg:h-full md:h-fit bg-neutral-100 dark:bg-neutral-700 px-6 py-12">
            <div className="max-w-4xl w-full text-center">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-50 mb-6">About Me</h1>
                <p className="text-xl text-gray-700 font-light leading-relaxed mb-8 dark:text-gray-50">
                    Hi, I'm <span className="font-semibold text-gray-900 dark:text-gray-200">Nir Froimovich</span>, a fourth-year Software Engineering student at Braude College with a strong interest in AI, machine learning, and backend development. I enjoy solving complex problems, optimizing algorithms, and building scalable systems. 
                </p>
                <p className="text-xl text-gray-700 font-light leading-relaxed dark:text-gray-50">
                    My technical skills include Python, Java, C, and a solid understanding of data structures and algorithms. I'm looking to leverage my knowledge and experience in a software engineering role where I can continue to learn, grow, and contribute to innovative projects.
                </p>
            </div>
        </section>
    );
};

export default About;
