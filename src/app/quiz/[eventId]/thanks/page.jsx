import ButtonStart from "@/components/Buttons/ButtonStart";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";

const ThanksPage = ({ params }) => {
    return (
        <main className="w-screen h-screen flex flex-col gap-24 justify-center items-center p-4">
            <h1 className="text-digital-white">Thank you!</h1>
            <div className="flex justify-center items-center flex-col gap-4">
                <ButtonStart link={`/quiz/${params.eventId}/0/1`}>Start Quiz!</ButtonStart>
            </div>
            <VideoPlayer />
        </main>
    );
};

export default ThanksPage;
