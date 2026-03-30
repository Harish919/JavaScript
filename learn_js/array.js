//Array = a container that stores multiple values in one variable

//syntax 
let fruits = ["apple", "banana", "mango"];

//accessing values

console.log(fruits[0]); // apple
console.log(fruits[1]); // banana

//changing values
fruits[1] = "orange";

console.log(fruits);//apple,orange,mango

//adding elements
fruits.push("grape"); //add last in array
console.log(fruits);// apple,orange,mango,grape

//removing elements
fruits.pop(); // remove last element
fruits.splice(0,1)//remove speccific element 0->index, 1->how many elements
fruits.shift()//remove the first element
console.log(fruits);

//to find array lenght
console.log(fruits.length);

