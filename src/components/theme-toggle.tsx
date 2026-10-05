"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const toggle = () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  };

  return (
    <button className="icon-button" type="button" onClick={toggle} aria-label="Toggle color theme">
      <Sun className="theme-icon-sun" size={17} />
      <Moon className="theme-icon-moon" size={17} />
    </button>
  );
}
