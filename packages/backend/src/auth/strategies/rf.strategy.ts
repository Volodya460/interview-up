import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, StrategyOptionsWithRequest } from 'passport-jwt';
import { Request } from 'express';
import { AuthService } from '../auth.service';
import { Role } from 'src/generated/prisma/enums';
const secret = process.env.REFRESH_TOKEN_SECRET || 'fallback-refresh-secret';
type RtPayload = { sub: string; email: string; role: Role };

@Injectable()
export class RtStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken() as (
        request: any,
      ) => string | null,
      ignoreExpiration: false,
      secretOrKey: secret,
      passReqToCallback: true,
    } as StrategyOptionsWithRequest);
  }

  async validate(req: Request, payload: RtPayload) {
    const authHeader = req.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      throw new UnauthorizedException('Missing refresh token');
    }

    const refreshToken = authHeader.slice(7).trim();
    if (!refreshToken) throw new UnauthorizedException('Missing refresh token');

    // ключевое: сверяем refreshToken с hashed_rt в БД
    const user = await this.authService.validateRefreshTokenUser(
      payload.sub,
      refreshToken,
    );

    return { ...payload, refreshToken, ...user };
  }
}
