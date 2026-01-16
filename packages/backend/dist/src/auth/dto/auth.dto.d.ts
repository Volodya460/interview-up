import { Role } from 'src/generated/prisma/client';
export declare class RegisterDto {
    username: string;
    email: string;
    password: string;
    country: string;
    role?: Role;
}
export declare class LoginDto {
    email: string;
    password: string;
}
export declare class VerifyEmailDto {
    verificationCode: string;
}
export declare class ResendVerifyEmailDto {
    email: string;
}
