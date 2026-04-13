//splice() method to add or remove elements from any position (middle) of an array.
let fruits = [1,2,3,4,5,6,7,8,9,10]
let res = fruits.splice(0,0,0);
console.log(res);
console.log(fruits);

//splice -->(start,delete-count,item)