const ButtonSubmit = ({ children }) => {
    return (
        <button type="submit" className="btn bg-digital-black text-digital-white hover:bg-leather border-none w-fit">
            {children}
        </button>
    );
};

export default ButtonSubmit;
