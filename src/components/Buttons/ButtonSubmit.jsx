const ButtonSubmit = ({ children }) => {
    return (
        <button type="submit" className="btn bg-digital-black text-digital-white hover:bg-forest border-none w-fit">
            {children}
        </button>
    );
};

export default ButtonSubmit;
