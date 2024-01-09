import React from "react";

const InputFieldQuestion = (setAnswer) => {
    return (
        <input
            type="text"
            placeholder="Skriv ditt svar här"
            name="answer-input"
            id="answer-input"
            onChange={(e) => {
                setAnswer([e.target.value]);
            }}
            className="border p-2 rounded-md w-full focus:outline-leather border-digital-black"
        />
    );
};

export default InputFieldQuestion;
