import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRouter from './routes/contacts.js';
import { getAllContact, getContactById } from './services/contacts.js';

const app = express();

dotenv.config();

const PORT = Number(process.env.PORT);

export const setupServer = () => {
  app.use(express.json());
  app.use(cors());

  app.use('/contacts', contactRouter);

  app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
  });
};
