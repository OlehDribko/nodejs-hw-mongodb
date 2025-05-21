import createHttpError from 'http-errors';

import {
  getAllContact,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
} from '../services/contacts.js';

const createNewContact = async (req, res) => {
  const newContact = await createContact(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data: newContact,
  });
};

const getAll = async (req, res) => {
  const contacts = await getAllContact();
  res.status(200).json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};
const getById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);
  if (!contact) {
    res
      .status(404)
      .json({ status: 404, message: 'Contact not found', data: contactId });
  }
  res.status(200).json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: contact,
  });
};
const PatchupdateContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await updateContact(contactId, req.body);
  if (!result) {
    throw createHttpError(404, 'Contact not found');
    return;
  }
  const status = result.isNew ? 201 : 200;
  res.status(status).json({
    status: 200,
    message: 'Successfully patched a contact!',
    data: result.contact,
  });
};
const deleteContactContr = async (req, res, next) => {
  const { contactId } = req.params;
  const contactByDelete = await deleteContact(contactId);
  if (!contactByDelete) {
    throw createHttpError(404, 'Contact not found');
  }
  res.status(204).send();
};
export default {
  createNewContact,
  getAll,
  getById,
  PatchupdateContact,
  deleteContactContr,
};
