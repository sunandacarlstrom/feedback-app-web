import Link from "next/link";

const ButtonStart = ({ text, link }) => {
    return (
        <>
            <Link href={link} className="w-fit">
                <button className="btn bg-digital-black text-digital-white hover:bg-pebble hover:text-digital-black border-none" style={{ width: "12rem", height: "2rem", fontSize: "1rem" }}>{text}</button>
            </Link>
        </>
    );
};

export default ButtonStart;
