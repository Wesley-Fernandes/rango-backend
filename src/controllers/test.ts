import { Request, Response } from 'express';
import { UnauthorizedError } from '../utils/api-errors';
import { decode } from '../utils/criptografy';

export class Test {
  error_handler(req: Request, res: Response) {
    throw new UnauthorizedError('Sem autorização!');
  }

  async online(req: Request, res: Response) {
    res.status(200).json({ message: 'API is online' });
  }

  async auth(req: Request, res: Response) {
    const token = req.headers.authorization as string;
    const user = decode(token);
    res
      .status(200)
      .json({ message: 'User authenticated', token, id: user?.id });
  }
}
