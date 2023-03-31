import express from "express";
import { webRouter } from "./routers/webRouter.js";
import { apiRouter } from "./routers/apiRouter.js";

const app = express();

// Middleware = funcion con 3 parametros, req es la peticion, res la respuesta a la peticion
//Y next es un callback que indica que esta todo bien y que se prosigue, sin el se queda procesando
// los middlewares funcionan como procesos que se ponen en cola
app.use((req, res, next) => {
  console.log("Empieza la peticion");
  next();
});

// middleware manejo de errores del manager
app.use((error, req, res, next) => {
  switch (error.message) {
    case "id no encontrado":
      res.status(404);
      break;
    case "Falta un argumento":
      res.status(400);
      break;
    default:
      res.status(500);
  }
  res.json({ message: error.message });
});

// Despues del next continua hasta el otro middleware, se ejcutan en el orden que los declaro
//en este caso pasa por webRouter y despues api router hasta que alguien la conteste, en este caso
//El final y el que conttesta es personasRouter.
// Los middleware pueden terminar en next y pasar al siguiente o un res.algo y dejar de pasar al siguiente

// todo esto se exporta desde otro archivo de routers

// se carga el webRouter a la app
// app.use carga un middleware
app.use(webRouter);

// se carga el apiRouter a la app, y todo se carga con el prefijo /api, entonces no hay que usarlo en el apiRouter.js
app.use("/api", apiRouter);

const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Escuchando en ${PORT}`);
});
