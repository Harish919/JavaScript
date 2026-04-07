//arrow fun syntax

const add = (a, b) => {
    return a + b;
}

console.log(add(10, 7));

//shortest version

const adds = (a, b) => a + b;
console.log(adds(11,1));

//no prameters

const greet = () => console.log("Hello World!");
greet()

//example

const greeting = (name) => {
    console.log(`Hello ${name}!`);
}
greeting("Harish");

const area = (width , height) => {
    const find_area = width * height;
    return find_area
  }
  console.log("Area:",area(10,10));
  
  const addd = (a, b) => { return a+b };//If you use {} you MUST write return
  console.log(addd(10,1));
  
  const greets = () => "Hello"
  console.log(greets());
  
  //
  let multiply = (a, b = 1) => a * b;
  console.log(multiply(5)); //b =1 default value
  console.log(multiply(5, 2)); // b = 2 overides value