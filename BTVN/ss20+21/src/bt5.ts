function validateProduct<
  T extends {
    new (...args: any[]): {
      name: any;
      price: any;
      description: any;
      inStock: any;
    };
  }
>(constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      const instance = this;
      if (!instance.name || instance.name.trim() === "") {
        throw new Error("Product name cannot be empty.");
      }
      if (instance.price <= 0) {
        throw new Error("Product price must be a positive number.");
      }
      if (!instance.description || instance.description.trim() === "") {
        throw new Error("Product description cannot be empty.");
      }
      if (instance.inStock < 0) {
        throw new Error("Product inStock must be a non-negative number.");
      }
    }
  };
}

@validateProduct
class Product {
  name: string;
  price: number;
  description: string;
  inStock: number;

  constructor(
    name: string,
    price: number,
    description: string,
    inStock: number
  ) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.inStock = inStock;
  }
}

class ProductGeneric<TName, TPrice, TDescription, TInStock> {
  name: TName;
  price: TPrice;
  description: TDescription;
  inStock: TInStock;

  constructor(
    name: TName,
    price: TPrice,
    description: TDescription,
    inStock: TInStock
  ) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.inStock = inStock;
  }
}

// Example usage:
try {
  const product1 = new Product("Laptop", 1000, "High-performance laptop", 10);
  console.log(product1);

  // This will throw an error because the price is not positive. Nó sẽ hiện thị lỗi bởi vì giá trị nó không tồn tại. 
  const product2 = new Product(
    "Smartphone",
    -500,
    "Latest model smartphone",
    20
  );
} catch (error) {
  console.error(error);
}

// Using ProductGeneric with different data types. Sử dụng ProductGeneric với các data types khác nhau. 
const productGeneric1 = new ProductGeneric<string, number, string, number>(
  "Tablet",
  300,
  "Portable tablet",
  15
);
console.log(productGeneric1);