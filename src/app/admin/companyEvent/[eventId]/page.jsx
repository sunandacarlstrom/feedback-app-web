import Button from "@/components/Buttons/Button";

const EditPage = () => {
    return (
        <>
            <div className="w-full flex flex-col gap-2 justify-center items-center py-8">
                <div className="card bg-clay shadow-xl px-10 py-6 gap-2 items-center justify-center border rounded-xl border-pear">
                    <Button size="small" backgroundColor="leather" hoverColor="pebble" hoverText="digital-black" link="/quiz">
                        Delete
                    </Button>
                    <Button size="small" backgroundColor="forest" hoverColor="pebble" hoverText="digital-black" link="/quiz">
                        Edit
                    </Button>
                    <Button link="/quiz">Add question</Button>
                </div>
            </div>
        </>
    );
};

export default EditPage;
