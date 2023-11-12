import Image from "next/image";
import Link from "next/link";

import Logo from "../../../public/Knowit-logotypes/Logotype-Knowit-Digital-black.svg";
import NavbarDesktop from "./NavbarDesktop";
import NavbarSmallScreens from "./NavbarSmallScreens";

const Navbar = () => {
    return (
        <nav className="w-full h-24 shadow-xl bg-white">
            <div className="flex justify-between items-center gap-1 h-full w-full px-4 2xl:px-16">
                <Link href="/">
                    <Image src={Logo} alt="Logo" width="205" height="75" className="cursor-pointer" priority />
                </Link>
                <div>
                    <NavbarDesktop />
                    <NavbarSmallScreens />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
