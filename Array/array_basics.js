// Initialization

const myArr = [0,1,2,3,4,5]

const fruits = ['Mango','Apple','Orange']
const myArr2 = new Array(0,2,3,4,5,6,66)

// console.log(myArr2[1]);

// //Array methods in js

myArr.push(6)       // Insert element at the end of the array
// myArr.push(7)

myArr.pop()     //Remove element from the end of the array
// console.log(myArr);

myArr.unshift(9)  //Insert Value at begining of the array
// console.log(myArr);

myArr.shift()       //Delete Value from begining of the array
// console.log(myArr)

console.log(myArr.includes(9));  //Checks value present in array or not

console.log(myArr.indexOf(3));      // returns the index value of element if present in the array

const newArr = myArr.join()     //Adds all the elements of an array into a string, separated by the specified separator string

// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)

// //Slice and Splice
//  //Slice dont includes the last index and do not manupulate the original array
//  //Splice includes the last index and manupulate the original array

console.log("Original Array:  ",myArr);
const newA = myArr.slice(1,3)
console.log(newA);
console.log("Array after Slice :  ",myArr);
const newB = myArr.splice(1,3)
console.log(newB);
console.log("Array after Splice:  ",myArr);


