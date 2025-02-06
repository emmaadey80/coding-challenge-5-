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

