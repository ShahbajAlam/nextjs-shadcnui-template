import { LogIn, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
    getKindeServerSession,
    LoginLink,
    LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default async function LoginButton() {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const isAuthenticatedUser = await isAuthenticated();
    const user = await getUser();

    return (
        <>
            {isAuthenticatedUser ? (
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar
                            id="userAvatar"
                            className="cursor-pointer"
                        >
                            <AvatarImage
                                src={user?.picture || ""}
                                alt={user?.given_name || "User Avatar"}
                            />
                            <AvatarFallback className="animate-pulse">
                                {user?.given_name ? user.given_name[0] : "U"}
                            </AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="p-2"
                        align="end"
                        sideOffset={10}
                    >
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer">
                            Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                            Billing
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                            Team
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                            <LogoutLink>Logout</LogoutLink>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            ) : (
                <LoginLink>
                    <LogIn size={30} />
                </LoginLink>
            )}
        </>
    );
}
