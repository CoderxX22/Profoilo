"use client";
import React, { useState } from "react";
import Welcome from "./welcome";
import Projects from "./Projects";

const Parent = () => {
    const [activeSection, setActiveSection] = useState("welcome");

    const handleNextClick = () => {
        setActiveSection("projects");
    };

    return (
        <div className="overflow-hidden w-full h-screen">
            <div 
                className={`flex transition-transform duration-700 ease-in-out ${
                    activeSection === "projects" ? "-translate-x-full" : "translate-x-0"
                }`}
                style={{ width: "200%" }} // Makes space for both sections
            >
                {/* Welcome Section */}
                <div className="w-full min-w-full">
                    <Welcome onNextClick={handleNextClick} />
                </div>

                {/* Projects Section */}
                <div className="w-full min-w-full">
                    <Projects />
                </div>
            </div>
        </div>
    );
};

export default Parent;
