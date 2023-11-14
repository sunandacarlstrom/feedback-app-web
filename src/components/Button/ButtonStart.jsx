import Link from "next/link";
import styles from "./ButtonStart.module.css";

const ButtonStart = () => {
    return (
        <>
            <Link href="/quiz">
                <button className="btn bg-digital-white hover:border-leather hover:text-leather">Start Quiz</button>
            </Link>
        </>
    );
};

export default ButtonStart;
