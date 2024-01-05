"use client";
import Button from "@/components/Buttons/Button";
import { authGetWithBearer } from "@/utils/auth";
import { useState, useEffect } from "react";

const EditPage = ({ params }) => {
    const [quiz, setQuiz] = useState();
    const [textareaValue, setTextareaValue] = useState([]);

    // UseEffects
    useEffect(() => {
        const fetchData = async () => {
            const data = await authGetWithBearer(
                `http://feedback.backend.kitjkpg.se/api/events/${params.eventId}/${params.quizIndex}`
            );
            setQuiz(data);
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (!quiz) return;

        setTextareaValue(() => quiz?.questions?.map((q) => q.title));
        console.log(quiz);
    }, [quiz]);

    // Events
    const handleTextareaChange = (e) => {
        setTextareaValue((prevState) => {
            const newState = [...prevState];
            newState[e.target.id] = e.target.value;
            return newState;
        });
    };

    const handleSaveQuiz = (e) => {
        e.preventDefault();
    };

    const handleAddQuestion = (e) => {
        e.preventDefault();

        // setQuiz((prevQuiz) => {
        //     const newQuiz = {
        //         ...prevQuiz,
        //         questions: [
        //             ...prevQuiz.questions,
        //             {
        //                 title: "",
        //                 options: [],
        //                 type: "text",
        //             },
        //         ],
        //     };

        //     return newQuiz;
        // });
    };

    const handleDeleteQuestion = (e) => {
        e.preventDefault();

        setQuiz((prevQuiz) => {
            const newQuiz = { ...prevQuiz };
            newQuiz.questions = newQuiz.questions.filter(
                (question) => question !== newQuiz.questions[e.target.id]
            );
            return newQuiz;
        });
    };

    return (
        <div className="w-full flex flex-col gap-2 justify-center items-center py-8">
            <div className="card bg-clay shadow-xl px-10 py-6 gap-10 items-center justify-center border rounded-xl border-pear">
                <h2>Quiz: {quiz?.name}</h2>
                <form className="flex flex-col items-center justify-around gap-4">
                    {quiz?.questions?.map((question, index) => (
                        <div key={index} className="flex w-full justify-between items-end gap-4">
                            <Button
                                onClick={handleDeleteQuestion}
                                backgroundColor="leather"
                                hoverColor="pebble"
                                hoverText="digital-black"
                                id={index}
                            >
                                Delete
                            </Button>
                            <label htmlFor={index} className="form-control">
                                <div className="label">
                                    <span className="label-text">Question {index + 1}: </span>
                                </div>
                                <textarea
                                    name={index}
                                    id={index}
                                    value={textareaValue[index] ?? ""}
                                    onChange={handleTextareaChange}
                                    className="textarea textarea-bordered leading-5"
                                />
                            </label>
                        </div>
                    ))}
                    <div className="flex w-full justify-center gap-4 pt-4">
                        <Button onClick={handleAddQuestion}>Add Question</Button>
                        <Button onClick={handleSaveQuiz}>Save Quiz</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditPage;
