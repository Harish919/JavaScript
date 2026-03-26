//Q. write a object and convert the object into the string

const object = {
    
    a : 1,
    b : 2,
}

console.log("object :",object);

const string = JSON.stringify(object);
console.log("convert a object into string :",string);

const reverse = JSON.parse(string);
console.log("convert back to object :",reverse);