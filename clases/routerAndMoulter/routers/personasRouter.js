import { Router } from "express";

//crear carpeta de ruta para esto
export const personasRouter = Router();
// Se puede cargar una funcion middleware antes del controlador
personasRouter.get(
  "/",
  (req, res, next) => {
    console.log("Antes de terminar la peticion");
    next();
  },
  (req, res) => {
    res.json("Termino el recorrido de los middlewares");
    console.log("Encontro la respuesta");
  }
);
personasRouter.post("/", (req, res) => {
  res.json([]);
});
personasRouter.put("/", (req, res) => {
  res.json([]);
});
personasRouter.delete("/", (req, res) => {
  res.json([]);
});
