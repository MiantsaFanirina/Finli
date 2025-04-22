"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { usePasswordConfirmation } from "@/features/user/user.hook";
import { useAlphanumericUnderscoreOnly } from "@/hooks/";
import { useCreateUser } from "@/features/user/user.mutation";

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    // Mutations
    const { mutate, error, data, isPending } = useCreateUser();

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

        mutate({ username, email, password });
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

            {/* Display API error if any */}
            {error && (
                <p style={{ color: "red" }}>
                    Something went wrong
                </p>
            )}

            {/* Loading State */}
            <button type="submit" disabled={isPending}>
                {isPending ? "Creating account..." : "Register"}
            </button>

            {/* Success Message */}
            {data && <p style={{ color: "green" }}>User registered successfully!</p>}
        </form>
    );
};

export default RegisterPage;
