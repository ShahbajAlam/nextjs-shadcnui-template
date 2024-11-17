"use client";

import React from "react";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

export default function GithubIcon({ type }: { type: "signup" | "login" }) {
    if (type === "signup") {
        return (
            <RegisterLink
                id="socialGithub"
                className="bg-slate-100 w-20 h-10 p-2 flex justify-center items-center rounded-[12px]"
                authUrlParams={{
                    connection_id: "conn_0193357acc2d3f6004ab7fdad05381fb",
                }}
            >
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                    width={24}
                    height={24}
                />
            </RegisterLink>
        );
    }

    return (
        <LoginLink
            id="socialGithub"
            className="bg-slate-100 w-20 h-10 p-2 flex justify-center items-center rounded-[12px]"
            authUrlParams={{
                connection_id: "conn_0193357acc2d3f6004ab7fdad05381fb",
            }}
        >
            <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                width={24}
                height={24}
            />
        </LoginLink>
    );
}
