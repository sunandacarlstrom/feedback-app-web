import React, { useEffect, useState } from "react";

const MultipleChoiceQuestion = ({ question, setAnswer }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    useEffect(() => {
        setAnswer(selectedOptions);
    }, [selectedOptions]);

    return (
        <ul>
            {question.options.map((option) => (
                <li key={option}>
                    <label htmlFor={option}>{option}</label>
                    <input
                        type="checkbox"
                        id={option}
                        onChange={(e) => {
                            if (selectedOptions.includes(e.target.id)) {
                                const index = selectedOptions.indexOf(e.target.id);
                                setSelectedOptions(selectedOptions.slice(0, index).concat(selectedOptions.slice(index + 1)));
                            } else {
                                setSelectedOptions(selectedOptions.concat(e.target.id));
                            }
                        }}
                    />
                </li>
            ))}
        </ul>
    );
};

export default MultipleChoiceQuestion;
