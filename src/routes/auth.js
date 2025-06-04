import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  userRegisterController,
  userLogInController,
  userLogOutController,
  refreshController,
} from '../controllers/authController.js';

import { validateBody } from '../middlewares/validateBody.js';
import { logInUserSchema, registerUserSchema } from '../validation/auth.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(userRegisterController),
);

router.post(
  '/logIn',
  validateBody(logInUserSchema),
  ctrlWrapper(userLogInController),
);

router.post('/refresh', ctrlWrapper(refreshController));

router.post('/logout', ctrlWrapper(userLogOutController));
export default router;
