import { Router } from "express";

//Une en un solo objeto todas las rutas web
export const webRouter = Router();

webRouter.use((req, res, next) => {
  console.log("Cargando webrouter y siguiendo el camino de middlewares");
  next();
});

// se aplican las rutas al objeto router (en este caso el webRouter)
webRouter.get("/personas", (req, res) => {
  res.send("<h1>Personas</h1>");
});
webRouter.get("/ventas", (req, res) => {
  res.send("<h1>Ventas</h1>");
});
