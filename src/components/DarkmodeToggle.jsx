"use client"
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from "lucide-react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Always reset to light mode on server start
    if (!sessionStorage.getItem('sessionInitialized')) {
      // Mark session as initialized to prevent resetting on navigation
      sessionStorage.setItem('sessionInitialized', 'true');
      setDarkMode(false);
      document.body.classList.remove('dark');
      localStorage.setItem('darkMode', 'false'); // Clear any previous dark mode state
    } else {
      // Retain dark mode state within the same session
      const savedMode = localStorage.getItem('darkMode');
      if (savedMode === 'true') {
        setDarkMode(true);
        document.body.classList.add('dark');
      } else {
        setDarkMode(false);
        document.body.classList.remove('dark');
      }
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.body.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };

  return (
      <button
      onClick={toggleDarkMode}
      className={`p-2`}
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default DarkMode;
