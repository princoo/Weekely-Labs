import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

interface ThemeToggleProps {
  className?: string;
  size?: "small" | "medium" | "large";
}

export default function ThemeToggle({
  className = "",
  size = "medium",
}: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(true);

  // Prevent hydration mismatch
  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    } else {
      setIsDark(prefersDark);
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Size configurations
  const sizeConfig = {
    small: {
      container: "w-12 h-6",
      circle: "w-4 h-4",
      translate: "translate-x-6",
      icon: "text-xs",
      padding: "p-1",
    },
    medium: {
      container: "w-16 h-8",
      circle: "w-6 h-6",
      translate: "translate-x-8",
      icon: "text-sm",
      padding: "p-1",
    },
    large: {
      container: "w-20 h-10",
      circle: "w-8 h-8",
      translate: "translate-x-10",
      icon: "text-base",
      padding: "p-1",
    },
  };

  const config = sizeConfig[size];

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative ${
          config.container
        } rounded-full transition-all duration-500 ease-in-out
        focus:outline-none focus:ring-4 focus:ring-opacity-50 transform hover:scale-105 active:scale-95
        ${
          isDark
            ? "bg-gradient-to-r from-accent to-gray-500"
            : "bg-gradient-to-r from-yellow-400 to-secondary"
        }
        shadow-lg hover:shadow-xl
        ${className}
      `}
    >
      {/* Toggle circle */}
      <div
        className={`
        ${
          config.circle
        } bg-white rounded-full shadow-lg transform transition-all duration-500 ease-in-out
        flex items-center justify-center relative overflow-hidden
        ${isDark ? config.translate : "translate-x-0"}
      `}
      >
        {/* Sun icon */}
        <FaSun
          className={`
          absolute ${
            config.icon
          } text-secondary transform transition-all duration-500 ease-in-out
          ${
            isDark
              ? "opacity-0 rotate-180 scale-0"
              : "opacity-100 rotate-0 scale-100"
          }
        `}
        />

        {/* Moon icon */}
        <FaMoon
          className={`
          absolute ${
            config.icon
          } text-accent transform transition-all duration-500 ease-in-out
          ${
            isDark
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-180 scale-0"
          }
        `}
        />
      </div>
    </button>
  );
}
