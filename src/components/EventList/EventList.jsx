"use client";
import { useState, useEffect } from "react";
import ButtonStart from "../Button/ButtonStart";

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
        <div className="w-full flex justify-center py-8">
            <ul className="grid md:grid-cols-3 sm:grid-cols-1 justify-center gap-8 w-fit">
                {companies[0]?.events?.map((event) => (
                    <li key={event.id} className="w-fit flex justify-center items-center">
                        <div className="card bg-melon shadow-xl p-5 w-fit border rounded-xl border-pear">
                            <div className="card-body">
                                <p>{event.name ?? "Event name is not available"}</p>
                                <ButtonStart text={"Open Quiz"} link="/quiz" />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;
