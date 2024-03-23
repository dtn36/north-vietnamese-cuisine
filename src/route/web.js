import express from "express";

let router = express.Router();

let initWebRoutes = (application) => {
  router.get("/", (request, response) => {
    return response.send("hello world!");
  });

  return application.use("/", router);
};

module.exports = initWebRoutes;
