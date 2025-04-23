// GLOBAL
export interface ClientUserDto {
    userId: number;
    register: string;
}

export interface UserType {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    username: string;
    email: string;
}

// QUERIES & MUTATIONS
export type UserLoginDto = {
    email: string;
    password: string;
}
interface CredentialsErrorDto {
    email: boolean;
    password: boolean;
}
export type ValidateUserData = CredentialsErrorDto | ClientUserDto;

export type CreateUserDto = {
    username: string;
    email: string;
    password: string;
}

export type UserUpdateInput = {
    username?:  string;
    email?: string;
    password?: string;
}

export type UserUpdateDto = {
    id: number;
    formData: UserUpdateInput;
}



// STORE
