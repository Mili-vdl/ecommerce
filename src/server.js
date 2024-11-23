const express = require("express");
const multer = require("multer");
const morgan = require("morgan");
const mainRouter = require("./routes/main");

const app = express();

app.use(express.json()); //middleware para convertir json en objeto js

app.use(express.urlencoded({ extended: true })); // middleware para analizar los datos de form

const upload = multer();
app.use(upload.none()); // Para procesar solo campos de texto sin archivos.

app.use(morgan("dev"));

app.use(mainRouter);

module.exports = app;
