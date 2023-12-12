import React from "react";

const SingleChoiceQuestion = (question, setAnswer) => {
    return (
        <ul>
            {question.options.map((option) => (
                <li key={option}>
                    <label htmlFor={option}>{option}</label>
                    <input
                        type="radio"
                        name="value"
                        id={option}
                        onChange={(e) => {
                            setAnswer([e.target.id]);
                        }}
                    />
                </li>
            ))}
        </ul>
    );
};

export default SingleChoiceQuestion;
