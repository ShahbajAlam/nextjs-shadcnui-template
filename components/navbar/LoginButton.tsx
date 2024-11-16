import {
    getKindeServerSession,
    LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LogIn } from "lucide-react";

export default async function LoginButton() {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const isAuthenticatedUser = await isAuthenticated();
    const user = await getUser();

    return (
        <div>
            {isAuthenticatedUser ? (
                <Avatar
                    id="userAvatar"
                    className="cursor-pointer"
                >
                    <AvatarImage
                        src={user?.picture || ""}
                        alt={user?.given_name || "User Avatar"}
                    />
                    <AvatarFallback>
                        {user?.given_name ? user.given_name[0] : "U"}
                    </AvatarFallback>
                </Avatar>
            ) : (
                <LoginLink>
                    <LogIn size={30} />
                </LoginLink>
            )}
        </div>
    );
}
