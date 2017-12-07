import express from "express";
import winston from "winston";
import config from "config";
import { index } from "controllers";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(config.port, () => winston.info(`Listening port ${config.port}`));

app.get("/api", index);
