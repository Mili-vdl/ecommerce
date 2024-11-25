const productSchema = require("../models/Products");
const {
  getProductsByNameController,
  getAllProductsController,
  createProductController,
  getProductByIdController,
  //getProductsByMarcaController,
} = require("../controllers/productsController");

const getAllProductsHandler = (req, res) => {
  const { nombre } = req.query;
  if (nombre) {
    res.send(getProductsByNameController(nombre));
  } else {
    const response = getAllProductsController();
    res.send(response);
  }
};

const getOneProductHandler = (req, res) => {
  const { id } = req.params;
  const response = getProductByIdController(id);
  res.send(response);
};

const createProductHandler = async (req, res) => {
  try {
    //const { error } = productSchema.validate(req.body);
    //if (error) res.status(418).send(error.details[0].message);
    const { nombre, categoria, marca, inalambrico, precio, stock } = req.body;
    const response = await createProductController(
      nombre,
      categoria,
      marca,
      inalambrico,
      precio,
      stock
    );
    res.status(201).send(response);
  } catch (error) {
    res.status(418).send({ Error: error.message });
  }
};

const updateProductHandler = (req, res) => {
  res.send("Actualizo producto");
};

const deleteProductHandler = (req, res) => {
  res.send("Eliminando producto");
};

module.exports = {
  getAllProductsHandler,
  getOneProductHandler,
  createProductHandler,
  updateProductHandler,
  deleteProductHandler,
};
