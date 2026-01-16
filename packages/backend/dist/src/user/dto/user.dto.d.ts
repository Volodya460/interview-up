import { Role } from 'src/generated/prisma/enums';
export declare class CreateUserDto {
    username: string;
    email: string;
    password: string;
    country: string;
    verificationCode: string;
    role?: Role;
}
export declare class UpdateUserDto {
    username: string;
    country: string;
}
export declare class ChangePasswordDto {
    currentPassword: string;
    newPassword: string;
}
export declare class ResetPasswordDto {
    email: string;
    newPassword: string;
}
