const mongoose = require("mongoose");
require("dotenv").config();

const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  categoria: { type: String, required: true },
  marca: { type: String, required: true },
  precio: { type: Number, required: true, min: 0 },
  stock: { type: Number, required: true, min: 0 },
  descripcion: { type: String, required: true },
  imagen: [{ type: String }],
  fechaIngreso: { type: Date, default: Date.now },
});

productSchema.methods.setImgUrl = function setImgUrl(filename) {
  //this.imagen = `${process.env.APP_HOST}:${process.env.PORT}/public/${filename}`;
};

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
