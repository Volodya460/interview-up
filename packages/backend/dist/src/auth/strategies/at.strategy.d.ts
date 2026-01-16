import { AuthService } from '../auth.service';
import { Role } from 'src/generated/prisma/enums';
export type JwtPayload = {
    sub: string;
    email: string;
    role: Role;
};
declare const AtStrategy_base: new (...args: any) => any;
export declare class AtStrategy extends AtStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(payload: JwtPayload): Promise<{
        sub: string;
        email: string;
        role: string;
    }>;
}
export {};
