const { Router } = require("express");
const userRouter = require("./userRoutes");
const productsRouter = require("./productsRoutes");
const mainRouter = Router();

//Users
mainRouter.use("/users", userRouter);

//Products
mainRouter.use("/products", productsRouter);

module.exports = mainRouter;
