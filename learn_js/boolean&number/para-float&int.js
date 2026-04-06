console.log(parseInt("10.10"));
console.log(parseFloat("10"));

//parse int -->reads a string and returns a whole number (integer)
//parae float --> reads a string and retutrns a decimal number (floating-point)

console.log(parseInt(null));
console.log(parseInt(true));
console.log(parseInt(false));
console.log(parseInt(NaN));
console.log(parseInt(undefined));
console.log(parseInt(0));
console.log(parseInt(1));
console.log(parseInt(""));

//parse float example
console.log(parseFloat("3.14"));       // 3.14
console.log(parseFloat("3.14 abc"));   // 3.14
console.log(parseFloat("3.14.5"));     // 3.14
console.log(parseFloat("abc 3.14"));   // NaN

//parse int example
console.log(parseInt("42"));       // 42
console.log(parseInt("42px"));     // 42
console.log(parseInt("3.14"));     // 3
console.log(parseInt("abc123"));   // NaN