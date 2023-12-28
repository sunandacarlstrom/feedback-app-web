"use client";
import ButtonLogin from "@/components/Buttons/ButtonLogin";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

const LoginForm = () => {
    const [form, setForm] = useState({ email: "", password: "" });

    const handleInput = (e) => {
        setForm((prevForm) => {
            const updatedForm = { ...prevForm };
            updatedForm[e.target.id] = e.target.value;
            return updatedForm;
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (form.email === "" || form.password === "") {
            toast.error("Please fill the login form!", { theme: "colored" });
            return;
        }
        console.log("yest");
    };

    useEffect(() => {
        console.log(form);
    }, [form]);

    return (
        <>
            <div className="card bg-digital-white shadow-xl p-4">
                <div className="card-body">
                    <h2 className="card-title mb-4 text-center">Log in as Admin</h2>
                    <form id="login-form" onSubmit={handleLogin}>
                        <div className="flex flex-col gap-4 justify-center items-center">
                            <input
                                type="text"
                                value={form.email}
                                onChange={handleInput}
                                placeholder="Email"
                                name="email"
                                id="email"
                                className="border p-2 rounded-md w-full focus:outline-none focus:border-pear"
                            />
                            <input
                                type="password"
                                value={form.password}
                                onChange={handleInput}
                                placeholder="Password"
                                name="password"
                                id="password"
                                className="border p-2 rounded-md w-full focus:outline-none focus:border-pear"
                            />
                            <ButtonLogin>Log in</ButtonLogin>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default LoginForm;
