import ButtonStart from "@/components/Button/ButtonStart";

const LoginForm = () => {
    return (
        <>
            <div className="card bg-digital-white shadow-xl p-4">
                <div className="card-body">
                    <h2 className="card-title mb-4 text-center">Log in as Admin</h2>
                    <form id="login-form">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <label htmlFor="username">
                                Username
                            </label>
                            <input type="text" placeholder="Username" name="username" id="login-username" className="border p-2 rounded-md w-full focus:outline-none focus:border-pop" />
                            <label htmlFor="password">
                                Password
                            </label>
                            <input type="password" placeholder="Password" name="password" id="login-password" className="border p-2 rounded-md w-full focus:outline-none focus:border-pop" />
                        </div>
                        <div className="card-actions justify-end mt-4">
                            <ButtonStart text={"Log In"} link="/admin" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
