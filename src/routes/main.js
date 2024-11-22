const { Router } = require("express");
const userRouter = require("./userRoutes");
const productsRouter = require("./productsRoutes");
const cartRouter = require("./cartRoutes");
const authRoutes = require("./authRoutes");
const mainRouter = Router();

//Auth
mainRouter.use("/auth", authRoutes);

//Users
mainRouter.use("/users", userRouter);

//Products
mainRouter.use("/products", productsRouter);

//Carts
mainRouter.use("/carts", cartRouter);

module.exports = mainRouter;
