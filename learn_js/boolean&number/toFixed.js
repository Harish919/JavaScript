let Number = Math.random()
console.log(Number.toFixed(2));

//The fixed() method is always retuens the string
const random = (2015.76181).toFixed(2);
console.log(typeof(random));//string 

/* Adds two numbers → 80.236
Rounds to 2 decimals → "80.24"
Returns → string */

let num1 = 12.345;
let num2 = 67.891;
console.log((num1 + num2).toFixed(2));

let num = 12.675;
let nump = 67.867;
console.log((num + nump).toFixed(2));


let numm = 5.678;
console.log(numm.toFixed(1));


console.log(isNaN());
console.log(isNaN(undefined));
console.log(isNaN(7));
console.log(isNaN("hello"));