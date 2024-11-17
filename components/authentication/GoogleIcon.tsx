"use client";

import React from "react";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

export default function GoogleIcon({ type }: { type: "signup" | "login" }) {
    if (type === "signup") {
        return (
            <RegisterLink
                id="socialGoogle"
                className="bg-slate-100 w-20 h-10 p-2 flex justify-center items-center rounded-[12px]"
                authUrlParams={{
                    connection_id: "conn_0193357acc2d4e5e86e1b5a84728a8af",
                }}
            >
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
                    width={24}
                    height={24}
                />
            </RegisterLink>
        );
    }

    return (
        <LoginLink
            id="socialGoogle"
            className="bg-slate-100 w-20 h-10 p-2 flex justify-center items-center rounded-[12px]"
            authUrlParams={{
                connection_id: "conn_0193357acc2d4e5e86e1b5a84728a8af",
            }}
        >
            <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
                width={24}
                height={24}
            />
        </LoginLink>
    );
}
