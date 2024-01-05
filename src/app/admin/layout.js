import "@/app/globals.css";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import Navbar from "@/components/Navbar/Navbar";

export const metadata = {
    title: "Admin Page",
};

const AdminLayout = ({ children }) => {
    return (
        <AuthProvider>
            <header>
                <Navbar />
            </header>
            <main className="py-10 px-8 bg-forest min-h-full">{children}</main>
        </AuthProvider>
    );
};

export default AdminLayout;
