"use client";
import { useState } from "react";
import React from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [isCompany, setIsCompany] = useState(false);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [sendCV, setSendCV] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            setEmailError("Please enter a valid email address.");
        } else {
            setEmailError("");

            // Construct the email data to send
            const emailData = {
                name,
                email,
                message,
                isCompany: isCompany ? "Yes" : "No",
                companyName,
                sendCV: sendCV ? "Yes" : "No",
            };

            // Send email using EmailJS
            emailjs.send('service_423wnkn', 'template_8yx4t59', emailData, 'gsr529LqTVxZosW70')
                .then((response) => {
                    console.log('Email sent successfully:', response);
                    alert('Your message has been sent!');
                })
                .catch((error) => {
                    console.log('Email sending error:', error);
                    alert('Something went wrong, please try again.');
                });
        }
    };

    return (
        <section id="contact" className="relative bg-gray-50 dark:bg-gray-900 md:h-fit sm:h-fit h-screen px-6 py-16 flex flex-col items-center">
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
                        className="w-full p-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-blue-500"
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
                        className="w-full p-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-blue-500"
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
                        className="w-full p-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 resize-none"
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
                        className="w-full p-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-blue-500"
                        required = {isCompany}
                    />
                    <div className="flex items-center">
                        <input
                            id="CV"
                            type="checkbox"
                            checked={sendCV}
                            onChange={() => setSendCV(!sendCV)}
                            className="mr-3 w-5 h-5 text-blue-500 border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                        />
                        <label className="text-lg text-gray-700 dark:text-gray-200 font-light" htmlFor="CV">I'll be glad if you send me your CV</label>
                    </div>
                </div>

                <div className="relative">
                    <div className={`flex justify-center text-black dark:text-white mt-4 transition-all duration-500 ease-in-out transform ${
                        isCompany ? "translate-y-[-10px]" : "translate-y-[-150px]"
                    }`}>
                        <button type="submit" className="px-6 py-3 border-1 rounded-lg hover:bg-neutral-300 focus:ring-1">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Contact;
