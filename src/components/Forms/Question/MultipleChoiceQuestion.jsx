import React from 'react';

const MultipleChoiceQuestion = ({ question }) => {
  return (
    <div>
      <h3>{question.title}</h3>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>
            <input type="checkbox" id={`option-${index}`} />
            <label htmlFor={`option-${index}`}>{option}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MultipleChoiceQuestion;
