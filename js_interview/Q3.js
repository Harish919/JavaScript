// Q. whats is shallow copy ans explain ehais is'it

const obj1 = {
    name : "Harish",
    age : 12 , 
    hobbies : "football"
}

const obj2 ={ ...obj1 };

obj2.age = 20 ;

console.log(obj2);


/* console.log("object1:",obj1); 
console.log("object2:",obj2); */

