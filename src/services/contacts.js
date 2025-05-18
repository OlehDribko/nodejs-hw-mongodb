import { contactCollection } from '../db/models/contacts.js';

export const getAllContact = () => contactCollection.find();

export const getContactById = (contactId) =>
  contactCollection.findById(contactId);
