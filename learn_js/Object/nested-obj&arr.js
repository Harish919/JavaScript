const person = {
    name : "harish",
    Age : 21,
    contact : {
        email : "h4rish.dev@gmail.com",
        phone : {
            home : 1234567,
            work : 7654321,
        },
    },
    address : [
        {type : "home",street : "123 main street",city : "Madrid" },
        {type : "work",street : "456 south street",city : "velicia" },
    ]
};
//1.dot notation .
console.log(person.contact.phone.home); //1234567

//2.bracket notation
console.log(person["contact"]["phone"]["work"]);//7654321

//3.Accessing Arrays Inside Objects
console.log(person.address[0].city);
console.log(person.address[1].city);

//another example
const company = {
    employees : [
        {name : "Hari", role : "Developer"},
        {name : "sara", role : "designer"}
    ]
};
console.log(company.employees[0].name);
console.log(company.employees[1].name);

console.log(
    company.employees[0].role,
    company.employees[1].role
);