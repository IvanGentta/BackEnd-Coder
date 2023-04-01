//npm i mongoose
import mongoose, { Schema } from "mongoose";

//string de coneccion para conectar a base de dato
const connection = await mongoose.connect("mongodb://localhost/coderhouse");

// Obtengo la array de usuarios de la base de datos
// const usuariosDb = mongoose.connection.db.collection("usuarios");

//mongoose permite hacer validaciones con esquemas (Pueden hacerse validaciones custom(ver documentacion))
const usuariosSchema = new Schema(
  {
    nombre: { type: String, required: true },
    apellido: { type: String },
    edad: { type: Number, required: true, min: 0 },
    //enum te deja elejir entre esos valores, min y max dan minimos y maximos duh
    rol: { type: String, enum: ["gil", "capo"] },
    //Mongoose agrega un __v de version, version key en false evita que pase
  },
  { versionKey: false }
);

// con model le decis a que coleccion conectarse y que schema usar
const usuariosDb = mongoose.model("usuarios", usuariosSchema);

await usuariosDb.create({
  nombre: "Fhodkas",
  edad: 26,
});

await usuariosDb.create({
  nombre: "Alejandro",
  apellido: "Rozenberg",
  edad: 26,
});

//convierte a objeto comun el lean()
const usuarioACambiar = await usuariosDb.findOne(); //.lean();

// Modificacion mediante mongoose- mongoose usa objeto de tipo documento y asi se puede usar metodos como el save
if (usuarioACambiar) {
  usuarioACambiar.nombre = "Iván";
  //   await usuariosDb.updateOne({ _id: usuarioACambiar._id }, usuarioACambiar) -- La manera de hacerlo si se pasa objeto y no document
  await usuarioACambiar.save();
}

const usuarios = await usuariosDb.find();
console.log(usuarios);
