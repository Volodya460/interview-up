import type { Response } from 'express';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto, ResendVerifyEmailDto, VerifyEmailDto } from './dto/auth.dto';
import type { JwtPayloadWithRt } from './types/token.types';
import type { JwtPayload } from './strategies/at.strategy';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: RegisterDto): Promise<string>;
    signin(dto: LoginDto, res: Response): Promise<{
        access_token: string;
    }>;
    verifyEmail(dto: VerifyEmailDto): Promise<string>;
    resendVerifyCode(dto: ResendVerifyEmailDto): Promise<string>;
    refreshTokens(user: JwtPayloadWithRt, res: Response): Promise<{
        access_token: string;
    }>;
    logout(user: JwtPayload, res: Response): Promise<void>;
}
