"use client";
import ButtonSubmit from "@/components/Buttons/ButtonSubmit";
import { useState, useEffect } from "react";

const QuestionPage = ({ params }) => {
    const [quizIndex, setQuizIndex] = useState(0);
    const [question, setQuestion] = useState([]);
    const [questionCount, setQuestionCount] = useState(0);
    const [questionNumber, setQuestionNumber] = useState(null);

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

                        <form className="flex flex-col gap-4 justify-center items-end">
                            <input
                                type="text"
                                placeholder="Write your answer"
                                id="answer-input"
                                className="border border-leather p-2 rounded-md w-full focus:outline-none focus:border-pebble"
                            />
                            <ButtonSubmit text={"Skicka svar →"} link={`/quiz/${params.eventId}/1`} />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuestionPage;
