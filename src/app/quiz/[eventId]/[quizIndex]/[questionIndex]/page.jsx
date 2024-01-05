"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Question from "@/components/Forms/Question/Question";
import { authGetWithBearer } from "@/utils/auth";

const QuestionPage = ({ params }) => {
    const [questionIndex, setQuestionIndex] = useState(parseInt(params.questionIndex));
    const [question, setQuestion] = useState();
    const [totaltAmount, setTotalAmount] = useState();

    const router = useRouter();

    useEffect(() => {
        const fetchQuestion = async () => {
            const questionData = await authGetWithBearer(
                `http://feedback.backend.kitjkpg.se/api/events/${params.eventId}/${params.quizIndex}/${
                    questionIndex - 1
                }`
            );
            setQuestion(questionData);
            setTotalAmount(questionData.totalAmountOfQuestions);
        };

        const fetchSession = async () => {
            if (!sessionStorage.sessionId) {
                const sessionData = await authGetWithBearer(
                    `http://feedback.backend.kitjkpg.se/api/events/startSession`
                );
                sessionStorage.sessionId = sessionData.sessionId;
            }
            fetchQuestion();
        };

        fetchSession();
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
            <div className="flex items-center justify-center h-screen">
                {question ? (
                    <Question
                        question={question}
                        params={params}
                        setQuestionIndex={setQuestionIndex}
                    />
                ) : (
                    <span className="loading loading-spinner loading-md"></span>
                )}
            </div>
        </>
    );
};

export default QuestionPage;
