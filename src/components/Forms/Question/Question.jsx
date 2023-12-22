import React, { useEffect, useState } from "react";
import InputFieldQuestion from "./InputFieldQuestion";
import SingleChoiceQuestion from "./SingleChoiceQuestion";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import ButtonSubmit from "@/components/Buttons/ButtonSubmit";

const Question = ({ params, question, setQuestionIndex }) => {
    const [type, setType] = useState();
    const [answer, setAnswer] = useState([]);

    const setQuestionType = () => {
        switch (question.type) {
            case "text":
                setType(InputFieldQuestion(setAnswer));
                break;
            case "single":
                setType(<SingleChoiceQuestion question={question} answer={answer} setAnswer={setAnswer} />);
                break;
            case "multiple":
                setType(<MultipleChoiceQuestion question={question} setAnswer={setAnswer} />);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        setQuestionType();
    }, [answer]);

    let submit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:5279/api/events/${params.eventId}/${params.quizIndex}/${params.questionIndex - 1}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ sessionId: sessionStorage.sessionId, answer }),
            });

            setQuestionIndex(() => parseInt(params.questionIndex) + 1);
        } catch (error) {
            console.error("Error submitting answer:", error);
        }
    };

    return (
        <>
            <div className="card bg-melon shadow-xl p-4 w-fit">
                <div className="card-body">
                    <div className="question-count">
                        <span className="card-title mb-4 text-center">
                            Fråga {params.questionIndex}/{question.totalAmountOfQuestions ?? "0"}
                        </span>
                    </div>
                    <form onSubmit={submit} className="flex flex-col gap-4 justify-center items-end">
                        <h2 className="card-title mb-4 text-center">{question.title}</h2>
                        {type ?? <p>Loading</p>}
                        <ButtonSubmit>Skicka svar →</ButtonSubmit>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Question;
