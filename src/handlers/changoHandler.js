const {
  getCartController, // Obtener todo el carrito
  getCartItemByIdController, // Obtener un ítem específico del carrito
  addItemToCartController, // Agregar un producto al carrito
  updateCartItemController, // Actualizar un producto en el carrito
  deleteCartItemController, // Eliminar un producto del carrito
} = require("../controllers/changoController");

const getCartHandler = (req, res) => {
  const response = getCartController();
  console.log("estoy en el cart handler");
  res.send(response); // Enviar todo el carrito
};

const getOneCartItemHandler = (req, res) => {
  const { id } = req.params;
  const response = getCartItemByIdController(id);
  res.send(response); // Obtener un ítem específico del carrito por su ID
};

const addItemToCartHandler = (req, res) => {
  try {
    const { id, cantidad } = req.body; // Obtenemos el id del producto y la cantidad desde el body
    if (!id || !cantidad) {
      throw new Error("Faltan datos: id o cantidad");
    }

    // Llamamos al controlador para agregar el ítem al carrito
    const cart = addItemToCartController(id, cantidad);

    res.status(201).send(cart); // Devolvemos el carrito actualizado
  } catch (error) {
    res.status(418).send({ Error: error.message });
  }
};

const updateCartItemHandler = (req, res) => {
  const { id } = req.params;
  const { cantidad } = req.body; // Actualizar cantidad, por ejemplo
  if (!cantidad) {
    return res.status(400).send({ Error: "Falta la cantidad" });
  }
  const response = updateCartItemController(id, cantidad);
  res.send(response); // Actualizar un ítem en el carrito
};

const deleteCartItemHandler = (req, res) => {
  const { id } = req.params;
  const response = deleteCartItemController(id);
  res.send(response); // Eliminar un ítem del carrito
};

module.exports = {
  getCartHandler,
  getOneCartItemHandler,
  addItemToCartHandler,
  updateCartItemHandler,
  deleteCartItemHandler,
};
