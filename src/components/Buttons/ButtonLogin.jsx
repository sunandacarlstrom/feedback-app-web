import Link from "next/link";

const ButtonLogin = ({ children, link }) => {
    return (
        <>
            <Link href={link} className="w-fit">
                <button className="btn bg-digital-black text-digital-white hover:bg-forest border-none">{children}</button>
            </Link>
        </>
    );
};

export default ButtonLogin;
