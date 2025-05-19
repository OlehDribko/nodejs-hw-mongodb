import express from 'express';
import contacts from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = express.Router();

router.post('/', ctrlWrapper(contacts.createNewContact));
router.get('/', ctrlWrapper(contacts.getAll));
router.get('/:contactId', ctrlWrapper(contacts.getById));
router.patch('/:contactId', ctrlWrapper(contacts.PatchupdateContact));
export default router;
