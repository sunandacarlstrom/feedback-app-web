import Emoji from "@/components/Icon/Emoji";

const SingleChoiceQuestion = ({ question, answer, setAnswer }) => {
    return (
        <ul className="flex justify-center items-center gap-8 w-full">
            {question.options.map((option) => (
                <li key={option}>
                    <Emoji option={option} answer={answer} setAnswer={setAnswer} />
                </li>
            ))}
        </ul>
    );
};

export default SingleChoiceQuestion;
