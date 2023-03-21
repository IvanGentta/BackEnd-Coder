// //server del lado del cliente con el cual hacer el handshake
const serverSocket = io("http://localhost:8080/");

const plantillaMensajes = `
{{#if hayMensajes}}
  <ul>

    {{#each mensajes}}
      <li>({{this.fecha}}){{this.autor}}: {{this.mensaje}}</li>
    {{/each}}
  </ul>

{{else}}
  <p>no hay mensajes...</p>
{{/if}}
`;

//el evento de cliente y servidor tienen que llamarse igual, en este caso 'mensajito' y recibe el menosaje que se envia desde el cliente
serverSocket.on("actualizarMensajes", (mensajes) => {
  const divMensajes = document.querySelector("#mensajes");
  if (divMensajes) {
    divMensajes.innerHTML = JSON.stringify(mensajes);
  }
});

const btnPush = document.querySelector("#btn");

if (btnPush) {
  btnPush.addEventListener("click", (evento) => {
    const inputAutor = document.querySelector("#inputAutor");
    const inputMensaje = document.querySelector("#inputMensaje");

    if (inputAutor && inputMensaje) {
      const autor = inputAutor.value;
      const mensaje = inputMensaje.value;

      serverSocket.emit("nuevoMensaje", { autor, mensaje });
    }
  });
}
