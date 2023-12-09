"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ButtonSubmit from "@/components/Buttons/ButtonSubmit";

const QuestionPage = ({ params }) => {
    const quizIndex = 0;

    const router = useRouter();

    const [question, setQuestion] = useState({});
    const [questionIndex, setQuestionIndex] = useState(parseInt(params.questionIndex));

    const [answer, setAnswer] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5279/api/events/${params.eventId}/${quizIndex}/${questionIndex - 1}`);
                const questionData = await response.json();
                setQuestion(questionData);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const newURL = `http://localhost:3000/quiz/${params.eventId}/${questionIndex}`;

        router.push(newURL);
    }, [questionIndex]);

    let submit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:5279/api/events/${params.eventId}/${quizIndex}/${questionIndex - 1}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify([answer]),
            });

            setQuestionIndex(() => questionIndex + 1);
        } catch (error) {
            console.error("Error submitting answer:", error);
        }
    };

    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="card bg-melon shadow-xl p-4 w-fit">
                    <div className="card-body">
                        <div className="question-count">
                            <span className="card-title mb-4 text-center">
                                Fråga {questionIndex}/{question.totalAmountOfQuestions ?? "0"}
                            </span>
                        </div>
                        <h2 className="card-title mb-4 text-center">{question.title}</h2>

                        <form onSubmit={submit} className="flex flex-col gap-4 justify-center items-end">
                            <input
                                type="text"
                                placeholder="Enter your answer"
                                name="answer-input"
                                id="answer-input"
                                onChange={(e) => {
                                    setAnswer(e.target.value);
                                }}
                                className="border p-2 rounded-md w-full focus:outline-none focus:border-leather"
                            />
                            <ButtonSubmit>Skicka svar →</ButtonSubmit>
                        </form>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuestionPage;
