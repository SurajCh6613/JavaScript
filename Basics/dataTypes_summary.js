// //There is two types of datatypes in JavaScript

// // 1. Premitive Datatypes

// // 7 Types : String, Number, null, undefined, Boolean, Symbol, BigInt

const userId = 331; //Number
let userName = "Suraj"; //String
let isLoggedIn = false; //Boolean
let city = null; //null
let state; //undefined
let bigNumber = 997849882793893029333n  //BigInt

let id = Symbol('123')
let anotherId = Symbol('123')

// console.log(id === anotherId); // return false


// //2.Non-premitive(Reference type)

// //I. Array
let course = ['B.Tech','MBA','BCA']

//  //II. Objects
let myObj = {
    name : "Suraj",
    age : 20
}

// //III. Functions
let printHello = function() {
    console.log("Hello Suraj");
}

// printHello();



/*++++++++++++++++++++++++++++++++ STACK and HEAP Concept ++++++++++++++++++ */

// STACK Alloacation for Premitive Data types
// In STACK Copy of data passes

let myName = "Suraj Chaudhary"

let anotherName = myName

// console.log(myName);
// console.log(anotherName);

anotherName = "Suraj"

// console.log(myName);
// console.log(anotherName);


// HEAP Alloacation for Non-Premitive Data types
// In HEAP reference of data Passes

let userOne ={
    email: "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "newUserEmail.com"

console.log(userOne.email)
console.log(userTwo.email)
