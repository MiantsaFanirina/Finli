// GLOBAL
export interface ClientUserDto {
    userId: number;
    register: string;
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



// STORE
