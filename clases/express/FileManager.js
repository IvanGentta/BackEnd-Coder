import fs from "fs/promises";

export class FileMAnager {
  //el # lo convierte en privado y el usuario no puede acceder a ello
  #cosas;
  #ruta;

  constructor(ruta) {
    this.#ruta = ruta;
    this.#cosas = [];
  }

  async #leer() {
    const json = await fs.readFile(this.#ruta, "utf-8");
    this.#cosas = JSON.parse(json);
  }

  async #escribir() {
    const nuevoJson = JSON.stringify(this.#cosas, null, 2);
    await fs.writeFile(this.#ruta, nuevoJson);
  }

  async guardarCosa(cosa) {
    await this.#leer();
    this.#cosas.push(cosa);
    await this.#escribir();
    return cosa;
  }

  async reeemplazarCosa(id, nuevaCosa) {
    await this.#leer();
    const inidiceBuscado = this.#cosas.findIndex((c) => c.id === id);
    if (inidiceBuscado === -1) {
      throw new Error("id no encontrado");
    }
    this.#cosas[inidiceBuscado] = nuevaCosa;
    await this.#escribir();
    return nuevaCosa;
  }

  async buscarCosas() {
    await this.#leer();
    return this.#cosas;
  }

  async buscarCosaSegunId(id) {
    await this.#leer();
    const cosaBuscada = this.#cosas.find((c) => c.id === id);
    if (!cosaBuscada) {
      throw new Error("id no encontrado");
    }
    return cosaBuscada;
  }

  async borrarCosaSegunId(id) {
    await this.#leer();
    const inidiceBuscado = this.#cosas.findIndex((c) => c.id === id);
    if (inidiceBuscado === -1) {
      throw new Error("id no encontrado");
    }
    const [borrado] = this.#cosas.splice(inidiceBuscado, 1);
    await this.#escribir();
    return borrado;
  }

  async reset() {
    this.#cosas = [];
    await this.#escribir();
  }
}
