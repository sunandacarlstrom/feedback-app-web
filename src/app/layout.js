import Link from "next/link";
import "./globals.css";

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <main>
                    <nav>
                        <Link href="/">Home</Link>
                        <Link href="/notes">Notes</Link>
                    </nav>
                    {children}
                </main>
            </body>
        </html>
    );
};

export default RootLayout;
