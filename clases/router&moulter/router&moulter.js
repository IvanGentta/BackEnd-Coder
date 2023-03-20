import express from "express";
import { webRouter } from "./routes/webRouter";
import { apiRouter } from "./routes/apiRouter";

const app = express();

//Une en un solo objeto todas las rutas web
const webRouter = router();

app.use(webRouter);

const apiRouter = router();

//crear carpeta de ruta para esto
app.get("/api/personas", (req, res) => {
  res.json();
});
app.post("/api/personas", (req, res) => {
  res.json();
});
app.put("/api/personas", (req, res) => {
  res.json();
});
app.delete("/api/personas", (req, res) => {
  res.json();
});

app.get("/ventas", (req, res) => {
  res.json();
});
app.post("/ventas", (req, res) => {
  res.json();
});
app.put("/ventas", (req, res) => {
  res.json();
});
app.delete("/ventas", (req, res) => {
  res.json();
});

app.use("/api", apiRouter);

const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Escuchando en ${PORT}`);
});
