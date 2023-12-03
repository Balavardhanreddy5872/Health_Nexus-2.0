import { Router } from 'express';
import { registerController, logincontroller, verifyController } from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
// router object 
const router = Router()

// Routing 
// Register user 
router.post('/register', registerController);

router.post('/login', logincontroller);

router.get('/verify', requireSignIn, isAdmin, verifyController);

// user route-path 
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// admin route-path
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});


export default router;

