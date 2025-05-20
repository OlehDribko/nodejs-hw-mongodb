import { contactCollection } from '../db/models/contacts.js';

export const getAllContact = () => contactCollection.find();

export const getContactById = (contactId) =>
  contactCollection.findById(contactId);

export const createContact = async (payload) => {
  const contact = await contactCollection.create(payload);
  return contact;
};
export const updateContact = async (contactId, payload, options) => {
  const rawResult = await contactCollection.findOneAndUpdate(
    { _id: contactId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );
  if (!rawResult || !rawResult.value) return null;
  return {
    contact: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};
export const deleteContact = async (contactId) => {
  const contactForDelete = await contactCollection.findOneAndDelete({
    _id: contactId,
  });
  return contactForDelete;
};
