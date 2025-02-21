import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
export declare class AuthchecMiddleware implements NestMiddleware {
    use(reg: Request, res: Response, next: NextFunction): void;
}
