"use client";
import React from "react";

const Welcome = ({ darkMode }) => {
    return (
        <section id="welcome" className="relative flex justify-center items-center bg-gray-50 h-full lg:h-screen md:h-[150vh] dark:bg-neutral-600 px-6 py-8">
            <div className="max-w-4xl w-full text-center">
                {/* Profile Image */}
                <div className="flex justify-center items-center mb-6">
                    <img 
                        src="/photo.png" 
                        alt="Nir Froimovich" 
                        className={`rounded-full border border-black shadow-lg w-46 h-46 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 object-cover transition-all mt-10 duration-300 filter grayscale`} 
                    />
                </div>

                <div className="flex justify-center items-center gap-x-4 mb-6">
                    <a href="https://github.com/CoderxX22" target="_blank" rel="noopener noreferrer">
                        <img 
                            src="/github.png" 
                            alt="Github"
                            className="rounded-full w-10 h-10 transition-all" 
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/nir-froimovich-33156a185/" target="_blank" rel="noopener noreferrer">
                        <img 
                            src="/linkedin.png" 
                            alt="LinkedIn"
                            className="w-10 h-10 transition-all" 
                        />
                    </a>
                </div>


                {/* Welcome Text */}
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 sm:mb-6">{"Hi!"}</h1>
                <div className="flex justify-center items-center text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4 sm:mb-6">
                    <p className="text-black dark:text-white font-light">My name is&nbsp;</p>
                    <h1 className="text-neutral-900 dark:text-neutral-200">{"Nir Froimovich"}</h1>
                </div>
                <h1 className="text-neutral-900 dark:text-neutral-200 text-xl font-thin font-">"The Juniors Of Today Are The Seniors Of Tommorow"</h1>
            </div>
        </section>
    );
};

export default Welcome;
