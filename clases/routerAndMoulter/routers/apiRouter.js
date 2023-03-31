import express, { Router } from "express";
import { personasRouter } from "./personasRouter.js";
import { routerVentas } from "./routerVentas.js";

export const apiRouter = Router();

// otro middleware,
apiRouter.use((req, res, next) => {
  console.log("Siguen los next de los middlewares");
  next();
});

// Middlewares = Función que se le puede cargar a cualquier parte de la app
// permite a toda la app leer y usar la info que viene dentro de la petición, ya sea json o formulario
// pal json
apiRouter.use(express.json());
// pa los formularios codificados dentro de la ruta y el extended para objetos dentro de la ruta
apiRouter.use(express.urlencoded({ extended: true }));

apiRouter.use("/personas", personasRouter);
apiRouter.use("/ventas", routerVentas);
