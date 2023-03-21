import { Router } from "express";
import { FileMAnager } from "../../../clases/webSockets/src/FileManager.js";

const pm = new FileMAnager("./desafios/static/mercado.json");

const RENDER_PATH = {
  STATIC: "home.handlebars",
  DINAMIC: "realTimeProducts.handlebars",
};

export const viewsRouter = Router();

viewsRouter
  .get("/", async (req, res, next) => {
    try {
      const productList = await pm.buscarCosas();

      res.render(RENDER_PATH.STATIC, {
        headerTitle: "Home | Products",
        mainTitle: "List of products",
        list: [...productList],
        listExist: productList.length > 0,
      });
    } catch (error) {
      return next(error.message);
    }
  })
  .get("/realtimeproducts", async (req, res, next) => {
    try {
      const productList = await pm.buscarCosas();

      res.render(RENDER_PATH.DINAMIC, {
        headerTitle: "Home | Products",
        mainTitle: "List of products in Real Time",
        list: [...productList],
        showList: productList.length > 0,
      });
    } catch (error) {
      return next(error.message);
    }
  });
