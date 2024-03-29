import express from "express";
import adminController from "../controllers/adminController";

const adminRouter = express.Router();

adminRouter.get("/", adminController.getHomepage);
adminRouter.get("/login", adminController.getLoginPage);

export default adminRouter;
