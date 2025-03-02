"use client";
import React from "react";

const Welcome = ({ darkMode }) => {
    return (
        <section className="relative flex justify-center items-center h-screen bg-gray-50 sm:h-screen md:h-sc dark:bg-neutral-600 px-6 py-12">
            <div className="max-w-4xl w-full text-center">
                {/* Profile Image */}
                <div className="flex justify-center items-center mb-6">
                    <img 
                        src="/photo.png" 
                        alt="Nir Froimovich" 
                        className={`rounded-full border border-black shadow-lg w-36 h-36 sm:w-36 sm:h-36 md:w-42 md:h-42 lg:w-64 lg:h-64 object-cover transition-all mt-10 duration-300 filter grayscale`} 
                    />
                </div>

                {/* Welcome Text */}
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 sm:mb-6">{"Hi!"}</h1>
                <div className="flex justify-center items-center text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4 sm:mb-6">
                    <p className="text-black dark:text-white">My name is&nbsp;</p>
                    <h1 className="text-neutral-900 dark:text-neutral-200">{"Nir Froimovich"}</h1>
                </div>
            </div>
        </section>
    );
};

export default Welcome;
