import jwt from 'jsonwebtoken';

export function verifyToken(token: string): boolean {
  const secret = process.env.JWT_SECRET || 'default_secret';

  try {
    jwt.verify(token, secret);
    return true;
  } catch {
    return false;
  }
}