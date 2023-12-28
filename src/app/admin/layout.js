import "@/app/globals.css";
import Navbar from "@/components/Navbar/Navbar";

export const metadata = {
    title: "Admin Page",
};

const AdminLayout = ({ children }) => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="py-10 px-8 bg-forest min-h-full">{children}</main>
        </>
    );
};

export default AdminLayout;
