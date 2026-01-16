import { AuthService } from './auth.service';
import { LoginDto, RegisterDto, ResendVerifyEmailDto, VerifyEmailDto } from './dto/auth.dto';
import type { JwtPayloadWithRt, Token } from './types/token.types';
import type { JwtPayload } from './strategies/at.strategy';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: RegisterDto): Promise<string>;
    signin(dto: LoginDto): Promise<Token>;
    verifyEmail(dto: VerifyEmailDto): Promise<string>;
    resendVerifyCode(dto: ResendVerifyEmailDto): Promise<string>;
    refreshTokens(user: JwtPayloadWithRt): Promise<Token>;
    logout(user: JwtPayload): Promise<void>;
}
