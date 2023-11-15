"use client";
import React, { useState, useEffect } from "react";
import EventList from "@/components/EventList/EventList";
import Background from "@/components/Background/Background";

const QuizPage = () => {
    const [company, setCompany] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5030/companies");
                const data = await response.json();
                setCompany(data);
                setLoading(false);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <Background />
            <div className="max-w-2xl w-full p-4">
                <h1>Quiz Page</h1>
                <div className="flex justify-center items-center">
                    <div className="bg-melon p-4 mt-2 border rounded-xl max-w-fit">
                        {loading && <span className="loading loading-spinner loading-l text-pop"></span>}
                        {company && <EventList events={company[0].events} />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuizPage;
