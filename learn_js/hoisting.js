//Hoisting
//--this invisble decleartion process is called hoisting
// var a; this in invisible
function codeHoist(){
    a = 10;
    let b = 7;
}
codeHoist()
console.log(a);// "a" value is a global scope because it 
                   //can be decleared outside the fuction by default

console.log(b);//"b" can decleare inside the fuction and its Function sccope

