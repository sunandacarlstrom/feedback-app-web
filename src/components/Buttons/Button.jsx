import Link from "next/link";

const Button = ({ children, link ="", onClick, id, size = "", backgroundColor = "digital-black", textColor = "digital-white", hoverColor = "forest", hoverText = "digital-white" }) => {
    var btnSize = "";
    if (size === "large") {
        btnSize = "w-40 h-4";
    }
    if (size === "small") {
        btnSize = "btn-sm";
    }
    
    return (
        <>
            {
                link !== "" ?(
                    <Link href={link} className="w-fit">
                        <button id={id}className={`btn border-none bg-${backgroundColor} text-${textColor} hover:bg-${hoverColor} hover:text-${hoverText} ${btnSize}`}>{children}</button>
                    </Link>
                ) : (
                    <button id={id} onClick={onClick} className={`btn border-none bg-${backgroundColor} text-${textColor} hover:bg-${hoverColor} hover:text-${hoverText} ${btnSize}`}>{children}</button>
                )
            }
        </>
    );
};

export default Button;
