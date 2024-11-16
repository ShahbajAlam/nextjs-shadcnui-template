"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggleButton() {
    const { theme, setTheme } = useTheme();

    function toggleTheme() {
        if (theme === "dark") setTheme("light");
        if (theme === "light") setTheme("dark");
    }

    return (
        <>
            {theme === "light" ? (
                <Moon
                    aria-label="button to toggle to dark mode"
                    role="button"
                    size={30}
                    onClick={toggleTheme}
                />
            ) : (
                <Sun
                    aria-label="button to toggle to light mode"
                    role="button"
                    size={30}
                    onClick={toggleTheme}
                />
            )}
        </>
    );
}
