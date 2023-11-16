import ButtonStart from "@/components/Button/ButtonStart";
import EventList from "@/components/EventList/EventList";

const AdminPage = () => {
    return (
        <>
            <h1>Admin Page</h1>
            <ul className="w-full">
                <EventList />
            </ul>
            <ButtonStart text={"Start Quiz"} link="/quiz" />
        </>
    );
};

export default AdminPage;
