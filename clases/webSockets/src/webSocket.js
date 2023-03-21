//Para comunicacion de usuarios a traves de cliente servidor a tiempo real
// // npm i socket.io libreria de sockets
import express from "express";
import { engine } from "express-handlebars";
import { Server as SocketIOServer, Socket } from "socket.io";
import { FileMAnager } from "./FileManager.js";

const mensajesManager = new FileMAnager("./localStorage/mensajes.json");

const app = express();

app.engine("handlebars", engine());
app.set("views", "./views");
app.set("view engine", "handlebars");

app.use(express.static("./public"));

//medio de transporte de datos cliente servidor unidireccional
const httpServer = app.listen(8080);

//agarra el medio de comunicacion ( el servidor) y lo convierte en webSockets permitiendolo transportar info bidireccional
const io = new SocketIOServer(httpServer);

// on = metodo para recibir cosas | emit = metodo para enviar cosas
// cargar eventListener 'tipoDeEvento'| mandar mensaje al socket del lado del cliente => index.js
io.on("connection", async (clientSocket) => {
  console.log(`nuevo cliente conectado, id #${clientSocket.id}`);
  //elejis el nombre del evento y podes enviar lo que se pueda serializar o que se pueda transformar en string
  clientSocket.emit("mensajito", { hola: "mundo" });

  //controller de nuevos mensajes
  clientSocket.on("nuevoMensaje", async (mensaje) => {
    console.log(`${clientSocket.id} dice:`);
    console.log(mensaje);
    await mensajesManager.guardarCosa({
      fecha: new Date().toLocaleString(),
      ...mensaje,
    });
    io.sockets.emit("actualizarMensajes", await mensajesManager.buscarCosas());
  });
  io.sockets.emit("actualizarMensajes", await mensajesManager.buscarCosas());
});

app.get("/", async (req, res) => {
  const mensajes = await mensajesManager.buscarCosas();
  res.render("mensajes", {
    hayMensajes: mensajes.length > 0,
    mensajes,
  });
});
