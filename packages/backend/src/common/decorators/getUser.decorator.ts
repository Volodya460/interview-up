import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { Request } from 'express';
import { JwtPayload } from 'src/auth/strategies/at.strategy';

export const GetUserDecorator = createParamDecorator(
  (_: undefined, context: ExecutionContext): JwtPayload => {
    const request = context
      .switchToHttp()
      .getRequest<Request & { user: JwtPayload }>();
    const user = request.user;

    return user;
  },
);
