"use client";
import Link from "next/link";

const NavbarDesktop = () => {
    return (
        <ul className="hidden md:flex gap-12">
            <Link href="/about">
                <li className="hover:border-b text-xl">About</li>
            </Link>
            <Link href="/contact">
                <li className="hover:border-b text-xl">Contact</li>
            </Link>
            <Link href="/admin">
                <li className="hover:border-b text-xl">Admin</li>
            </Link>
        </ul>
    );
};

export default NavbarDesktop;
