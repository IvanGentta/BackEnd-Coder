import express from "express";
import { engine } from "express-handlebars";
import { Server as SocketIOServer, Socket } from "socket.io";
import { FileMAnager } from "../../clases/webSockets/src/FileManager.js";
import { viewsRouter } from "./routes/viewRouter.js";

const productosManager = new FileMAnager("./desafios/static/mercado.json");

const app = express();

app.engine("handlebars", engine());
app.set("views", "./views");
app.set("view engine", "handlebars");

app.use("/", viewsRouter);

const httpServer = app.listen(8080);

const io = new SocketIOServer(httpServer);

io.on("connection", async (clientSocket) => {
  console.log(clientSocket.id);
  let products = await productosManager.buscarCosas();

  io.emit("updateList", {
    list: products,
  });
});
