"use client";

import React from "react";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

export default function AppleIcon({ type }: { type: "signup" | "login" }) {
    if (type === "signup") {
        return (
            <RegisterLink
                id="socialApple"
                className="bg-slate-100 w-20 h-10 p-2 flex justify-center items-center rounded-[8px]"
                authUrlParams={{
                    connection_id: "conn_0193357acc2c781f54921438facc17ba",
                }}
            >
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg"
                    className="w-8 h-8"
                />
            </RegisterLink>
        );
    }

    return (
        <LoginLink
            id="socialApple"
            className="bg-slate-100 w-20 h-10 p-2 flex justify-center items-center rounded-[8px]"
            authUrlParams={{
                connection_id: "conn_0193357acc2c781f54921438facc17ba",
            }}
        >
            <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg"
                className="w-8 h-8"
            />
        </LoginLink>
    );
}
