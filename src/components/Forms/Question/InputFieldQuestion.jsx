import React from "react";

const InputFieldQuestion = (setAnswer) => {
    console.log(setAnswer);
    return (
        <input
            type="text"
            placeholder="Enter your answer"
            name="answer-input"
            id="answer-input"
            onChange={(e) => {
                setAnswer(e.target.value);
            }}
            className="border p-2 rounded-md w-full focus:outline-none focus:border-leather"
        />
    );
};

export default InputFieldQuestion;
