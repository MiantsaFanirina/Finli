import {ClientUserDto, CreateUserDto, UserLoginDto, ValidateUserData} from "./user.type";
import { useMutation } from "@tanstack/react-query";
import {createUser, validateUser} from "./user.service";

export const useValidateUser = () => {
    return useMutation<ValidateUserData, Error, UserLoginDto>({
        mutationKey: ["User"],
        mutationFn: async (formData) => {
            return await validateUser(formData);
        },
    });
};

export const useCreateUser = () => {
    return useMutation<ClientUserDto, Error, CreateUserDto>({
        mutationKey: ["User"],
        mutationFn: async (formData) => {
            return await createUser(formData);
        },
    });
};



