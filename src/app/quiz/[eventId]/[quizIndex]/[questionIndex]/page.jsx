"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Question from "@/components/Forms/Question/Question";

const QuestionPage = ({ params }) => {
    const [questionIndex, setQuestionIndex] = useState(parseInt(params.questionIndex));
    const [question, setQuestion] = useState();

    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5279/api/events/${params.eventId}/${params.quizIndex}/${questionIndex - 1}`);
                const questionData = await response.json();
                setQuestion(questionData);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const newURL = `http://localhost:3000/quiz/${params.eventId}/${params.quizIndex}/${questionIndex}`;

        router.push(newURL);
    }, [questionIndex]);

    return (
        <>
            <div className="flex items-center justify-center h-screen">{question ? <Question question={question} params={params} setQuestionIndex={setQuestionIndex} /> : <p>Loading...</p>}</div>
        </>
    );
};

export default QuestionPage;
