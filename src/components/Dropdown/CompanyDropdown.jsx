import { useRef } from "react";

const CompanyDropdown = ({ onSelect, companies, selectedCompany }) => {
    const dropdownRef = useRef(null);

    const handleClick = (company) => {
        dropdownRef.current.removeAttribute("open");
        onSelect(company);
    };

    return (
        <>
            <details className="dropdown dropdown-bottom" ref={dropdownRef}>
                <summary className="mb-1 btn bg-digital-white border-none">
                    {selectedCompany ? `${selectedCompany.full_name} ▾` : "Choose Company"}
                </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-lg w-full">
                    {companies?.map((company) => (
                        <li key={company.id}>
                            <a onClick={() => handleClick(company)}>{company.full_name}</a>
                        </li>
                    ))}
                </ul>
            </details>
        </>
    );
};

export default CompanyDropdown;
