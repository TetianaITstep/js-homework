const total = 100;
let ordered = 50;

if (ordered > total) {
  console.log("Insufficient quantity of goods in stock!");
} else {
  console.log("The order has been processed.");
}

ordered = 120;
if (ordered > total) {
  console.log("Insufficient quantity of goods in stock!");
} else {
  console.log("The order has been processed.");
}
