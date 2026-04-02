//reverse a string
let string = "lol";
console.log(string.split("").reverse().join(""));

/* explain 
  step1: split("") -->convert string into array
           "harish"
              ⬇
["h", "a", "r", "i", "s", "h"] 

 step2: reverse()
 
["h", "a", "r", "i", "s", "h"].reverse()

👉 Reverses the array

["h", "s", "i", "r", "a", "h"]

step3: join("") converts array into string 

["h", "s", "i", "r", "a", "h"].join("")

final : overall  workflow
"harish"
   ↓ split("")
["h","a","r","i","s","h"]
   ↓ reverse()
["h","s","i","r","a","h"]
   ↓ join("")
"hsirah"*/