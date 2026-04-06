console.log("10:",isNaN("10"));
console.log("0/0:",isNaN(0 / 0));
console.log("true:",isNaN(true));
console.log("false:",isNaN(false));
console.log("NaN:",isNaN(NaN));
console.log("0:",isNaN(0));
console.log("1:",isNaN(1));
console.log("empty string:",isNaN(""));
console.log("string:",isNaN("string"));
console.log("undefined:",isNaN(undefined));
console.log("null:",isNaN(null));


//example of isNaN
let input = "123";

if (isNaN(input)) {
  console.log("Invalid number");
} else {
  console.log("Valid number");
}
