import Link from "next/link";

const ButtonAdd = ({ text, link }) => {
    return (
        <>
            <Link href={link} className="w-fit">
                <button className="btn bg-digital-black text-digital-white hover:bg-forest border-none" style={{ width: "10rem", height: "1rem", fontSize: "0.9rem" }}>
                    {text}
                </button>
            </Link>
        </>
    );
};

export default ButtonAdd;
