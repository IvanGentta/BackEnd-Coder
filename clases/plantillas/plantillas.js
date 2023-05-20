import express from "express";
import fs from "fs/promises";

const app = express();

const server = app.listen(8080);

//TODO ESTO FUE HECHO A MANO, PERO NO SIRVE PORQUE HANDLEBARS LO HACE FACILITO >:(
app.get("/", async (req, res, next) => {
  const plantilla = await fs.readFile(
    "./clases/plantillas/views/plantilla.html",
    "utf-8"
  );
  let resultado = plantilla.replace("{{title}}", "inicio");
  resultado = resultado.replace("{{body}}", "inicio");
  res.send(resultado);
});
app.get("/contacto", async (req, res, next) => {
  const plantilla = await fs.readFile(
    "./clases/plantillas/views/plantilla.html",
    "utf-8"
  );
  let resultado = plantilla.replace("{{title}}", "contacto");
  resultado = resultado.replace("{{body}}", "contacto");
  res.send(resultado);
});
app.get("/about", async (req, res, next) => {
  const plantilla = await fs.readFile(
    "./clases/plantillas/views/plantilla.html",
    "utf-8"
  );
  let resultado = plantilla.replace("{{title}}", "about");
  resultado = resultado.replace("{{body}}", "acerca de");

  const skills = ["codear", "comer", "hacer el amor"];
  resultado = resultado.replace(
    "{{lista}}",
    `<ul>` + skills.map((sk) => `<li>${sk}</li>`).join("") + `</ul>`
  );
  res.send(resultado);
});
