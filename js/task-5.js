let total = 0;

while (true) {
  let input = prompt("Please enter a number:");

  if (input === null) {
    break;
  }

  input = Number(input);

  if (isNaN(input)) {
    alert("You entered a non-numeric value, please try again.");
  } else {
    total += input;
  }
}
alert(`The total sum of the numbers is ${total}`);
