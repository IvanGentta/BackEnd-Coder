class ProductManager {
  products;

  constructor() {
    this.products = [];
  }

  getProducts() {
    return this.products;
  }

  getProductByID(id) {
    const productToFind = this.products.find((product) => product.id === id);
    if (!productToFind) {
      return "[ERROR] The searched product doesn't exists";
    } else {
      return productToFind;
    }
  }

  addProduct(product) {
    if (this.products.find((element) => element.code === product.code)) {
      return console.error("[ERROR] This Product has alredy been added");
    } else {
      if (this.products.length === 0) {
        product.id = 1;
      } else {
        product.id = this.products[this.products.length - 1].id + 1;
      }
    }
    this.products.push(product);
  }
}

class Product {
  constructor(title, description, price, thumbnail, code, stock) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }
}

// ---- PRUEBAS ----
console.log("** Creacion de la instancia y log del arreglo vacio **");
const superMarket = new ProductManager();
console.log(superMarket.getProducts());

console.log("** Se añade producto con id generado sin repetirse **");
superMarket.addProduct(
  new Product("Milk", "It's milk from a cow", "20", "Milk photo", "abc123", 100)
);
superMarket.addProduct(
  new Product("Wine", "It's red Wine", 30, "Wine photo", "abc456", 100)
);
console.log(superMarket.getProducts());
console.log("** Error por intentar subir producto con mismos datos **");
superMarket.addProduct(
  new Product("Milk", "It's milk from a cow", 20, "Milk photo", "abc123", 100)
);

console.log("** Llamado por ID **");
console.log(superMarket.getProductByID(1));
console.log("** ID Inexistente **");
console.log(superMarket.getProductByID(5));
