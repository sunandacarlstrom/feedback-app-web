import Image from "next/image";
import Link from "next/link";

import Logo from "@/../public/logotypes/Knowit-Digital-white.svg";
import "@/app/globals.css";

export const metadata = {
    title: "Quiz Page",
};

const QuizLayout = ({ children }) => {
    return (
        <>
            <Link href="/">
                <Image
                    src={Logo}
                    alt="Logo"
                    height="45"
                    className="cursor-pointer absolute left-6 top-6"
                    priority
                />
            </Link>
            <main className="py-10 px-8 bg-leather min-h-full">{children}</main>
        </>
    );
};

export default QuizLayout;
