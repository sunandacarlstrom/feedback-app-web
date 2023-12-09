import React from "react";

const InputFieldQuestion = ({ question }) => {
    return (
        <div>
            <h3>{question.title}</h3>
            <input type="text" placeholder="Skriv ditt svar här" />
        </div>
    );
};

export default InputFieldQuestion;
