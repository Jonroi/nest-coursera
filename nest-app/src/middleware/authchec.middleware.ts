import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class AuthchecMiddleware implements NestMiddleware {
  use(reg: Request, res: Response, next: NextFunction) {
    if (reg.headers.authorization) next();
    res.status(403).json({ code: 403, message: 'Not authorized' });
  }
}
