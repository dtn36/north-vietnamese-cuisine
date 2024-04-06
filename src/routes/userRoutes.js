import express from "express";
import userController from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", userController.getHomepage);
userRouter.get("/login", userController.getLoginpage);

export default userRouter;
