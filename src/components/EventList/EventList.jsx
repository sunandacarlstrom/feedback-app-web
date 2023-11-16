"use client";
import { useState, useEffect } from "react";

const EventList = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:5030/companies");
            const data = await response.json();
            setCompanies(data);
        };

        fetchData();
    }, []);
    console.log(companies);

    return (
        <ul className="event-list">
            {companies[0]?.events?.map((event) => (
                <li key={event.id}>
                    <p>{event.name ?? "Event name is not available"}</p>
                </li>
            ))}
        </ul>
    );
};

export default EventList;
