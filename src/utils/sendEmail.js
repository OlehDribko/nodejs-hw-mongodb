import nodemailer from 'nodemailer';

import { SMTP } from '../constants/constants.js';
import { getEnvWar } from './getEnv.js';
import dotenv from 'dotenv';
dotenv.config();
const transporter = nodemailer.createTransport({
  host: getEnvWar(SMTP.SMTP_HOST),
  port: SMTP.SMTP_PORT,
  secure: false,
  auth: {
    user: SMTP.SMTP_USER,
    pass: SMTP.SMTP_PASSWORD,
  },
});

export const sendEmail = async (email) => {
  return transporter.sendMail(email);
};
