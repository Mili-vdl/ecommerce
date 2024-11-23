//const { products } = require("../db/dataBase");
const Product = require("../models/Products");

const createProductController = async (
  nombre,
  categoria,
  marca,
  inalambrico,
  precio,
  stock,
  fechaIngreso
) => {
  const newProduct = new Product({
    nombre,
    categoria,
    marca,
    inalambrico,
    precio,
    stock,
    fechaIngreso,
  });
  await newProduct.validate();
  newProduct.save();
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
