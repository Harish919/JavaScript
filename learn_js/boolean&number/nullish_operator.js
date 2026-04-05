const varible = null ?? 'haha'
console.log(varible);

let  varible2;
console.log(varible2 ?? varible);
console.log(varible2 ?? "lol");
console.log("lol2" ?? varible2);

console.log('hi' ?? undefined);
console.log(undefined ?? 'hello');