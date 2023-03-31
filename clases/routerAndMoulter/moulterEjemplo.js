//npm i multer
import multer from "multer";
import express from "express";

//crea la carpeta si no esta creada
const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./public");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const app = express();

//middleware de express para interceptar las peticiones y ver si coincide ruta con la ruta de algun archivo
// si coincide devuelve ese archivo. pasamos en que carpeta busca esos archivos
// Por ejemplo si buscas localhost:8080/charizard.jpg entonces muestrae se archivo de la carpeta public
app.use(express.static("./public"));

//Leer la peticion, extraer el archivo y guardarlo en la carpeta uploads
// se le pone archivo de nombre al archivo xd
app.post("/archivos", upload.single("archivo"), (req, res, next) => {
  res.json(req.file);
});
