"use client";
import Link from "next/link";

const NavbarDesktop = () => {
    return (
        <ul className="hidden md:flex gap-12">
            <Link href="https://www.knowit.se/om-knowit/">
                <li className="border-b border-transparent hover:border-pop text-l transition-all duration-300">About</li>
            </Link>
            <Link href="https://www.knowit.se/kontakt/">
                <li className="border-b border-transparent hover:border-pop text-l transition-all duration-300">Contact</li>
            </Link>
        </ul>
    );
};

export default NavbarDesktop;
