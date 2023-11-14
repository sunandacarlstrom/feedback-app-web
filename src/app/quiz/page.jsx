"use client";
import React, { useState, useEffect } from "react";
import EventList from "@/components/EventList/EventList";

const QuizPage = () => {
    const [events, setEvents] = useState(null);

    const [loading, setLoading] = useState(true);

    // const [currentQuestion, setCurrentQuestion] = useState(0);
    // const [selectedAnswer, setSelectedAnswer] = useState("");
    // const [checked, setChecked] = useState(false);
    // const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5030/events");
                const data = await response.json();
                setEvents(data);
                setLoading(false);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="max-w-2xl w-full p-4">
                <h1>Quiz Page</h1>
                <div>
                    {loading && <div>Loading...</div>}
                    {events && <EventList events={events} />}
                </div>
                <div>
                    <div className="bg-digital-white p-4 mt-2 border rounded"></div>
                </div>
            </div>
        </>
    );
};

export default QuizPage;
