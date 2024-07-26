"use client";
import { useEffect, useState } from "react";
import Moon from "./Moon";
import Sun from "./Sun";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
const ModeToggle = () => {
  const { setTheme } = useTheme();
  const isDarkMode = document.documentElement.classList.contains("dark");
  const check_theme = isDarkMode ? "light" : "dark";
  const check_icon = isDarkMode ? <Moon /> : <Sun />;

  const [icontoggle, setIcon] = useState(check_icon);
  const [thememode, setThememode] = useState(check_theme);

  const updateIcon = () => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIcon(isDarkMode ? <Moon /> : <Sun />);
  };

  const toggleTheme = () => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setTheme(isDarkMode ? "light" : "dark");
    updateIcon(); // Update icon when theme is toggled
  };

  useEffect(() => {
    // Initial check
    updateIcon();

    // Create a MutationObserver to watch for changes to the html's class list
    const observer = new MutationObserver(() => {
      updateIcon();
    });

    // Observe changes in attributes on the html element
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Clean up the observer on component unmount
    return () => observer.disconnect();
  }, []); // Include an empty dependency array

  return (
    <div
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="cursor-pointer"
    >
      {icontoggle}
    </div>
  );
};

export default ModeToggle;
