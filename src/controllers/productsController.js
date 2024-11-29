const Product = require("../models/Products");

const createProductController = async (
  nombre,
  categoria,
  marca,
  precio,
  stock,
  descripcion,
  filename
  //fechaIngreso : es automatico
) => {
  const newProduct = new Product({
    nombre,
    categoria,
    marca,
    precio,
    stock,
    descripcion,
  });
  newProduct.setImgUrl(filename);
  //console.log(newProduct);
  await newProduct.validate();
  newProduct.save();
  return newProduct;
};

const getAllProductsController = async () => {
  return await Product.find();
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
