const credits = 23580;
const pricePerDroid = 3000;
const quantityInput = prompt("How many televisions would you like to buy?");

let message;

if (quantityInput === null) {
  message = "Operation canceled!";
} else {
  const quantity = Number(quantityInput);

  if (isNaN(quantity)) {
    message = "Invalid input! Please enter a valid number.";
  } else {
    const totalPrice = quantity * pricePerDroid;

    if (totalPrice > credits) {
      message = "Insufficient funds!";
    } else {
      const remainingCredits = credits - totalPrice;
      message = `You bought ${quantity} televisions, you have ${remainingCredits} credits left.`;
    }
  }
}
alert(message);
