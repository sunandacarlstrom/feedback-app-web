import React from "react";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import ButtonStart from "@/components/Button/ButtonStart";

const Home = () => {
    return (
        <>
                <div className="absolute left-[50%] top-[50%] flex justify-center items-center flex-col gap-4 translate-x-[-50%]">
                    <h1 className="text-digital-white text-center">Please, give us some feedback!</h1>
                    <ButtonStart />
                </div>
                <VideoPlayer />
        </>
    );
};

export default Home;
