"use server"
import {ClientUserDto, UserLoginDto, UserType, UserUpdateDto, UserUpdateInput, ValidateUserData} from "./user.type";
import api from "@/lib/apiClient";

export const validateUser = async  (formData: UserLoginDto) => {
    const {data} = await api.post(`/user/validate`, formData)

    if(!data) throw new Error("Error while validating user")

    return data as ValidateUserData
}

export const createUser = async  (formData: UserLoginDto) => {
    const {data} = await api.post(`/user`, formData)

    if(!data) throw new Error("Error while creating user")

    return data as ClientUserDto

}

export const updateUser = async  (userId: number, formData: UserUpdateInput) => {
    const { data } = await api.patch(`/user/${userId}`, formData)

    if(!data) throw new Error("Error while updating user")

    return data as UserType
}

export const deleteUser = async  (userId: number) => {
    const { data } = await api.delete(`/user/${userId}`)

    if(!data) throw new Error("Error while deleting user")

    return data as UserType
}

export const getUserById = async (userId: number) => {
    const { data } = await api.get(`/user/${userId}`)

    if(!data) throw new Error("User not found")

    return data as UserType

}

