import ButtonLogin from "@/components/Buttons/ButtonLogin";

const LoginForm = () => {
    return (
        <>
            <div className="card bg-digital-white shadow-xl p-4">
                <div className="card-body">
                    <h2 className="card-title mb-4 text-center">Log in as Admin</h2>
                    <form id="login-form">
                        <div className="flex flex-col gap-4 justify-center items-center">
                            <input type="text" placeholder="Username" name="username" id="login-username" className="border p-2 rounded-md w-full focus:outline-none focus:border-pear" />
                            <input type="password" placeholder="Password" name="password" id="login-password" className="border p-2 rounded-md w-full focus:outline-none focus:border-pear" />
                            <ButtonLogin link="/admin/companyEvent">Log in</ButtonLogin>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
