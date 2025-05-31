import { User } from '../db/models/auth.js';
import createHttpError from 'http-errors';
import bcrypt from 'bcrypt';
export const userRegisterService = async (payload) => {
  const isUser = await User.findOne({ email: payload.email });
  if (isUser) {
    throw createHttpError(409, 'Email in use');
  }
  const hashPassword = await bcrypt.hash(payload.password, 10);
  return await User.create({ ...payload, password: hashPassword });
};
