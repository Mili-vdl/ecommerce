const getAllProductsHandler = (req, res) => {
  const { name } = req.query;
  console.log(name);
  res.send("Estos son los productos");
};

const getOneProductHandler = (req, res) => {
  res.send("Este es el detalle de un producto");
};

const createProductHandler = (req, res) => {
  res.send("Creando producto");
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
