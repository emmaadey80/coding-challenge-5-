// Inital Commit - Objects, Arrays, and Functions Challenge Setup


// Task 1- Object Properties
console.log("Task 1- Object Properties");

let customer = {  // Declaring a customer object with properties
name: "John Doe", 
age: 35, 
email: "john.doe@email.com"
};

// Logging each property (Name, Age, Email)
console.log(`Name: ${customer.name}`);
console.log(`Age: ${customer.age}`);
console.log(`Email: ${customer.email}`);

//Task 2- Object Methods
console.log("\nTask 2- Object Methods");

const order = { // Decalring object "order" with properties 
    orderID: 12345,
    totalAmount: 150,
    status: "Processing",

    // Display the order details (orderID, totalAmount, status)
    displayOrder: function() {
      console.log(`Order ID: ${this.orderID}`);
      console.log(`Total Amount: $${this.totalAmount}`);
      console.log(`Status: ${this.status}`);
    }
  };
  
  // Call the displayOrder method
  order.displayOrder();

//Task 3- Array Manipulation (push, pop, shift, unshift)
console.log("\nTask 3- Array Manipulation");

let cartItems = ["Eggs", "Milk", "Bread"]; // Declaring array "cartItems" with products

cartItems.push("Coffee"); // Adding coffee to array

cartItems.pop(); // Removing last product in array (Coffee)

cartItems.unshift("Apples"); // Adding Apple to beginning of array

cartItems.shift(); // Removing first product in array (Apple)

console.log(cartItems); // Logging final array (Eggs, Milk, Bread)

// Task 4- Map Method
console.log("\nTask 4- Map Method");

const prices = [100, 200, 300]; // Declaring array "prices"

const discountedPrices = prices.map(price => price * 0.9); // Using .map to apply 10% discount

console.log(discountedPrices); // Logging DiscountedPrices

// Task 5- Filter Method
console.log("\nTask 5- Filter Method");

const inventory = [5, 0, 12, 8, 0]; // Declaring array "inventory"

const inStock = inventory.filter( quantity => quantity > 0); // Using .filter() to remove products with zero stock

console.log(inStock); // Logging filtered array

// Task 6- Reduce Method
console.log("\nTask 6- Reduce Method");

const sales = [500, 300, 200, 400]; // Declaring array "sales"

const totalRevenue = sales.reduce((total, currentSale) => total + currentSale, 0); // using .reduce() to calculate total revenue

console.log("Total Revenue: $", totalRevenue); // Logging total revenue 

// Task 7- Find() Method
console.log("\nTask 7- Find () Method");

const customers = ["Alice", "Bob", "Charlie", "David"]; // Declaring array "customers"

const result = customers.find(customer => customer === "Charlie"); // Using .find() to locate customer charlie

console.log("Results:", result); //Logging results 

// Task 8- Function Declaration
console.log("\nTask 8- Function Declaration");

function calculateTax(amount, taxRate) { // Function calculateTax
    return amount * taxRate;
}
let tax = calculateTax(200, 0.15);  // Amount= 200, taxRate= 0.15

console.log(`Calculated tax: $${tax}`); //Logging the calculated tax results

// Task 9- Function Expression
console.log("\nTask 9- Function Expression");

const applyDiscount = function(price, discountPercent) { // Function expression to calculate discount
    return price - (price * discountPercent / 100);
};
let discountedPrice = applyDiscount(150, 30); // Calculate discounted price

console.log(`Discounted Price: $${discountedPrice}`); // Logging Discounted Price

// Task 10- Arrow Function
console.log("\nTask 10- Arrow Function");

const calculatePoints = purchaseAmount => purchaseAmount / 10; // Arrow function calculatePoints(purchaseAmount)

let points = calculatePoints(1150); // Calculate 1 point for every $10 spent 

console.log(`Earned points: ${points}`); // Logging earned points 
