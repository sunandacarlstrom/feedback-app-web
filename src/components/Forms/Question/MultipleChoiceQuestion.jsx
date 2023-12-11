import React from "react";

const MultipleChoiceQuestion = (question, setAnswer) => {
    return (
        <ul>
            {question.options.map((option) => (
                <li key={option}>
                    <input type="checkbox" id={`option-${option}`} />
                    <label htmlFor={`option-${option}`}>{option}</label>
                </li>
            ))}
        </ul>
    );
};

export default MultipleChoiceQuestion;
