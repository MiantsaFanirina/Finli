import { useState } from "react";

export const usePasswordConfirmation = () => {
    const [error, setError] = useState<string | null>(null);

    const isConfirmed = (password: string, confirmPassword: string) => {
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return false;
        }
        setError(null);
        return true;
    };

    return { isConfirmed, error };
};