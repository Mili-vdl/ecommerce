const mongoose = require("mongoose");
const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl);

const db = mongoose.connection; //instanciamos nuestra bd, representa nuestra bd

db.on("error", console.error.bind(console, "Connection error: "));

db.once("open", () => {
  console.log("Connectes to MongoDb");
});

module.exports = mongoose;
