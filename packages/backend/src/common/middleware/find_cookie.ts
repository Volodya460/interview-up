import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LogCookiesMiddleware implements NestMiddleware {
  use(req: Request, _res: Response, next: NextFunction) {
    console.log('--- INCOMING REQUEST ---');
    console.log('url:', req.originalUrl);
    console.log('cookie header:', req.headers.cookie);
    console.log('req.cookies:', req.cookies);
    next();
  }
}
