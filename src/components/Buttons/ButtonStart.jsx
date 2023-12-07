import Link from "next/link";

const ButtonStart = ({ children, link }) => {
    return (
        <>
            <Link href={link} className="w-fit">
                <button className="btn bg-digital-black text-digital-white hover:bg-pebble hover:text-digital-black border-none text-base lg:text-2xl md:text-xl sm:text-base">{children}</button>
            </Link>
        </>
    );
};

export default ButtonStart;
