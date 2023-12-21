"use client";
import Button from "@/components/Buttons/Button";
import { useState, useEffect } from "react";

const EditPage = ({ params }) => {
    const [quiz, setQuiz] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5279/api/events/${params.eventId}/${params.quizIndex}`);
                const data = await response.json();
                setQuiz(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        console.log(quiz);
    }, [quiz]);

    return (
        <>
            <div className="w-full flex flex-col gap-2 justify-center items-center py-8">
                <div className="card bg-clay shadow-xl px-10 py-6 gap-10 items-center justify-center border rounded-xl border-pear">
                    <h2>Quiz: {quiz.name}</h2>
                    <form className="flex flex-col items-center justify-around gap-4">
                        {quiz.questions?.map((question, index) => (
                            <div key={question.title} className="flex w-full justify-between items-end gap-4">
                                <Button backgroundColor="leather" hoverColor="pebble" hoverText="digital-black" link="/quiz">
                                    Delete
                                </Button>
                                <label htmlFor={index} className="form-control">
                                    <div className="label">
                                        <span className="label-text">Question {index + 1}: </span>
                                    </div>
                                    <textarea name={index} id={index} value={question.title} className="textarea textarea-bordered leading-5" />
                                </label>
                            </div>
                        ))}
                    </form>
                    <div className="flex w-full justify-center gap-4 pt-4">
                        <Button link="/quiz">Add question</Button>
                        <Button link="/quiz">Save Quiz</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditPage;
