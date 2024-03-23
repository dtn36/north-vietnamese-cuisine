import bodyParser from "body-parser";
import "dotenv/config";
import express from "express";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";

let application = express();

application.use(bodyParser.json());
application.use(bodyParser.urlencoded({ extended: true }));

viewEngine(application);
initWebRoutes(application);

let port = process.env.PORT || 2728;

application.listen(port, () => {
  console.log("Server started at port: " + port);
  console.log("Application available at http://localhost:" + port);
});
