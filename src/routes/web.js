import express from "express";
import adminRouter from "./adminRoutes";
import userRouter from "./userRoutes";

let router = express.Router();

let initWebRoutes = (application) => {
  router.use("/admin", adminRouter);
  router.use("/", userRouter);

  return application.use("/", router);
};

module.exports = initWebRoutes;
