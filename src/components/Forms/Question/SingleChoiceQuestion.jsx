import React from "react";

const SingleChoiceQuestion = (question, setAnswer) => {
    console.log(question);
    return (
        <>
            {question.options.map((option) => (
                <>
                    <label key={option} for={option}>
                        {option}
                    </label>
                    <input key={option} type="radio" name="value" id={option} />
                </>
            ))}
        </>
    );
};

export default SingleChoiceQuestion;
