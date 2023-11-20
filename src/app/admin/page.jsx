import EventList from "@/components/EventList/EventList";

const AdminPage = () => {
    return (
        <>
            <div>
                <h1>Admin Page</h1>
                <p>Välj quiz utifrån aktuellt event</p>
            </div>
            <EventList />
        </>
    );
};

export default AdminPage;
