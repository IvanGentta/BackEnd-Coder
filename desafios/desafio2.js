import fs from "fs/promises";

export default class ProductManager {
  constructor(ruta) {
    this.products;
    this.ruta = ruta;
  }

  async getProducts() {
    const json = await fs.readFile(this.ruta, "utf-8");
    this.products = JSON.parse(json);
    return this.products;
  }

  // async getProducts() {
  //   await this.loadMarket();
  //   console.log(this.mercado);
  // }

  async saveMarket() {
    const json = JSON.stringify(this.products, null, 2);
    await fs.writeFile(this.ruta, json);
  }

  async addProduct(title, description, price, thumbnail, code, stock) {
    const productToFind = this.products.find(
      (element) => element.code === code
    );
    if (productToFind) {
      return console.error("[ERROR] This Product has alredy been added");
    } else {
      const product = {
        title: title,
        description: description,
        price,
        thumbnail: thumbnail,
        code: code,
        stock: stock,
      };
      if (this.products.length === 0) {
        product.id = 1;
      } else {
        product.id = this.products[this.products.length - 1].id + 1;
      }
      this.products.push(product);
    }
    await this.saveMarket();
  }

  getProductByID(id) {
    const productToFind = this.products.find((product) => product.id === id);
    if (!productToFind) {
      return "[ERROR] The searched product doesn't exists";
    } else {
      return productToFind;
    }
  }

  async updateProduct(title, description, price, thumbnail, code, stock, id) {
    await this.getProducts();

    const productFindIndex = this.products.findIndex(
      (product) => product.code === code
    );

    if (productFindIndex === -1) {
      console.log("Product not found");
    } else {
      const productoModificado = {
        title: title,
        description: description,
        price: price,
        thumbnail: thumbnail,
        stock: stock,
        code: code,
        id: id,
      };

      this.products[productFindIndex] = productoModificado;
      await this.saveMarket();
    }
  }

  async deleteProduct(id) {
    await this.getProductByID(id);
    this.products.splice(1, id);
    await this.saveMarket();
  }
}

// ** PRUEBAS **
const mercado = new ProductManager("./desafios/static/mercado.json");
console.log(await mercado.getProducts());

await mercado.addProduct(
  "Milk",
  "It's milk from a cow",
  20,
  "Milk photo",
  "abc123",
  100
);
await mercado.addProduct(
  "Milk",
  "It's milk from a cow",
  20,
  "Milk photo",
  "abc124",
  100
);
await mercado.addProduct(
  "Milk",
  "It's milk from a cow",
  20,
  "Milk photo",
  "abc128",
  100
);

await mercado.addProduct(
  "Wine",
  "It's red Wine",
  30,
  "Wine photo",
  "abc456",
  100
);
console.log(await mercado.getProducts());

await mercado.addProduct(
  "Milk",
  "It's milk from a cow",
  20,
  "Milk photo",
  "abc123",
  100
);

console.log(await mercado.getProducts());
console.log(mercado.getProductByID(2));
console.log(mercado.getProductByID(4));

await mercado.updateProduct(
  "Milk",
  "It's milk from a cow",
  20000,
  "Milk photo",
  "abc123",
  100,
  1
);

console.log(await mercado.getProducts());

await mercado.deleteProduct(2);
