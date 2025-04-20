export type UserLoginDto = {
    email: string;
    password: string;
}

interface ByCredentials {
    email: boolean;
    password: boolean;
    userId?: never;
    register?: never;
}

interface ByIdAndRegister {
    userId: number;
    register: string;
    email?: never;
    password?: never;
}

export type ValidateUserData = ByCredentials | ByIdAndRegister;