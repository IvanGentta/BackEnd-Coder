// Archivo de texto pequeño dentro del navegador donde se puede almacenar info para hacer mas simple y rapidas las peticiones
// se suelen guardar nombres de usuario, id de sesiones y preferencias de navegacion
// las cookies tienen clave valor
// Las cookies se ven en f12 en la parte de aplicacion, desde ahi tambien se pueden borrar
// El cliente siempre manda cookies y el servidor solo si lo configuras
//

// npm i express cookie-parser (Es un modulo aparte de express)

import cookieParser from "cookie-parser";
import express from "express";

const app = express();

//A agrega metodos extra a la peticion
app.use(cookieParser());

app.use((req, res, next) => {
  console.dir(req); // normal
  console.dir(req.cookies); // cookies
  console.dir(req.signedCookies); //cookies firmadas
  next();
});

app.get("/", (req, res, next) => {
  res.cookie("miPrimeraCookie", 1234); // cargar una cookie a la respuesto, al servidor
  res.send("ok");
});

//borrar cookies desde el servidor
app.get("/borrar/:cookie", (req, res, next) => {
  res.clearCookie(req.params.cookie);
  res.send("ok");
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log("servidor on");
});
