import "./globals.css";

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className="relative w-full h-screen">{children}</body>
        </html>
    );
};

export default RootLayout;
