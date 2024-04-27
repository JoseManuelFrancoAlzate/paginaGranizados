const multer = require('multer');

// Configura Multer para almacenar los archivos en una carpeta local
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'imagenesMulter/') // Cambiar la carpeta de destino a 'imagenes/'
    },
    filename: function (req, file, cb) {
      const date = new Date().toISOString().replace(/:/g, '-'); // Generar una cadena de fecha con formato
      cb(null, date + '-' + file.originalname); // Utilizar la cadena de fecha como prefijo del nombre del archivo
    }
  })
  

// Crea una instancia de Multer con la configuración definida
const upload = multer({ storage: storage })

module.exports = upload;
