
let y = true && false;
console.log(y);

let z = false && true;
console.log(z);

let x = 0 && 100; // 0 -> false
console.log(x);

let xy = 1 && 101; // 1 ->true
console.log(xy);
/*
 false && 'hello'   // false ❌ (stops early)

true && 0          // 0 ❌ (0 is falsy)

true && 100        // 100 ✅

'hi' && 'hello'    // 'hello' ✅ */

//if
if (2 < 3 && 4 < 5){
    console.log("This if block of code run");
}else {
    console.log("This else block of code run");
}

//else
if (2 > 3 && 4 > 5){
    console.log("This if block of code run");
}else {
    console.log("This else block of code run");
}