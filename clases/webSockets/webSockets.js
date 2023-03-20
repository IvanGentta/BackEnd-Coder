//Para comunicacion de usuarios a traves de cliente servidor a tiempo real
// npm i socket.io libreria de sockets
import express from "express";
import { Server as SocketIOServer, Socket } from "socket.io";

const app = express();
app.use(express.static("./public"));

//medio de transporte de datos cliente servidor unidireccional
const httpServer = app.listen(8080);

//agarra el medio de comunicacion ( el servidor) y lo convierte en webSockets permitiendolo transportar info bidireccional
const io = new SocketIOServer(httpServer);

// cargar eventListener 'tipoDeEvento'| mandar mensaje al socket del lado del cliente => index.js
io.on("connection", (clientSocket) => {
  console.log(`nuevo cliente conectado, id #${clientSocket.id}`);
  clientSocket.emit("mensajito", { hola: "mundo" });
});
