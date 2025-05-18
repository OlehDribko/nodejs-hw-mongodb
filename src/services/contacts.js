import { contactCollection } from '../db/models/contacts.js';

export const getAllContact = async () => {
  return await contactCollection.find();
};
export const getContactById = (contactId) => {
  contactCollection.findById(contactId);
};
