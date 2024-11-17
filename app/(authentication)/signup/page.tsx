import Link from "next/link";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import AppleIcon from "@/components/authentication/AppleIcon";
import GoogleIcon from "@/components/authentication/GoogleIcon";
import GithubIcon from "@/components/authentication/GithubIcon";

export default function SignupForm() {
    return (
        <div
            id="signupFormContainer"
            className="flex justify-center items-center min-h-[calc(100vh-72px)]"
        >
            <Card
                id="signupForm"
                className="w-full max-w-md p-6"
            >
                <CardHeader className="space-y-4 text-center">
                    <CardTitle
                        id="registerText"
                        className="my-6"
                    >
                        <h2>Register</h2>
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-8">
                    <div className="flex justify-center items-center gap-10">
                        <AppleIcon type="signup" />
                        <GoogleIcon type="signup" />
                        <GithubIcon type="signup" />
                    </div>
                </CardContent>

                <CardFooter className="flex flex-col items-center gap-4">
                    <p id="signinRedirect">
                        Already registered? Go to{" "}
                        <Link
                            href="/signin"
                            className="text-blue-400"
                        >
                            Signin
                        </Link>{" "}
                        page
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}
