import express from "express";

const app = express();

//send comun html
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
app.get("/usuarios/:nroUsuario/propiedades", (req, res) => {
  //Para la terminal
  //   console.log(req.params);
  //   console.log(req.query);
  res.json({ urlParams: req.params, queryParams: req.query });
});

const server = app.listen(8080);
