import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { userRegisterController } from '../controllers/authController.js';

const router = Router();

router.use('/auth/register', ctrlWrapper(userRegisterController));

export default router;
