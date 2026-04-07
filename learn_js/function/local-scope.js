//Variable declared inside a function
function local_scope() {
    let message = "I am Local variable,i can  used inside a functon only";
    console.log(message);
}
local_scope();
//console.log(message); -> why this log is error because it is a local scope 
//it can used inside a function only

//using arrow function
const Lscope = () => {
    const Localvar = "I am local scope variable";
    console.log(Localvar);
}
Lscope();