"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useValidateUser } from "@/features/user/user.mutation";

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleLoginData = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const { mutate, error, data, isPending } = useValidateUser();

    const handleValidateUser = (e: FormEvent) => {
        e.preventDefault();
        mutate(formData); // This triggers the mutation
    };

    return (
        <form onSubmit={handleValidateUser}>
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleLoginData}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleLoginData}
            />
            <button type="submit" disabled={isPending}>
                {isPending ? "Logging in..." : "Login"}
            </button>
            {error && <p style={{ color: "red" }}>Login failed.</p>}
            {JSON.stringify(data)}
        </form>
    );
};

export default LoginPage;
