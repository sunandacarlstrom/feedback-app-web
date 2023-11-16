import Link from "next/link";

const ButtonStart = ({ text, link }) => {
    return (
        <>
            <Link href={link}>
                <button className="btn bg-digital-black text-digital-white hover:border-pop hover:text-pop">{text}</button>
            </Link>
        </>
    );
};

export default ButtonStart;
