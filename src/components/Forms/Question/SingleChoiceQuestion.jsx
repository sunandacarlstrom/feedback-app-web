import Emoji from "@/components/Icon/Emoji";
// w-[380px] h-[60px]
const SingleChoiceQuestion = ({ question, answer, setAnswer }) => {
    return (
        <ul className="flex justify-center items-center gap-4">
            {question.options.map((option) => (
                <li key={option} className="w-[60px] h-[60px] flex items-center justify-center">
                    <Emoji option={option} answer={answer} setAnswer={setAnswer} />
                </li>
            ))}
        </ul>
    );
};

export default SingleChoiceQuestion;
