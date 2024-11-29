const express = require("express");
//const multer = require("multer");
const morgan = require("morgan");
const mainRouter = require("./routes/main");
const cors = require("cors");

const app = express();

app.use(express.json()); //middleware para convertir json en objeto js

app.use(express.urlencoded({ extended: true })); // middleware para analizar los datos de form

app.use(cors());
//const upload = multer();

app.use(morgan("dev"));

app.use("/public", express.static(`${__dirname}/storage/imgs`));

app.use(mainRouter);

module.exports = app;
