//difference btw primitive and non-prinitive data types
//primitive 
let num1 = 5;
let num2 = num1
num1 = 10;
console.log(num2);
console.log(num1);

//non-primitive
const op = { name: "harish", age : 16}
const copy_op = op;
op.age = 21;

console.log(copy_op);
console.log(op);

