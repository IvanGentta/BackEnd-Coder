import express from "express";
import ProductManager from "./desafio2.js";

const productManager = new ProductManager("./desafios/static/mercado.json");

const app = express();

app.get("/desafios/static/mercado", async (req, res) => {
  try {
    const products = await productManager.getProducts();
    const limitValue = +req.query.limit;

    if (!limitValue) {
      res.json(products);
    } else {
      const productLimit = [];
      for (let i = 0; i < limitValue && i < 5; i++) {
        productLimit.push(products[i]);
      }
      res.json(productLimit);
    }
  } catch (error) {
    console.log(error);
  }
});

app.get("/desafios/static/mercado/:pid", async (req, res) => {
  try {
    const { pid } = req.params;
    const productById = await productManager.getProductByID(+pid);
    productById
      ? res.json(productById)
      : res.json({ message: "Error 404: Not found" });
  } catch (error) {
    console.log(error);
  }
});

const server = app.listen(8080);
