"use server"
import {UserLoginDto, ValidateUserData} from "./user.type";
import api from "@/lib/apiClient";

export const validateUser = async  (formData: UserLoginDto) => {
    const {data} = await api.post(`/user/validate`, formData)

    if(!data) throw new Error("Error while validating user")

    return data as ValidateUserData
}

