import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <main>
                    <Navbar />
                    <div className="">{children}</div>
                </main>
            </body>
        </html>
    );
};

export default RootLayout;
