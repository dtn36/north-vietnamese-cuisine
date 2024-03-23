import express from "express";
import adminController from "../controllers/adminController";

const adminRouter = express.Router();

adminRouter.get("/", adminController.getHomepage);

export default adminRouter;
