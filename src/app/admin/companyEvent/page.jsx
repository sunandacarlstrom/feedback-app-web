"use client";
import { useState, useEffect } from "react";
import CompanyDropdown from "@/components/Dropdown/CompanyDropdown";
import EventList from "@/components/EventList/EventList";

const CompanyEventPage = () => {
    const [companies, setCompanies] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5279/api/companies/");
                const data = await response.json();
                setCompanies(data);
                //TODO: Välj företag som favorit vid registrering av användarkonto för att det ska sättas som standard istället
                setSelectedCompany(data[0]);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const handleSelectedCompany = (company) => {
        setSelectedCompany(company);
    };

    return (
        <>
            <div className="flex justify-center">
                <CompanyDropdown onSelect={handleSelectedCompany} companies={companies} selectedCompany={selectedCompany} />
            </div>
            {selectedCompany ? <EventList company={selectedCompany} /> : <p>Loading...</p>}
        </>
    );
};

export default CompanyEventPage;
