import { Request } from 'express';
import { AuthService } from '../auth.service';
import { Role } from 'src/generated/prisma/enums';
type RtPayload = {
    sub: string;
    email: string;
    role: Role;
};
declare const RtStrategy_base: new (...args: any) => any;
export declare class RtStrategy extends RtStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(req: Request, payload: RtPayload): Promise<{
        id: string;
        email: string;
        role: string;
        refreshToken: any;
        sub: string;
    }>;
}
export {};
