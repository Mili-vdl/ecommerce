// Array del carrito (vacío inicialmente)
let cart = [];

const getCartController = () => {
  return cart;
};

const addItemToCartController = (id, cantidad) => {
  // Buscamos el producto en el array de productos
  const product = products.find((prod) => prod.id === Number(id));
  if (!product) {
    throw new Error("Producto no encontrado");
  }

  // Chequeamos si el producto ya está en el carrito
  const cartItem = cart.find((item) => item.id === Number(id));
  if (cartItem) {
    // Si ya está, solo actualizamos la cantidad
    cartItem.cantidad += cantidad;
  } else {
    // Si no está, lo agregamos al carrito
    cart.push({ ...product, cantidad });
  }

  return cart; // Devolvemos el carrito actualizado
};

module.exports = { addItemToCartController, getCartController };
