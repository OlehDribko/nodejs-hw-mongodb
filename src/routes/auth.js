import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  userRegisterController,
  userLogInController,
  userLogOutController,
  refreshController,
} from '../controllers/authController.js';

import { validateBody } from '../middlewares/validateBody.js';
import { logInUserSchema } from '../validation/contacts.js';

const router = Router();

router.post('/auth/register', ctrlWrapper(userRegisterController));

router.post(
  '/auth/logIn',
  validateBody(logInUserSchema),
  ctrlWrapper(userLogInController),
);

router.post('/auth/refresh', ctrlWrapper(refreshController));

router.post('/auth/logou', ctrlWrapper(userLogOutController));
export default router;
