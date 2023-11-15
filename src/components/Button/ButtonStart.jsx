import Link from "next/link";

const ButtonStart = ({text, link}) => {
    return (
        <>
            <Link href={link}>
                <button className="btn bg-digital-white hover:border-leather hover:text-leather">{text}</button>
            </Link>
        </>
    );
};

export default ButtonStart;
