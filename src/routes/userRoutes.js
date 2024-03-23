import express from "express";
import userController from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", userController.getHomepage);

export default userRouter;
