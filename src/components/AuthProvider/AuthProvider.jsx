"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState();
    const router = useRouter();

    useEffect(() => {
        const getUser = async () => {
            if (!token) {
                return;
            }
            const response = await fetch(`http://feedback.backend.kitjkpg.se/api/auth`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token }),
            });

            const { isUser } = await response.json();
            if (!isUser) {
                router.push("http://feedback.frontend.kitjkpg.se");
            }
        };
        getUser();
    }, [token]);

    useEffect(() => {
        const sessionToken = sessionStorage.getItem("token");
        if (!sessionToken) {
            router.push("http://feedback.frontend.kitjkpg.se");
        }
        setToken(sessionToken);
    }, [router]);

    return <>{children}</>;
};

export default AuthProvider;
