let fruits = ["apple", "banana", "cherry"];

let first = fruits[0];
let second = fruits[1];

console.log(first);  // apple
console.log(second); // banana
//more code and repeated index

//using arrary destructing 
let fruit = ["apple", "banana", "cherry"];

let [firsts, ...rest] = fruits;

console.log(firsts);  // apple
//console.log(seconds); // banana
console.log(rest);