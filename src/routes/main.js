const { Router } = require("express");
const userRouter = require("./userRoutes");
const productsRouter = require("./productsRoutes");
const cartRouter = require("./cartRoutes");
const mainRouter = Router();

//Users
mainRouter.use("/users", userRouter);

//Products
mainRouter.use("/products", productsRouter);

//Carts
mainRouter.use("/carts", cartRouter);

module.exports = mainRouter;
