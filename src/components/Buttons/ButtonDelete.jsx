import Link from "next/link";

const ButtonDelete = ({ text, link }) => {
    return (
        <>
            <Link href={link} className="w-fit">
                <button className="btn btn-sm bg-sand text-digital-black hover:bg-leather hover:text-digital-white border-none">{text}</button>
            </Link>
        </>
    );
};

export default ButtonDelete;
