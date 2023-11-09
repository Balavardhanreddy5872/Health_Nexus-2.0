import { Router } from 'express';
import {registerController, logincontroller, verifyController} from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
// router object 
const router = Router()

// Routing 
// Register user 
router.post('/register',registerController);

router.post('/login',logincontroller);

router.get('/verify',requireSignIn, isAdmin, verifyController);

export default router;

