import React from "react";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import ButtonStart from "@/components/Buttons/ButtonStart";

const QuizHome = ({ params }) => {
    return (
        <main className="w-screen h-screen flex justify-center items-center p-4">
            <div className="flex justify-center items-center flex-col gap-4">
                <ButtonStart link={`/quiz/${params.eventId}/1`}>Please, give us some feedback!</ButtonStart>
            </div>
            <VideoPlayer />
        </main>
    );
};

export default QuizHome;
