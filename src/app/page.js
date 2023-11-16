import React from "react";
import Background from "@/components/Background/Background";
import LoginForm from "@/components/Forms/LoginForm/LoginForm";

const Home = () => {
    return (
        <>
            <div className="absolute left-[50%] top-[50%] flex justify-center items-center flex-col gap-4 translate-x-[-50%] translate-y-[-50%]">
                <LoginForm />
            </div>
            <Background />
        </>
    );
};

export default Home;
