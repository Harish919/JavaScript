/* replace(),replaceAll() */
let name = "my  name is blahblahblah";
let txt = name.replace("blahblahblah","Harish R");
console.log(txt);

let msg = "i love linux to explore,java,bootstrap,python"
console.log(msg.replace("java","javascript"));

let msgs = "i love linux to explore,java,bootstrap,python"
console.log(msgs.replaceAll("linux to explore,java,bootstrap,python","Video Games"));
console.log(msgs.replaceAll("love","hate"));