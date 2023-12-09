import { Router } from 'express';
import { registerController, logincontroller, verifyController, updateProfileController, getOrdersController,getAllOrdersController,orderStatusController } from '../controllers/authController.js';
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

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);


export default router;

