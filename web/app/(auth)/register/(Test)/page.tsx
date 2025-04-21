"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { usePasswordConfirmation } from "@/features/user/user.hook"
import {useAlphanumericUnderscoreOnly} from "@/hooks/";

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    // Hooks
    const { error: confirmError, isConfirmed } = usePasswordConfirmation();
    const { error: usernameError, validate: validateUsername } = useAlphanumericUnderscoreOnly();


    // Event handling
    const handleLoginData = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleValidateUser = (e: FormEvent) => {
        e.preventDefault();
        const { username, email, password, confirmPassword } = formData;

        const isUsernameValid = validateUsername(username);
        const isPasswordValid = isConfirmed(password, confirmPassword);

        if (!isUsernameValid || !isPasswordValid) return;

        console.log("Form submitted successfully!", { username, email, password });
        // Add real login logic here
    };

    return (
        <form onSubmit={handleValidateUser}>
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleLoginData}
                required
            />
            {usernameError && <p style={{ color: "red" }}>{usernameError}</p>}

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleLoginData}
                required
            />

            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleLoginData}
                required
            />

            <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleLoginData}
                required
            />
            {confirmError && <p style={{ color: "red" }}>{confirmError}</p>}


            <button type="submit">Login</button>
        </form>
    );
};

export default RegisterPage;