import { NextFunction, Request, Response } from 'express';
import { AuthMiddlewareSchema } from '../schema/middleware';
import { verify } from 'jsonwebtoken';
import { UnauthorizedError } from '../utils/api-errors';
import env from '../config/env';

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = AuthMiddlewareSchema.parse(req.headers);
    verify(authorization, env.JWT_SECRET_CODE, (error, data) => {
      if (error) {
        throw new UnauthorizedError('Token invalido!');
      }
      next();
    });
  } catch (error) {
    throw new UnauthorizedError('Token invalido!');
  }
};
