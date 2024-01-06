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

            const url = `${process.env.NEXT_PUBLIC_HOST_BACKEND}/api/auth`;

            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token }),
            });

            const { isUser } = await response.json();
            if (!isUser) {
                router.push(`${process.env.NEXT_PUBLIC_HOST_FRONTEND}`);
            }
        };
        getUser();
    }, [token]);

    useEffect(() => {
        const sessionToken = sessionStorage.getItem("token");
        if (!sessionToken) {
            router.push();
        }
        setToken(sessionToken);
    }, [router]);

    return <>{children}</>;
};

export default AuthProvider;
