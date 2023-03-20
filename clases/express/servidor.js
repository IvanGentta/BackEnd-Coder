import express from "express";

const app = express();

//send comun html (send envia text o html)
// app.get("/usuarios/:nroUsuario/propiedades", (req, res) => {
//   console.log(req.params);
//   console.log(req.query);
//   res.send(`
//   <h1>Holaaaa UwU</h1>
//   ${JSON.stringify(req.params)}
//   ${JSON.stringify(req.query)}
//   `);
// });

//send JSON
// req params = :nroUsuario (los dos puntos hacen referencia a eso, pero en la url va el numero directamente(123 por ej) se llama parametro de ruta)
//Query params empiezan al terminar la url con un "?" seguido del query=algo y se agregan mas separandolos con "&"
app.get("/usuarios/:nroUsuario/propiedades", (req, res) => {
  //Para la terminal
  //   console.log(req.params);
  //   console.log(req.query);
  if (isNaN(Number(req.params.nroUsuario))) {
    //400 = datos enviados erroneos
    return res
      .status(400)
      .json({ message: "Formato incorrecto de numero de usuario" });
  }

  //res,status(200) es por defecto significa que salio todo bien
  //res.json devuelve un onjeto transformado en json
  res.json({ urlParams: req.params, queryParams: req.query });
});

// muestra un archivo, primero se pasa el nombre y en root la carpeta donde esta
app.get("/cosas", (req, res) => {
  res.sendFile("plantilla.html", { root: "./clases/plantillas/views" });
});

const server = app.listen(8080);
