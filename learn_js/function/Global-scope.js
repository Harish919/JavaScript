//Variable declared outside any function or block
const globalvar = "I am global variable!,i can be accessed any where in the code.";

const scope = () => {
    console.log(globalvar);
}
console.log("1",globalvar);
scope();
