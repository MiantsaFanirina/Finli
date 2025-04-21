import { UserLoginDto, ValidateUserData } from "./user.type";
import { useMutation } from "@tanstack/react-query";
import { validateUser } from "./user.service";

export const useValidateUser = () => {
    return useMutation<ValidateUserData, Error, UserLoginDto>({
        mutationKey: ["validatedUser"],
        mutationFn: async (formData) => {
            return await validateUser(formData);
        },
    });
};

