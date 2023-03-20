import express from "express";
import fs from "fs/promises";

const app = express();

const server = app.listen(8080);

app.get("/", async (req, res, next) => {
  const plantilla = await fs.readFile(
    "./plantillas/views/plantilla.html",
    "utf-8"
  );
  const porPartes = plantilla.split("{{");
  const principio = porPartes[0] + "Inicio" + porPartes.slice(1).join("");
  res.send(porPartes);
});
