import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../utils/api-errors';

export const errors = (
  error: Error & Partial<ApiError>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('Error:', error);
  const statusCode = error.statusCode ?? 500;
  const message = error.statusCode ? error.message : 'Internal Server Error';
  return res.status(statusCode).json({ message });
};
