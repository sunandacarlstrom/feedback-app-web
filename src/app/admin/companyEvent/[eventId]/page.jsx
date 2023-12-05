import ButtonAdd from "@/components/Buttons/ButtonAdd";
import ButtonDelete from "@/components/Buttons/ButtonDelete";
import ButtonEdit from "@/components/Buttons/ButtonEdit";

const EditPage = () => {
    return (
        <>
            <div className="w-full flex flex-col gap-2 justify-center items-center py-8">
                <div className="card bg-clay shadow-xl px-10 py-6 gap-2 items-center justify-center border rounded-xl border-pear">
                    <ButtonDelete text={"Delete"} link="/quiz" />
                    <ButtonEdit text={"Edit"} link="/quiz" />
                    <ButtonAdd text={"Add question"} link="/quiz" />
                </div>
            </div>
        </>
    );
};

export default EditPage;
