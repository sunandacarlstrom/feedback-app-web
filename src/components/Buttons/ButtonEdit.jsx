import Link from "next/link";

const ButtonEdit = ({ text, link }) => {
    return (
        <>
            <Link href={link} className="w-fit">
                <button className="btn btn-sm bg-sand text-digital-black hover:bg-forest hover:text-digital-white border-none">{text}</button>
            </Link>
        </>
    );
};

export default ButtonEdit;
