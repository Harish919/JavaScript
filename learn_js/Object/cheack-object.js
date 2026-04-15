let footballers = {
    Name : "Cr7",
    age : 41,
    club : "Al-Nasar",
    Nation : "Portugal",
    Goals : 968
}
//1.hasOwnProperty() method
console.log(footballers.hasOwnProperty("Name"));
console.log(footballers.hasOwnProperty("Tropies"));

//2.in method
console.log("age" in footballers); //inheritance property
console.log("name" in footballers);//case sensititive

//3.object.has own() method
console.log(Object.hasOwn(footballers,"Goals"));
console.log(Object.hasOwn(footballers,"Nation"));