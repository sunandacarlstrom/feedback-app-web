import React, { useState } from "react";

const InputFieldQuestion = ({ question }) => {
    const [questionType, setquestionType] = useState;
    switch (question.type) {
        case "text":
            setquestionType(InputFieldQuestion);

            break;

        default:
            break;
    }
    return <>{questionType}</>;
};

export default InputFieldQuestion;
