import "@/app/globals.css";

const AdminLayout = ({ children }) => {
    return (
        <>
            <main className="py-10 px-8 bg-leather min-h-full">{children}</main>
        </>
    );
};

export default AdminLayout;
