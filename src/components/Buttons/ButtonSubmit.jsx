import Link from "next/link";

const ButtonSubmit = ({ text, link }) => {
    return (
        <>
            <Link href={link} className="w-fit">
                <button className="btn bg-digital-black text-digital-white hover:bg-leather border-none">{text}</button>
            </Link>
        </>
    );
};

export default ButtonSubmit;
