"use client";
import { useState, useEffect } from "react";

const QuestionPage = ({ params }) => {
    const [question, setQuestion] = useState([]);
    const [questionCount, setQuestionCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5030/companies");
                const companies = await response.json();
                setQuestion(companies[0].events[0].quiz[0].questions[params.id]);
                setQuestionCount(companies[0].events[0].quiz[0].questions.length); 
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchData();
        console.log(question);
    }, []);

    return (
        <>
            <div className="card bg-melon shadow-xl p-4 w-fit">
                <div className="card-body">
                    <div className="question-count">
                        <span className="card-title mb-4 text-center">Question 1/{questionCount ?? "0"}</span>
                    </div>
                    <h2 className="card-title mb-4 text-center">{question.question}</h2>
                    <form id="answer-form">
                        <div className="flex flex-col gap-4 justify-center items-center">
                            <input
                                type="text"
                                placeholder="Write your answer"
                                name="answer-input"
                                id="answer-input"
                                className="border border-leather p-2 rounded-md w-full focus:outline-none focus:border-pebble"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default QuestionPage;
