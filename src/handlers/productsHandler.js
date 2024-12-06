const productSchema = require("../models/Products");
const {
  getProductsByNameController,
  getAllProductsController,
  createProductController,
  getProductByIdController,
  //getProductsByMarcaController,
} = require("../controllers/productsController");

const getAllProductsHandler = async (req, res) => {
  const { nombre } = req.query;
  if (nombre) {
    res.send(getProductsByNameController(nombre));
  } else {
    const response = await getAllProductsController();
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
    const { nombre, categoria, marca, precio, stock, descripcion } = req.body;
    if (!req.files) {
      return res.status(400).send({ Error: "No se ha subido ningún archivo." });
    }
    const files = req.files;
    let imagenesUrls = [];
    if (files) {
      imagenesUrls = files.map((file) => {
        const filename = file.filename; // Obtenemos el filename de cada archivo
        return `${process.env.APP_HOST}:${process.env.PORT}/public/${filename}`;
      });
    }

    const response = await createProductController(
      nombre,
      categoria,
      marca,
      precio,
      stock,
      descripcion,
      imagenesUrls
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
