import Link from "next/link";

const ButtonLogin = ({ text, link }) => {
    return (
        <>
            <Link href={link} className="w-fit">
                <button className="btn bg-digital-black text-digital-white hover:bg-forest border-none">{text}</button>
            </Link>
        </>
    );
};

export default ButtonLogin;
