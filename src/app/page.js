import React from "react";
import ButtonStart from "@/components/Button/ButtonStart";
import Background from "@/components/Background/Background";

const Home = () => {
    return (
        <>
            <div className="absolute left-[50%] top-[50%] flex justify-center items-center flex-col gap-4 translate-x-[-50%] translate-y-[-50%]">
                <ButtonStart text={"Logga in"} link="/admin" />
            </div>
            <Background />
        </>
    );
};

export default Home;
