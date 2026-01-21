import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, StrategyOptionsWithRequest } from 'passport-jwt';
import { Request } from 'express';
import { AuthService } from '../auth.service';
import { Role } from 'src/generated/prisma/enums';

type RtPayload = { sub: string; email: string; role: Role };

function cookieExtractor(req: Request): string | null {
  if (!req?.cookies) return null;
  return req.cookies['rt'] || null;
}

@Injectable()
export class RtStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor(private authService: AuthService) {
    const secret = process.env.REFRESH_TOKEN_SECRET;
    if (!secret) {
      throw new Error('REFRESH_TOKEN_SECRET is not configured');
    }

    super({
      jwtFromRequest: cookieExtractor, // ✅ ВАЖНО
      secretOrKey: secret,
      ignoreExpiration: false,
      passReqToCallback: true,
    } as StrategyOptionsWithRequest);
  }

  async validate(req: Request, payload: RtPayload) {
    const refreshToken = req.cookies?.rt;
    if (!refreshToken) throw new UnauthorizedException('Missing refresh token');

    const user = await this.authService.validateRefreshTokenUser(
      payload.sub,
      refreshToken,
    );

    return { ...payload, refreshToken, ...user };
  }
}
