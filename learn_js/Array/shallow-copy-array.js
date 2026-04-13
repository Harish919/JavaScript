/* A shallow copy means creating a new array that copies the elements of the original array without changing the original array.

The new array has a different memory location, but
 nested objects or arrays still share references. */

 //1.using sperate operator
 let arr1 = [1,2,3];
 let arr2 = [...arr1];

 arr2.push(4)
 console.log(arr1);
 console.log("...",arr2);

 //2.using slice
 let arr3 = [1, 2, 3];

let arr4 = arr3.slice();
console.log("slice:",arr4);

//3.using Array.form()
let arr5 = [1, 2, 3];

let arr6 = Array.from(arr5);
console.log("array-from:",arr6);


//using concate()
let arr7 = [1, 2, 3];

let arr8 = arr7.concat([4,5,6,7,8,9])
console.log("array-concate:",arr8);

