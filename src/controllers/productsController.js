const { products } = require("../db/dataBase");

const createProductController = (nombre, marca, precio, color, stock) => {
  const id = products.length + 1;
  const newProduct = { id, nombre, marca, precio, color, stock };
  products.push(newProduct);
  return newProduct;
};

const getAllProductsController = () => {
  return products;
};

const getProductsByNameController = (nombre) => {
  const productsByName = products.filter((product) =>
    product.nombre.toLowerCase().includes(nombre.toLowerCase())
  );
  return productsByName;
};

// const getProductsByMarcaController = (marca) => {
//   const productsByMarca = products.filter((product) =>
//     product.marca.toLowerCase().includes(marca.toLowerCase())
//   );
//   return productsByMarca;
// };

const getProductByIdController = (id) => {
  const productById = products.find((product) => product.id === Number(id));
  return productById;
};

module.exports = {
  createProductController,
  getAllProductsController,
  getProductsByNameController,
  getProductByIdController,
  //getProductsByMarcaController,
};
