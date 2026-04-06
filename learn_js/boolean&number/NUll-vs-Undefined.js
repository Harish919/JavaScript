/* null - intentioanlly Zero (0)
   undefined - variable decleared but no value Assigned*/

console.log("Null == Undefined -->",null == undefined); //true
console.log("Null === Undefined -->",null === undefined);//false

//Comparing with Other Values
console.log(null == 0);        // false
console.log(null == "");       // false
console.log(undefined == 0);   // false
console.log(undefined == "");  // false

//Numeric compersion
//null
console.log(null > 0);   // false
console.log(null < 0);  // false
console.log(null == 0); //false
console.log(null >= 0);  // true
//undefined
console.log(undefined > 0);   // false
console.log(undefined < 0);   // false
console.log(undefined >= 0);   // false
console.log(undefined == 0);  // false