"use client";
import { useState, useEffect } from "react";
import ButtonStart from "../Button/ButtonStart";

const EventList = ({ company, children }) => {
    const [events, setEvents] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState(company);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5279/api/events/getcompanyevents/${selectedCompany.id}`);
                const data = await response.json();
                setEvents(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [selectedCompany]);

    useEffect(() => {
        setSelectedCompany(() => company);
    });

    useEffect(() => {
        console.log(`${events}, ${selectedCompany}`);
    }, [events, selectedCompany]);

    console.log(company);

    return (
        <div className="w-full flex flex-col gap-2 justify-center items-center py-8">
            <h2>{children}</h2>
            <ul className="grid md:grid-cols-3 sm:grid-cols-1 justify-center items-center w-fit gap-4">
                {events?.map((event) => (
                    <li key={event.id} className="flex justify-center items-center">
                        <div className="card bg-melon shadow-xl px-5 py-8 gap-1 items-center justify-center border rounded-xl border-pear">
                            <p>{event.name ?? "Event name is not available"}</p>
                            <ButtonStart text={"Open Quiz"} link="/quiz" />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;
