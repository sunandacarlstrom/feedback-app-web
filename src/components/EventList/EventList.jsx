const EventList = ({ name, events }) => {
    return (
        <div className="blog-list">
            <h2>{name}</h2>
            {events.map((event) => (
                <div className="blog-preview" key={event.id}>
                    <h2>{event.id}</h2>
                    <h2>{event.name}</h2>
                    {event.quiz[0].questions.map((q => (
                        <h3 key={q.id}>{q.question}</h3>
                    )))}
                </div>
            ))}
        </div>
    );
};

export default EventList;
