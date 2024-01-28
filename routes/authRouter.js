import { validateRegisterInput } from '../middleware/validationMiddleware.js';

import { Router } from 'express';
import { register, login } from '../controllers/authControllers.js';
const router = Router();

router.post('/register', validateRegisterInput, register);
router.post('/login', login);

export default router;
