"use client";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const NavbarSmallScreens = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div onClick={handleMenu} className="md:hidden fixed right-8 top-10 cursor-pointer z-10">
                {menuOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>
            <div className={menuOpen ? "fixed right-0 top-0 h-full w-[45%] bg-[#5c606243] z-0 ease-in duration-500" : "fixed right-[-100%] top-0 h-full w-[45%] z-0 ease-in duration-500"}>
                <ul className="flex flex-col w-full items-end justify-start px-8 h-full py-24 gap-2">
                    <Link href="/about">
                        <li onClick={() => setMenuOpen(false)} className="hover:border-b text-xl">
                            About
                        </li>
                    </Link>
                    <Link href="/contact">
                        <li onClick={() => setMenuOpen(false)} className="hover:border-b text-xl">
                            Contact
                        </li>
                    </Link>
                    <Link href="/admin">
                        <li onClick={() => setMenuOpen(false)} className="hover:border-b text-xl">
                            Admin
                        </li>
                    </Link>
                </ul>
            </div>
        </>
    );
};

export default NavbarSmallScreens;
