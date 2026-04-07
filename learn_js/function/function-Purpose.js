/* Purpose --> A function is a reusable block of 
   code that performs a specific task. */

//1.Function Declaration (Create a function)
function greet() {
    console.log("Hello, Jessica!");
  }

//2.Function Call (Execute the function)
greet(); // Hello, Jessica!

//3.Parameters and Arguments
function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  greet("Alice"); // Hello, Alice!
  greet("Nick");  // Hello, Nick!

//4.Return Values
function test() {
    console.log("Hi");
  }
  
  let result = test();
  console.log(result); // undefined

//5.using return
function add(a, b) {
    return a + b;
  }
  
  console.log(add(3, 4)); // 7

//6.Anonymous Function
const sum = function (a, b) {
    return a + b;
  };
  
  console.log(sum(3, 4)); // 7