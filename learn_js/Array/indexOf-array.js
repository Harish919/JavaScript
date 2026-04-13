/* The indexOf() method is used to find the position (index) of an element 
inside an array.

If the element exists → returns index number
If not found → returns -1 */
let fruits = ["apple", "banana", "mango", "orange"];

let index = fruits.indexOf("orange");

console.log(fruits.indexOf("orange"));
console.log(fruits.indexOf("orange",3));

if (fruits.indexOf("banana") !== -1) {
    console.log("Banana exists!");
  } else {
    console.log("Searching Fruit does not exists?");
  }

  let numbers = [10, 20, 30, 40];

  console.log(numbers.indexOf(20, 2));