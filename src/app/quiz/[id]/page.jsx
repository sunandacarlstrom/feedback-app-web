"use client";
import { useState, useEffect } from "react";

const QuestionPage = ({ params }) => {
    const [question, setQuestion] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5030/companies");
                const data = await response.json();
                setQuestion(data[0].events[0].quiz[0].questions[params.id]);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchData();
        console.log(question);
    }, []);

    return (
        <>
            <h2>{question.question}</h2>
        </>
    );
};

export default QuestionPage;
