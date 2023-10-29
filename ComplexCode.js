// Filename: ComplexCode.js
// Description: Complex JavaScript code that demonstrates an online shopping cart.

// Class representing a product in the shopping cart
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  display() {
    console.log(`Product: ${this.name} - Price: $${this.price}`);
  }
}

// Class representing the shopping cart
class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    const index = this.products.findIndex((p) => p.name === product.name);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (const product of this.products) {
      totalPrice += product.price;
    }
    return totalPrice;
  }
}

// Create some products
const product1 = new Product("iPhone", 999);
const product2 = new Product("Laptop", 1499);
const product3 = new Product("Headphones", 199);

// Create a shopping cart and add products to it
const shoppingCart = new ShoppingCart();
shoppingCart.addProduct(product1);
shoppingCart.addProduct(product2);
shoppingCart.addProduct(product3);

// Display the products in the shopping cart
console.log("Products in the shopping cart:");
for (const product of shoppingCart.products) {
  product.display();
}

// Display the total price
console.log(`Total Price: $${shoppingCart.getTotalPrice()}`);

// Remove a product from the shopping cart
shoppingCart.removeProduct(product2);

// Display the updated products in the shopping cart
console.log("Updated products in the shopping cart:");
for (const product of shoppingCart.products) {
  product.display();
}

// Display the updated total price
console.log(`Updated Total Price: $${shoppingCart.getTotalPrice()}`);

// Output:
// Products in the shopping cart:
// Product: iPhone - Price: $999
// Product: Laptop - Price: $1499
// Product: Headphones - Price: $199
// Total Price: $2697
// Updated products in the shopping cart:
// Product: iPhone - Price: $999
// Product: Headphones - Price: $199
// Updated Total Price: $1198

// ...
// ... (additional lines of code)
// ...

// Note: This is a simplified example to demonstrate a complex code structure. The actual complexity and sophistication can be much higher depending on the specific requirements and functionalities.