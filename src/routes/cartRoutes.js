const { Router } = require("express");
const { getCartHandler } = require("../handlers/changoHandler");

const cartRouter = Router();

// Rutas para el carrito
cartRouter.get("/", getCartHandler); // Obtener todos los items del carrito
// cartRouter.get("/:id", getOneCartItemHandler); // Obtener un item específico del carrito por ID
// cartRouter.post("/", addItemToCartHandler); // Agregar un item al carrito
// cartRouter.put("/:id", updateCartItemHandler); // Actualizar un item en el carrito por ID
// cartRouter.delete("/:id", removeItemFromCartHandler); // Eliminar un item del carrito por ID

module.exports = cartRouter;
