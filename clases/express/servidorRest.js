import express from "express";
import { FileMAnager } from "./FileManager.js";
import { randomUUID } from "crypto";
import { Persona } from "./Persona.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const personasManager = new FileMAnager("./clases/database/cosas.json");

app.get("/personas", async (req, res) => {
  const personas = await personasManager.buscarCosas();
  res.json(personas);
});

app.get("/personas/:pid", async (req, res) => {
  try {
    const persona = await personasManager.buscarCosaSegunId(req.params.pid);
    res.json(persona);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

app.post("/personas", async (req, res) => {
  const persona = new Persona({
    id: randomUUID(),
    ...req.body,
  });

  const personaAgregada = await personasManager.guardarCosa(persona);
  res.json(personaAgregada);
});

app.put("/personas", async (req, res) => {
  let personaNueva;
  try {
    personaNueva = new Persona({
      id: req.params.pid,
      ...req.body,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

  try {
    const personaReemplazada = await personasManager.reeemplazarCosa(
      req.params.pid,
      personaNueva
    );
    res.json(personaReemplazada);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

app.delete("/personas/:pid", async (req, res) => {
  try {
    const borrada = await personasManager.borrarCosaSegunId(req.params.pid);
    res.sendStatus(204);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

const server = app.listen(8080);

// fetch("http://localhost:8080/personas", {
//   method: "POST",
//   headers: {
//     "Content-Type": "Application/json",
//   },
//   body: JSON.stringify({ nombre: "ivi", rol: "Un capo" }),
// });
