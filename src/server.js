import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { getAllContact, getContactById } from './services/contacts.js';

const app = express();

dotenv.config();

const PORT = Number(process.env.PORT);

export const setupServer = () => {
  app.use(express.json());
  app.use(cors());

  app.get('/contacts', async (req, res, next) => {
    const contacts = await getAllContact();
    res.status(200).json({
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts,
    });
  });

  app.get('/contacts/:contactId', async (req, res, next) => {
    const { contactId } = req.params;
    const contact = await getContactById(contactId);
    if (!contact) {
      return res.status(404).json({
        message: 'Contact not found',
      });
    }
    console.log(contact);
    res.status(200).json({
      status: 200,
      message: `Successfully found contact with id ${contactId}!`,
      data: contact,
    });
  });

  app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
  });

  // app.use((req, res, next) => {
  //   res.status(404).send({ message: 'Not found' });
  // });
};
