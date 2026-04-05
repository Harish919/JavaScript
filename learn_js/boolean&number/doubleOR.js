let x = 'name' || 'name2'
console.log(x);

let y = false || 'hari';
console.log(y);

let z = null || "true";
console.log(z);

let a = '' || "string";
console.log(a);

/* 
false || 'hello'   // 'hello' ✅ (first truthy)

true || 0          // true ✅ (stops early)

0 || 100           // 100 ✅ (0 is falsy)

'' || 'default'    // 'default' ✅ (empty string is falsy)

null || 'JS'       // 'JS' ✅

'hi' || 'hello'    // 'hi' ✅ (first truthy) */

let input;

if (input || 'output') {
    console.log("if statement pass");
} else {
    console.log("else statement pass");
}