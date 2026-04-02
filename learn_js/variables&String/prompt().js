/* let name = prompt("Enter Your Name :","Harish");
console.log(name); */
//this only works on web browser
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter first number: ", (num1) => {
  rl.question("Enter second number: ", (num2) => {
    let sum = Number(num1) + Number(num2);
    console.log("Sum is:", sum);
    rl.close();
  });
});