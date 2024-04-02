import express from "express";
import adminController from "../controllers/adminController";

const adminRouter = express.Router();

adminRouter.get("/", adminController.getHomePage);
adminRouter.get("/categories", adminController.getCategoriesManagementPage);
adminRouter.get("/dishes", adminController.getDishesManagementPage);
adminRouter.get("/users", adminController.getUsersManagementPage);

export default adminRouter;
