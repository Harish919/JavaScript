//equality and strict-equality
const value = true;//boolean

if (value == 1) {
    console.log("equality operator pass");
} else {
    console.log("equality error");
}

if (value === 1) {
    console.log("strict Equality pass");
} else {
    console.log("strict Equality error");
}

console.log(typeof(true));//boolean
console.log(typeof(1));//number

console.log("hari" == "hari");
console.log("10" == 10);

console.log("loose not equal :",0 != 10);
console.log("strict not equal :",1 !== 10);