const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./routes/main");

const app = express();

app.use(express.json()); //middleware para convertir json en objeto js

app.use(morgan("dev"));

app.use(mainRouter);

module.exports = app;
