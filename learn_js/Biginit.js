/* What is BigInt?
In JavaScript, BigInt is used to store very very large numbers. */

//problem example
let num = 9007199254740099776991 + 1;
console.log(num); // wrong result

//correct problem
let a = BigInt(9007199254740991);
let b = BigInt(2); 

console.log(a + b); // correct result 