import { Router } from "express";
import { LabstatusController, getlabReportController, labformController, labstatusController } from "../controllers/labController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";


const router = Router()

router.post('/report', requireSignIn, labformController);
router.get('/formstatus', requireSignIn, labstatusController);
router.get('/all-lab', requireSignIn, isAdmin, getlabReportController);
router.put(
  "/lab-status/:orderId",
  requireSignIn,
  isAdmin,
  LabstatusController
);


export default router;