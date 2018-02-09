import express from "express";
import winston from "winston";
import bodyParser from "body-parser";
import { setRoutes } from "routes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;
app.listen(port, () => winston.info(`Listening port ${port}`));

setRoutes(app);
