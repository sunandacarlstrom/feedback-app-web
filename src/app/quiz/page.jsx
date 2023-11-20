import React from "react";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import ButtonStart from "@/components/Button/ButtonStart";

const QuizHome = () => {
    return (
        <main className="w-screen h-screen flex justify-center items-center p-4">
            <div className="flex justify-center items-center flex-col gap-4">
                <h1 className="text-digital-white text-center">Please, give us some feedback!</h1>
                <ButtonStart text={"Start Quiz"} link="/quiz/0" />
            </div>
            <VideoPlayer />
        </main>
    );
};

export default QuizHome;
