import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { Token } from './types/token.types';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { EmailService } from 'src/email-sender/email-sender.service';
export declare class AuthService {
    private user;
    private jwtService;
    private prisma;
    private emailService;
    constructor(user: UserService, jwtService: JwtService, prisma: PrismaService, emailService: EmailService);
    register(dt: RegisterDto): Promise<string>;
    login(dto: LoginDto): Promise<Token>;
    verifyEmail(verificationCode: string): Promise<string>;
    resendVerifyCode(email: string): Promise<string>;
    logout(userId: string): Promise<void>;
    validateAccessTokenUser(userID: string): Promise<{
        id: string;
        email: string;
        role: string;
        verify: boolean;
    }>;
    validateRefreshTokenUser(userID: string, refreshToken: string): Promise<{
        id: string;
        email: string;
        role: string;
    }>;
    getTokens(userId: string, email: string, role: string): Promise<Token>;
    refresh(userId: string): Promise<Token>;
    updateRefreshTokenHash(userId: string, rt: string): Promise<void>;
    private generateVerificationCode;
}
