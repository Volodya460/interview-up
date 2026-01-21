import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { compare, hash } from 'bcrypt';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from './types/user.types';
import { randomInt } from 'crypto';
import { UserService } from 'src/user/user.service';
import { Token } from './types/token.types';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { EmailService } from 'src/email-sender/email-sender.service';

@Injectable()
export class AuthService {
  constructor(
    private user: UserService,
    private jwtService: JwtService,
    private prisma: PrismaService,
    private emailService: EmailService,
  ) {}

  async register(dt: RegisterDto): Promise<string> {
    const { username, password, email, country } = dt;

    const byEmail = await this.user.findByEmail(email);
    if (byEmail) throw new ForbiddenException('Email already exists');

    const byUsername = await this.user.findByUsername(username);
    if (byUsername) throw new ForbiddenException('Username already exists');

    const hashPassword: string = await bcrypt.hash(password, 10);

    const verificationCode = this.generateVerificationCode();

    const newUser = await this.user.createUser({
      username,
      email,
      password: hashPassword,
      country,
      verificationCode,
    });
    if (!newUser) {
      throw new ForbiddenException('User registration failed');
    }

    const verifyEmail = {
      to: email,
      subject: 'Email Verification Code',
      html: `<p>Your verification code is: <strong>${verificationCode}</strong></p>`,
    };

    await this.emailService.sendMail(verifyEmail);

    return 'You are successfully registered. Please check your email to verify your account';
  }

  async login(dto: LoginDto): Promise<Token> {
    const user = await this.user.findByEmail(dto.email);

    if (!user) {
      throw new ForbiddenException('User not found!');
    }
    if (!user.verify) {
      throw new HttpException(
        'Email not verified',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const isPasswordMatch = await bcrypt.compare(dto.password, user.password);

    if (!isPasswordMatch) {
      throw new ForbiddenException('Wrong password');
    }

    const tokens = await this.getTokens(user.id, user.email, user.role);
    await this.updateRefreshTokenHash(user.id, tokens.refresh_token);

    return tokens;
  }

  async verifyEmail(verificationCode: string) {
    const user = await this.user.findByVerify(verificationCode);

    if (!user) {
      throw new ForbiddenException('Invalid verification code');
    }

    if (user?.verificationCode !== verificationCode) {
      throw new ForbiddenException('Invalid verification code');
    }

    await this.user.updateUserVerify(verificationCode);

    return 'Email verified successfully';
  }
  async resendVerifyCode(email: string) {
    const user = await this.user.findByEmail(email);

    if (!user) {
      throw new ForbiddenException('User not found!');
    }

    const verificationCode = this.generateVerificationCode();

    await this.user.updateUserVerifyCode(verificationCode, email);

    const verifyEmail = {
      to: email,
      subject: 'Email Verification Code',
      html: `<p>Your verification code is: <strong>${verificationCode}</strong></p>`,
    };

    await this.emailService.sendMail(verifyEmail);

    return 'Please check your email to verify your account';
  }

  async logout(userId: string) {
    await this.prisma.user.update({
      where: { id: userId },
      data: { hashed_rt: null },
    });
  }

  async validateAccessTokenUser(userID: string) {
    const user = (await this.user.findById(userID)) as User;

    if (!user) throw new UnauthorizedException('User not found');

    if (!user.verify) throw new UnauthorizedException('Email not verified');

    return user as { id: string; email: string; role: string; verify: boolean };
  }

  async validateRefreshTokenUser(userID: string, refreshToken: string) {
    const user = (await this.user.findById(userID)) as User;

    if (!user) throw new UnauthorizedException('User not found');
    if (!user.hashed_rt)
      throw new UnauthorizedException('Refresh token is not set');

    const hashedRt: string = user.hashed_rt;
    const compareResult: unknown = await compare(refreshToken, hashedRt);
    if (typeof compareResult !== 'boolean') {
      throw new UnauthorizedException('Invalid refresh token');
    }
    const ok: boolean = compareResult;
    if (!ok) throw new UnauthorizedException('Invalid refresh token');

    return { id: user.id, email: user.email, role: user.role };
  }

  async getTokens(userId: string, email: string, role: string): Promise<Token> {
    const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
    const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;

    if (!accessTokenSecret || !refreshTokenSecret) {
      throw new Error('JWT secrets are not configured');
    }

    const tokens = await Promise.all([
      this.jwtService.signAsync(
        { sub: userId, email, role },
        { secret: accessTokenSecret, expiresIn: '5m' },
      ),
      this.jwtService.signAsync(
        { sub: userId, email, role },
        { secret: refreshTokenSecret, expiresIn: '7d' },
      ),
    ]);

    const [at, rt] = tokens;

    return {
      access_token: at,
      refresh_token: rt,
    };
  }

  async refresh(userId: string): Promise<Token> {
    const user = await this.user.findById(userId);
    if (!user) throw new ForbiddenException('Access denied');

    const tokens = await this.getTokens(user.id, user.email, user.role);
    await this.updateRefreshTokenHash(user.id, tokens.refresh_token);

    return tokens;
  }
  async updateRefreshTokenHash(userId: string, rt: string): Promise<void> {
    const hashedRt = (await hash(rt, 10)) as string;
    await this.prisma.user.update({
      where: { id: userId },
      data: { hashed_rt: hashedRt },
    });
  }
  private generateVerificationCode(): string {
    return randomInt(1000, 10000).toString();
  }
}
