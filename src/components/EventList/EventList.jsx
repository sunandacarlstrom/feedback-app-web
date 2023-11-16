"use client";
import { useState, useEffect } from "react";

const EventList = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5030/companies");
                const data = await response.json();

                // Logga all data
                console.log("All Data:", data);

                // Kontrollera om det finns några företag
                if (data && data.length > 0) {
                    // Logga första företaget
                    const firstCompany = data[0];
                    console.log("First Company:", firstCompany);

                    // Uppdatera state med företaget
                    setCompanies(firstCompany);
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchData();
    }, []);
    console.log(companies);

    return (
        <ul className="event-list">
            {companies.events?.map((event) => (
                <li key={event.id}>
                    <p>{event.name ?? "Event name is not available"}</p>
                </li>
            ))}
        </ul>
    );
};

export default EventList;
