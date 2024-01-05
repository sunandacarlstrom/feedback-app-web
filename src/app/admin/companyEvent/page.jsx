"use client";
import { useState, useEffect } from "react";
import CompanyDropdown from "@/components/Dropdown/CompanyDropdown";
import EventList from "@/components/EventList/EventList";
import { authGetWithBearer } from "@/utils/auth";

const CompanyEventPage = () => {
    const [companies, setCompanies] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState();

    const fetchData = async () => {
        const data = await authGetWithBearer("http://feedback.backend.kitjkpg.se/api/companies/");
        if (data) {
            setCompanies(data);
            setSelectedCompany(data[0]);
        }
        else {
            setCompanies([]); 
            setSelectedCompany({})
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (companies == [] || selectedCompany == {}) {
            fetchData();
        }
    });

    const handleSelectedCompany = (company) => {
        setSelectedCompany(company);
    };

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
                    <span className="loading loading-spinner loading-md"></span>
                )}
            </div>
            {selectedCompany ? (
                <EventList company={selectedCompany} />
            ) : (
                <span className="loading loading-spinner loading-md"></span>
            )}
        </>
    );
};

export default CompanyEventPage;
