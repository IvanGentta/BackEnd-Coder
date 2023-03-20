//

//server del lado del cliente con el cual hacer el handshake
const serverSocket = io("http://localhost:8080/");

//el evento de cliente y servidor tienen que llamarse igual, en este caso 'mensajito'
serverSocket.on("mensajito", (datosAdjuntos) => {
  console.log(datosAdjuntos);
});
