import Link from "next/link";

const ButtonStart = ({ text, link }) => {
    return (
        <>
            <Link href={link} className="w-fit">
                <button className="btn bg-digital-black text-digital-white hover:border-digital-black hover:bg-forest border-none">{text}</button>
            </Link>
        </>
    );
};

export default ButtonStart;
