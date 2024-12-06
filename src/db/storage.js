const fs = require("fs");
const path = require("path");
const multer = require("multer");

// Verificar y crear la carpeta si no existe
const storageDir = path.join(__dirname, "..", "storage", "imgs");
if (!fs.existsSync(storageDir)) {
  fs.mkdirSync(storageDir, { recursive: true });
}
// Configuración de Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, storageDir); // Carpeta donde se guardarán las imágenes
  },
  filename: function (req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}.png`); // Renombrar archivo para evitar duplicados
  },
});

const upload = multer({ storage });

module.exports = upload;
