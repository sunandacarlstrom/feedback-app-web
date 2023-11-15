"use client";
import Link from "next/link";

const NavbarDesktop = () => {
    return (
        <ul className="hidden md:flex gap-12">
            <Link href="/about">
                <li className="border-b border-transparent hover:border-pop text-l transition-all duration-300">About</li>
            </Link>
            <Link href="/contact">
                <li className="border-b border-transparent hover:border-pop text-l transition-all duration-300">Contact</li>
            </Link>
            <Link href="/admin">
                <li className="border-b border-transparent hover:border-pop text-l transition-all duration-300">Admin</li>
            </Link>
        </ul>
    );
};

export default NavbarDesktop;
