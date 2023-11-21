import React from "react";
import LoginForm from "@/components/Forms/LoginForm/LoginForm";

const Home = () => {
    return (
        <>
            <main className="w-screen h-screen bg-forest flex justify-center items-center p-4">
                <LoginForm />
            </main>
        </>
    );
};

export default Home;
