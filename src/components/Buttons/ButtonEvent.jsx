import Link from "next/link";

const ButtonEvent = ({ text, link }) => {
    return (
        <>
            <Link href={link} className="w-fit">
                <button className="btn btn-sm bg-digital-black text-digital-white hover:bg-forest border-none">{text}</button>
            </Link>
        </>
    );
};

export default ButtonEvent;
