import Image from "next/image";

const Icon = ({size}) => {
    return (
        <>
            <Image 
            src="/icons/SVG/X-Digital-black.svg" 
            alt="Icon" 
            width={size} 
            height={size} 
            className="cursor-pointer" priority />
        </>
    );
};

export default Icon;
