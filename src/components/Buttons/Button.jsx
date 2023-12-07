import Link from "next/link";

const Button = ({ children, link, size = "", backgroundColor = "digital-black", textColor = "digital-white", hoverColor = "forest", hoverText = "digital-white" }) => {
    var btnSize = "";
    if (size === "large") {
        btnSize = "w-40 h-4";
    }
    if (size === "small") {
        btnSize = "btn-sm";
    }
    return (
        <>
            <Link href={link} className="w-fit">
                <button className={`btn border-none bg-${backgroundColor} text-${textColor} hover:bg-${hoverColor} hover:text-${hoverText} ${btnSize}`}>{children}</button>
            </Link>
        </>
    );
};

export default Button;
