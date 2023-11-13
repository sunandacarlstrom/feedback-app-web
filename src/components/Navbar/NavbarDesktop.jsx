"use client";
import Link from "next/link";

const NavbarDesktop = () => {
    return (
        <ul className="hidden md:flex gap-12">
            <Link href="/about">
                <li className="hover:border-b border-pop text-l">About</li>
            </Link>
            <Link href="/contact">
                <li className="hover:border-b border-pop text-l">Contact</li>
            </Link>
            <Link href="/admin">
                <li className="hover:border-b border-pop text-l">Admin</li>
            </Link>
        </ul>
    );
};

export default NavbarDesktop;
