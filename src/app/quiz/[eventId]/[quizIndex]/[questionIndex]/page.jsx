"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Question from "@/components/Forms/Question/Question";

const QuestionPage = ({ params }) => {
    const [questionIndex, setQuestionIndex] = useState(parseInt(params.questionIndex));
    const [question, setQuestion] = useState();
    const [totaltAmount, setTotalAmount] = useState();

    const router = useRouter();

    useEffect(() => {
        const fetchQuestion = async () => {
            try {
                const response = await fetch(`http://localhost:5279/api/events/${params.eventId}/${params.quizIndex}/${questionIndex - 1}`);
                const questionData = await response.json();
                setQuestion(questionData);
                setTotalAmount(questionData.totalAmountOfQuestions);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        const fetchSession = async () => {
            if (!sessionStorage.sessionId) {
                try {
                    const response = await fetch(`http://localhost:5279/api/events/startSession`);
                    const sessionData = await response.json();
                    sessionStorage.sessionId = sessionData.sessionId;
                } catch (error) {
                    console.error("Error:", error);
                }
            }
        };

        fetchSession();
        fetchQuestion();
    }, []);

    useEffect(() => {
        if (questionIndex > totaltAmount) {
            var newURL = `http://localhost:3000/quiz/${params.eventId}/thanks`;
        } else {
            var newURL = `http://localhost:3000/quiz/${params.eventId}/${params.quizIndex}/${questionIndex}`;
        }

        router.push(newURL);
    }, [questionIndex]);

    return (
        <>
            <div className="flex items-center justify-center h-screen">{question ? <Question question={question} params={params} setQuestionIndex={setQuestionIndex} /> : <p>Loading...</p>}</div>
        </>
    );
};

export default QuestionPage;
