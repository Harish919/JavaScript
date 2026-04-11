
let fruits = ["apple", "mango", "banana", "Grapes"];
let [red,oange,yellow, ...rest] = fruits //... -->rest operator
console.log(red);
console.log(oange);
console.log(yellow);
console.log(rest);


//swaping varibles 
let x = 17;
let y = 24;
[x, y] = [y, x];

console.log(x,y);

