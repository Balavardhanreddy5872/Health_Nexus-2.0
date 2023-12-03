import express from "express"
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";
import { addProductController, getProductController, getSingleProductController, productPhotoController,updateProductController,deleteProductController,searchProductcontroller} from "../controllers/ProductController.js";

const router = express.Router();

// Add medicine only admin
router.post('/add-medicine', requireSignIn, isAdmin, formidable(), addProductController);

// get-medicine all medines 
router.get("/get-medicine", getProductController);

// get only one medicine 
router.get("/get-medicine/:slug", getSingleProductController);


router.get("/medicine-photo/:pid", productPhotoController);

// update medicine only admin 
router.put(
    "/update-product/:pid",
    requireSignIn,
    isAdmin,
    formidable(),
    updateProductController
);

// delete only admin 
router.delete("/delete-product/:pid", deleteProductController);

// search a product 
router.get("/search/:keyword",searchProductcontroller)
export default router;