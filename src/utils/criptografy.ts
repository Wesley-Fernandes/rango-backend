import { compareSync, genSaltSync, hashSync } from 'bcrypt';
import { JwtPayload, sign, verify } from 'jsonwebtoken';
import env from '../config/env';

export const encript = (password: string): string => {
  const salt = genSaltSync(10);
  const hash = hashSync(password, salt);
  return hash;
};

export const decript = (password: string, hashedPassword: string): boolean => {
  return compareSync(password, hashedPassword);
};

export const genToken = (id: string): string => {
  return sign({ id }, env.JWT_SECRET_CODE, { expiresIn: '2h' });
};

export function decode(token: string): { id: string } | null {
  try {
    const decoded = verify(token, env.JWT_SECRET_CODE) as { id: string };
    return decoded;
  } catch (error) {
    console.error('Invalid token', error);
    return null;
  }
}
