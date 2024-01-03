const ButtonLogin = ({ children }) => {
    return (
        <>
            <button type="submit" className="btn bg-digital-black text-digital-white hover:bg-forest border-none">
                {children}
            </button>
        </>
    );
};

export default ButtonLogin;
