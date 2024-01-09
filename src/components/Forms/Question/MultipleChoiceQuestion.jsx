import React, { useEffect, useState } from "react";

const MultipleChoiceQuestion = ({ question, setAnswer }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    useEffect(() => {
        setAnswer(selectedOptions);
    }, [selectedOptions]);

    return (
        <div className="form-control">
            {question.options.map((option) => (
                <label key={option} className="label justify-start gap-4 cursor-pointer">
                    
                    <input
                        type="checkbox"
                        className="checkbox border-2 border-digital-black checked:border-digital-black [--chkbg:theme(colors.digital-black)] [--chkfg:theme(colors.digital-white)]"
                        id={option}
                        onChange={(e) => {
                            if (selectedOptions.includes(e.target.id)) {
                                const index = selectedOptions.indexOf(e.target.id);
                                setSelectedOptions(
                                    selectedOptions
                                        .slice(0, index)
                                        .concat(selectedOptions.slice(index + 1))
                                );
                            } else {
                                setSelectedOptions(selectedOptions.concat(e.target.id));
                            }
                        }}
                    />
                    <span className="label-text text-lg">{option}</span>
                </label>
            ))}
        </div>
    );
};

export default MultipleChoiceQuestion;
