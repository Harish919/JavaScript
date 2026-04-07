//Variable declared inside {} using let or const
if (true) {
  let letVar = "let inside block";
  console.log(letVar); //works
}
//console.log(letblockVar);
if (true) {
  const constvar = "const inside block";
  console.log(constvar);
}

console.log(constvar);  error
