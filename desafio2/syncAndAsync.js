// import fs from "fs";
import fs from "fs/promises";

// Manejo de archivos asincronicos con fs/promises
const ruta = "./desafio2/static/agenda.txt";
let agenda;

function cuentaCuento() {
  console.log("Había una vez truz jajajajjajajajajaj");
}

async function cargarAgenda() {
  const json = await fs.readFile(ruta, "utf-8");
  agenda = JSON.parse(json);
}

async function guardarAgenda() {
  const json = JSON.stringify(agenda, null, 2);
  await fs.writeFile(ruta, json);
}

function mostrarAgenda() {
  console.log(agenda);
}

function agregarContacto(contacto) {
  agenda.push(contacto);
}

async function borrarAgenda() {
  await fs.rm(ruta);
}

async function operarAgenda() {
  await cargarAgenda();
  mostrarAgenda();
  agregarContacto({ Zoe: "115468966" });
  mostrarAgenda();
  guardarAgenda();
}

operarAgenda();
cuentaCuento();

//Manejo de archivos sincronicos con fs
// const ruta = "./desafio2/static/agenda.txt";
// let agenda;

// function cargarAgenda() {
//   const json = fs.readFileSync(ruta, "utf-8");
//   agenda = JSON.parse(json);
// }

// function guardarAgenda() {
//   const json = JSON.stringify(agenda, null, 2);
//   fs.writeFileSync(ruta, json);
// }

// function mostrarAgenda() {
//   console.log(agenda);
// }

// function agregarContacto(contacto) {
//   agenda.push(contacto);
// }

// function borrarAgenda() {
//     fs.rm(ruta)
// }

// // console.log(fs.readFileSync(ruta, "utf-8"));
// // console.log(fs.readFileSync("desafio1.js", "utf-8"));
