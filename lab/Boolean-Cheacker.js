//Build a Boolean Check Function
/* In this lab, you will build a function that checks if a
 value is classified as a boolean primitive.

Boolean primitives are true and false.

Objective: Fulfill the user stories below and 
get all the tests to pass to complete the lab. */

function booWho(value) {
    return typeof(value) === "boolean";
}
console.log("true:",booWho(true));
console.log("false:",booWho(false));
console.log("string:",booWho("Hello"));
console.log("number:",booWho(24));
console.log("null:",booWho(null));
console.log("array:",booWho([1,2,3]));
console.log("undefined:",booWho());


