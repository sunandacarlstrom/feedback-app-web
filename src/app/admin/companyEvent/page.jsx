"use client";
import { useState, useEffect } from "react";
import CompanyDropdown from "@/components/Dropdown/CompanyDropdown";
import EventList from "@/components/EventList/EventList";
import { authWithBearer } from "@/utils";

const CompanyEventPage = () => {
    const [companies, setCompanies] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const data = await authWithBearer("http://localhost:5279/api/companies/");
            setCompanies(data);
            setSelectedCompany(data[0]);
            console.log("hej");
            console.log(data);
        };

        fetchData();
    }, []);

    const handleSelectedCompany = (company) => {
        setSelectedCompany(company);
    };

    useEffect(() => {
        console.log(`companies ${companies}`);
    }, [companies]);

    return (
        <>
            <div className="flex justify-center">
                {companies ? (
                    <CompanyDropdown
                        onSelect={handleSelectedCompany}
                        companies={companies}
                        selectedCompany={selectedCompany}
                    />
                ) : (
                    <p>Loading</p>
                )}
            </div>
            {selectedCompany ? <EventList company={selectedCompany} /> : <p>Loading...</p>}
        </>
    );
};

export default CompanyEventPage;
