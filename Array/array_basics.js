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

// console.log(myArr.includes(9));  //Checks value present in array or not

// console.log(myArr.indexOf(3));      // returns the index value of element if present in the array

const newArr = myArr.join()     //Adds all the elements of an array into a string, separated by the specified separator string

// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)

// //Slice and Splice
//  //Slice dont includes the last index and do not manupulate the original array
//  //Splice includes the last index and manupulate the original array

// console.log("Original Array:  ",myArr);
const newA = myArr.slice(1,3)
// console.log(newA);
// console.log("Array after Slice :  ",myArr);
const newB = myArr.splice(1,3)
// console.log(newB);
// console.log("Array after Splice:  ",myArr);

const marvel_heros = ['Ironman','Hulk','Thor','Spiderman']
const dc_heros = ['Flash','Batman','superman']
marvel_heros.push(dc_heros)     // Push the array inside the array
// console.log(marvel_heros);
// console.log(marvel_heros[4][1]);

const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_hero = [...marvel_heros, ...dc_heros]
// console.log(all_hero);

const another_array = [1,2,3,[4,5,6],[7,8,[9,10]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray('Suraj'));    //Check Array or not

console.log(Array.from('Suraj'));       // Returns array

console.log(Array.from({name: 'Suraj'}));       // Returns empty object

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));



