'use server'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken';

export const postLogin = async () => {
  const cookieStore = await cookies();

  const token = jwt.sign({ username: 'user' }, 'lW5z+a7TSKf7ZxGhb//yY7nQUNGyKPxtkWIzb+SxhKw=', { expiresIn: '1h' });
 
  cookieStore.set('token', token)
}