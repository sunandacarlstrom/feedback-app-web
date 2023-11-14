import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className="relative w-full h-screen">
            <header>
                    <Navbar />
                </header>
                <main className="py-10 px-8">
                    {children}
                </main>
            </body>
        </html>
    );
};

export default RootLayout;
