"use client";
import ButtonSubmit from "@/components/Buttons/ButtonSubmit";
import { useState, useEffect } from "react";

const QuestionPage = ({ params }) => {
    const [quizIndex, setQuizIndex] = useState(0);
    const [question, setQuestion] = useState([]);
    const [questionCount, setQuestionCount] = useState(0);
    const [questionNumber, setQuestionNumber] = useState(null);

    const [questionIndex, setQuestionIndex] = useState(0);
    const [answer, setAnswer] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5279/api/events/${params.eventId}/${quizIndex}`);
                const quiz = await response.json();
                setQuestion(quiz.questions[params.questionIndex - 1]);
                setQuestionCount(quiz.questions.length);
                setQuestionNumber(params.questionIndex);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchData();
    }, []);

    let submit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:5279/api/events/${params.eventId}/${quizIndex}/${questionIndex}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify([ answer ]),
            });

            if (!response.ok) {
                console.error("Error:", response.statusText);

                // Logga innehållet i svaret för att få mer information
                const responseBody = await response.text();
                console.log("Response Body:", responseBody);
            } else {
                // TODO: redirect till nästa fråga
                alert("submitted!");
            }
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
                                Fråga {questionNumber}/{questionCount ?? "0"}
                            </span>
                        </div>
                        <h2 className="card-title mb-4 text-center">{question.title}</h2>

                        {/* <form action={submitAnswer} className="flex flex-col gap-4 justify-center items-end"> */}

                        <form onSubmit={submit} className="flex flex-col gap-4 justify-center items-end">
                            <input
                                type="text"
                                placeholder="Enter your answer"
                                name="answer-input"
                                id="answer-input"
                                onChange={(e) => {
                                    setAnswer(e.target.value);
                                }}
                                className="border border-leather p-2 rounded-md w-full focus:outline-none focus:border-pebble"
                            />
                            <button type="submit" className="btn bg-digital-black text-digital-white hover:bg-leather border-none">
                                Skicka svar →
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuestionPage;
