"use client";
import React from "react";

const Welcome = ({ onNextClick }) => {
    const scrollToAbout = () => {
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    };

    const scrollToSkills = () => {
        document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative flex justify-center items-center h-screen bg-gray-50 px-6 py-12">
            <div className="max-w-4xl w-full text-center">
                {/* Profile Image */}
                <div className="flex justify-center items-center mb-6">
                    <img 
                        src="/photo.png" 
                        alt="Nir Froimovich" 
                        className="rounded-full border border-black shadow-lg w-36 h-36 sm:w-36 sm:h-36 md:w-46 md:h-46 lg:w-64 lg:h-64 object-cover filter grayscale transition-all duration-300" 
                    />
                </div>

                {/* Welcome Text */}
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">{"Hi!"}</h1>
                <div className="flex justify-center items-center text-2xl sm:text-3xl font-semibold text-gray-700 mb-4 sm:mb-6">
                    <p className="text-black">My name is&nbsp;</p>
                    <h1 className="text-neutral-900">{"Nir Froimovich"}</h1>
                </div>

                {/* Buttons */}
                {/*
                <div className="flex flex-wrap gap-4 justify-center">
                    <button 
                        className="w-full sm:w-40 px-6 py-3 border border-gray-900 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-gray-200 hover:text-gray-900 transition duration-300"
                        onClick={scrollToAbout}
                    >
                        About Me
                    </button>
                    <button 
                        className="w-full sm:w-40 px-6 py-3 border border-gray-900 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-gray-200 hover:text-gray-900 transition duration-300"
                        onClick={scrollToSkills}
                    >
                        Skills
                    </button>
                </div>
                */}
            </div>
        </section>
    );
};

export default Welcome;
