import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { Role } from 'src/generated/prisma/enums';

export type JwtPayload = {
  sub: string;
  email: string;
  role: Role;
};

@Injectable()
export class AtStrategy extends PassportStrategy(Strategy, 'jwt-access') {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken() as (
        request: any,
      ) => string | null,
      ignoreExpiration: false,
      secretOrKey: process.env.ACCESS_TOKEN_SECRET || 'fallback-secret',
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.authService.validateAccessTokenUser(payload.sub);

    // то, что вернёшь здесь — будет в req.user
    return { sub: user.id, email: user.email, role: user.role };
  }
}
