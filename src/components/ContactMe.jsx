"use client";
import { useState } from "react";
import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [isCompany, setIsCompany] = useState(false);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [sendCV, setSendCV] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [statusType, setStatusType] = useState(""); // "success" or "error"
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            setEmailError("Please enter a valid email address.");
            return;
        }
        
        setEmailError("");
        setStatusMessage(""); // Reset previous message

        const emailData = {
            name,
            email,
            message,
            isCompany: isCompany ? "Yes" : "No",
            companyName,
            sendCV: sendCV ? "Yes" : "No",
        };

        emailjs.send('service_423wnkn', 'template_8yx4t59', emailData, 'gsr529LqTVxZosW70')
            .then(() => {
                setStatusMessage("Your message has been sent successfully!");
                setStatusType("success");
                setShowPopup(true);
                
                // Clear form after submission
                setName("");
                setEmail("");
                setMessage("");
                setIsCompany(false);
                setCompanyName("");
                setSendCV(false);
            })
            .catch(() => {
                setStatusMessage("Something went wrong. Please try again.");
                setStatusType("error");
                setShowPopup(true);
            });

        // Hide popup after 3 seconds
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    };

    return (
        <section id="contact" className="relative bg-gray-50 dark:bg-neutral-600 md:h-fit lg:h-full max-h-fit px-6 py-16 flex flex-col items-center">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Contact Me</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 font-light max-w-xl mx-auto">
                    I'm always excited to connect and discuss new opportunities. Please leave your details, and I’ll get back to you as soon as possible.
                </p>
            </div>

            <form className="w-full max-w-lg mx-auto space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                    <label className="text-lg font-light text-gray-700 dark:text-gray-200" htmlFor="name">Full Name</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full p-3 border rounded-lg bg-white dark:bg-neutral-700 text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-lg font-light text-gray-700 dark:text-gray-200" htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full p-3 border rounded-lg bg-white dark:bg-neutral-700 text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                </div>

                <div className="space-y-2">
                    <label className="text-lg font-light text-gray-700 dark:text-gray-200" htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Enter your message"
                        className="w-full p-3 border rounded-lg bg-white dark:bg-neutral-700 text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 resize-none"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-lg font-light text-gray-700 dark:text-gray-200" htmlFor="company">Are you representing a company?</label>
                    <div className="flex items-center">
                        <input
                            id="company"
                            type="checkbox"
                            checked={isCompany}
                            onChange={() => setIsCompany(!isCompany)}
                            className="mr-3 w-5 h-5 text-blue-500 border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                        />
                        <label className="text-lg text-gray-700 dark:text-gray-200 font-light" htmlFor="company">Yes</label>
                    </div>
                </div>

                <div className={`space-y-2 transition-all duration-500 ease-in-out transform ${isCompany ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                    <label className="text-lg font-light text-gray-700 dark:text-gray-200" htmlFor="companyName">Company Name</label>
                    <input
                        id="companyName"
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Enter company name"
                        className="w-full p-3 border rounded-lg bg-white dark:bg-neutral-700 text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-blue-500"
                        required={isCompany}
                    />
                    <div className="flex items-center">
                        <input
                            id="CV"
                            type="checkbox"
                            checked={sendCV}
                            onChange={() => setSendCV(!sendCV)}
                            className="mr-3 w-5 h-5 text-blue-500 border-gray-300 dark:border-gray-700 dark:bg-neutral-700 dark:text-gray-200"
                        />
                        <label className="text-lg text-gray-700 dark:text-gray-200 font-light" htmlFor="CV">I'd to receive your CV</label>
                    </div>
                </div>

                <div className="relative">
                <div className={`flex justify-center text-black dark:text-white mt-4 transition-all duration-500 ease-in-out transform ${
                        isCompany ? "translate-y-[-10px]" : "translate-y-[-150px]"
                    }`}>
                        <button type="submit" className="px-6 py-3 border rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-500 focus:ring-1">
                            Submit
                        </button>
                    </div>
                </div>
            </form>

            {/* Popup Notification */}
            {showPopup && (
                <div className={`fixed top-25 right-5 px-6 py-3 rounded-lg shadow-md text-white ${
                    statusType === "success" ? "bg-green-500" : "bg-red-500"
                }`}>
                    {statusMessage}
                </div>
            )}
        </section>
    );
};

export default Contact;
