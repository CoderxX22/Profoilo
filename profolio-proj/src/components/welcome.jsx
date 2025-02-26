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
                        className="rounded-full border border-black shadow-lg w-56 h-56 object-cover filter grayscale transition-all duration-300" 
                    />
                </div>

                {/* Welcome Text */}
                <h1 className="text-5xl font-bold text-gray-800 mb-6">{"Hi!"}</h1>
                <div className="flex justify-center items-center text-4xl font-semibold text-gray-700 mb-6">
                    <p className="text-black">My name is&nbsp;</p>
                    <h1 className="text-neutral-900">{"Nir Froimovich"}</h1>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 justify-center">
                    <button 
                        className="w-40 px-6 py-3 border border-gray-900 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-gray-200 hover:text-gray-900 transition duration-300"
                        onClick={scrollToAbout}
                    >
                        About Me
                    </button>
                    <button 
                        className="w-40 px-6 py-3 border border-gray-900 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-gray-200 hover:text-gray-900 transition duration-300"
                        onClick={scrollToSkills}
                    >
                        Skills
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Welcome;
