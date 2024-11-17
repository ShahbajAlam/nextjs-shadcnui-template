import Link from "next/link";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import AppleIcon from "../../../components/authentication/AppleIcon";
import GoogleIcon from "../../../components/authentication/GoogleIcon";
import GithubIcon from "../../../components/authentication/GithubIcon";

export default function SigninForm() {
    return (
        <div
            id="signinFormContainer"
            className="flex justify-center items-center min-h-[calc(100vh-72px)]"
        >
            <Card
                id="signinForm"
                className="w-full max-w-md p-6"
            >
                <CardHeader className="space-y-4 text-center">
                    <CardTitle
                        id="signinText"
                        className="my-6"
                    >
                        <h2>Signin</h2>
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-8">
                    <div className="flex justify-center items-center gap-10">
                        <AppleIcon type="login" />
                        <GoogleIcon type="login" />
                        <GithubIcon type="login" />
                    </div>
                </CardContent>

                <CardFooter className="flex flex-col items-center gap-4">
                    <p id="signinRedirect">
                        No account? Go to{" "}
                        <Link
                            href="/signup"
                            className="text-blue-400"
                        >
                            Register
                        </Link>{" "}
                        page
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}
