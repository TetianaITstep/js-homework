const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const userInput = prompt("Enter your password:");

if (userInput === null) {
  message = "Operation canceled!";
} else if (userInput === ADMIN_PASSWORD) {
  message = "Welcome!";
} else {
  message = "Access denied, wrong password!";
}

alert(message);
