import React from "react";

const SingleChoiceQuestion = ({ question }) => {
    return (
        <div>
            <h3>{question.title}</h3>
            <ul>
                {question.options.map((option, index) => (
                    <li key={index}>{option}</li>
                ))}
            </ul>
        </div>
    );
};

export default SingleChoiceQuestion;
