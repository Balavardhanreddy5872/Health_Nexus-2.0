import express from "express"
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";
import { addProductController, getProductController, getSingleProductController, productPhotoController,updateProductController,deleteProductController } from "../controllers/ProductController.js";

const router = express.Router();

router.post('/add-medicine', requireSignIn, isAdmin, formidable(), addProductController);
router.get("/get-medicine", getProductController);
router.get("/get-medicine/:slug", getSingleProductController);
router.get("/medicine-photo/:pid", productPhotoController);
router.put(
    "/update-product/:pid",
    requireSignIn,
    isAdmin,
    formidable(),
    updateProductController
);
router.delete("/delete-product/:pid", deleteProductController);
export default router;