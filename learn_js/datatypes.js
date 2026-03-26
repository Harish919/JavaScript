// Number
let length = 16;
let weight = 7.5;
console.log(typeof(length));
console.log(typeof(weight));

// BigInt
let a = 1234567890123456789012345n;
let b = BigInt(1234567890123456789012345);
console.log(typeof(a));
console.log(typeof(b));
// Strings
let color = "Yellow";
let lastName = "Johnson";
console.log(typeof(color));
console.log(typeof(lastName));

// Boolean
let c = true;
let d = false;
console.log(typeof(c));
console.log(typeof(d));

// Undefined
let e;
let f;
console.log(typeof(e));
console.log(typeof(f));

// Null
let g = null;
let h = null;
console.log(typeof(g));
console.log(typeof(h));

// Symbol
const x = Symbol();
const y = Symbol();
console.log(typeof(x));
console.log(typeof(y));

// Object
const person = {firstName:"John", lastName:"Doe"};
console.log(typeof(person));

// Array Object
const cars = ["Saab", "Volvo", "BMW"];
console.log(typeof(cars));

// Date Object
const date =( new Date("2022-03-25"));
console.log(typeof(date));