import {ClientUserDto, CreateUserDto, UserLoginDto, ValidateUserData, UserUpdateDto, UserType} from "./user.type";
import { useMutation } from "@tanstack/react-query";
import {createUser, deleteUser, updateUser, validateUser} from "./user.service";

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

export const useUpdateUser = () => {
    return useMutation<UserType, Error, UserUpdateDto>({
        mutationKey: ["User", "updateUser"],
        mutationFn: async ({ id, formData }) => {
            return await updateUser(id, formData);
        }
    });
};


export const useDeleteUser = () => {
    return useMutation<UserType, Error, number>({
        mutationKey: ["User", "deleteUser"],
        mutationFn: async (id) => {
            return await deleteUser(id);
        }
    })
}


