import "@/app/globals.css";

export const metadata = {
    title: "Quiz Page",
};

const QuizLayout = ({ children }) => {
    return (
        <>
            <main className="py-10 px-8 bg-leather min-h-full">{children}</main>
        </>
    );
};

export default QuizLayout;
