"use client";
import { Moon, SunDim } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";

export const AnimatedThemeToggler = ({
  className
}) => {
  const { theme, toggleTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const buttonRef = useRef(null);

  // Sync with theme context
  useEffect(() => {
    setIsDarkMode(theme === 'dark');
  }, [theme]);

  const changeTheme = async () => {
    if (!buttonRef.current) return;

    // Check if view transitions are supported
    if (!document.startViewTransition) {
      toggleTheme();
      return;
    }

    await document.startViewTransition(() => {
      flushSync(() => {
        toggleTheme();
      });
    }).ready;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const y = top + height / 2;
    const x = left + width / 2;

    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate({
      clipPath: [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${maxRad}px at ${x}px ${y}px)`,
      ],
    }, {
      duration: 700,
      easing: "ease-in-out",
      pseudoElement: "::view-transition-new(root)",
    });
  };

  return (
    <button
      ref={buttonRef}
      onClick={changeTheme}
      className={cn("flex items-center justify-center", className)}
      aria-label="Toggle theme"
    >
      {isDarkMode ? <SunDim size={20} /> : <Moon size={20} />}
    </button>
  );
};
