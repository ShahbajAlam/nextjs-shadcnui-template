import React from "react";
import ThemeToggleButton from "./ThemeToggleButton";
import LoginButton from "./LoginButton";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav
            id="navbar"
            className="flex flex-wrap justify-between items-center p-4"
        >
            <div
                id="logo"
                className="text-lg font-semibold"
            >
                <Link href="/">
                    <h1>Logo</h1>
                </Link>
            </div>

            <div
                id="navIcons"
                className="flex items-center gap-4"
            >
                <ThemeToggleButton />
                <LoginButton />
            </div>
        </nav>
    );
}
