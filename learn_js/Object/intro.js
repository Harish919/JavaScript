let student_data = {
    name : "Harish",
    age : 21,
    course : "CSE"  
};
console.log(student_data);
//delete object properties
delete student_data.age;
delete student_data["age"]
//check
console.log("age" in student_data);
//Dot Notation
console.log(student_data.name);
console.log(student_data.age);
console.log(student_data.course);
//Bracket Notation
console.log(student_data["name"]);
console.log(student_data["age"]);
console.log(student_data["course"]);
