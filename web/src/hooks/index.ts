import { useState } from "react";

export function useAlphanumericUnderscoreOnly() {
    const [error, setError] = useState<string | null>(null);

    function validate(value: string): boolean {
        const isValid = /^[a-zA-Z0-9_]+$/.test(value);
        if (!isValid) {
            setError("This field can only contain letters, numbers, and underscores.");
        } else {
            setError(null);
        }
        return isValid;
    }

    return { validate, error };
}
