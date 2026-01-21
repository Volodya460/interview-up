import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { AuthService } from './auth.service';
import {
  LoginDto,
  RegisterDto,
  ResendVerifyEmailDto,
  VerifyEmailDto,
} from './dto/auth.dto';
import type { JwtPayloadWithRt } from './types/token.types';
import { RtGuard } from './guards/rf.guard';
import { GetUserDecorator } from 'src/common/decorators/getUser.decorator';
import { AtGuard } from './guards/at.guard';
import type { JwtPayload } from './strategies/at.strategy';
import { refreshCookieOptions } from 'src/common/helpers/cookie-options';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  signup(@Body() dto: RegisterDto): Promise<string> {
    return this.authService.register(dto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async signin(
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<{ access_token: string }> {
    const tokens = await this.authService.login(dto);
    res.cookie('rt', tokens.refresh_token, refreshCookieOptions());

    return { access_token: tokens.access_token };
  }

  @Post('verify')
  @HttpCode(HttpStatus.OK)
  verifyEmail(@Body() dto: VerifyEmailDto): Promise<string> {
    return this.authService.verifyEmail(dto.verificationCode);
  }

  @Post('resend')
  @HttpCode(HttpStatus.OK)
  resendVerifyCode(@Body() dto: ResendVerifyEmailDto): Promise<string> {
    return this.authService.resendVerifyCode(dto.email);
  }

  @Post('refresh')
  @UseGuards(RtGuard)
  @HttpCode(HttpStatus.OK)
  async refreshTokens(
    @GetUserDecorator() user: JwtPayloadWithRt,
    @Res({ passthrough: true }) res: Response,
  ): Promise<{ access_token: string }> {
    const tokens = await this.authService.refresh(user.sub);
    res.cookie('rt', tokens.refresh_token, refreshCookieOptions());
    return { access_token: tokens.access_token };
  }

  @Post('logout')
  @UseGuards(AtGuard)
  @HttpCode(HttpStatus.OK)
  logout(
    @GetUserDecorator() user: JwtPayload,
    @Res({ passthrough: true }) res: Response,
  ): Promise<void> {
    res.clearCookie('rt', { path: '/auth/refresh' });
    return this.authService.logout(user.sub);
  }
}
