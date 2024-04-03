//    // Singleton    
//    Object.create

//      //Object Literals

// Symbol
const mySym = Symbol('key1')

const user = {
    name: "Suraj",
    age: 20,
    "full name":"Suraj Chaudhary",
    email: "surajchaudhary@gmail.com",
    location: "Lucknow",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"],
    [mySym]: "myKey1"
}

// Way to Access object in javaScript
console.log(user.email);        //Good but not compulsary
console.log(user["email"]);     //Best and always prefer because you can object properties like 'full name' which is not possible to access through [user.full name]
console.log(user['full name']);

// // To access symbol in an Object you have to use syntax :- [Symbol_Variable_name] : "Symbol property" during object creation

console.log(typeof user[mySym]);

//     // To Change values in an Object
user.email = "suraj@google.com"

//      // To freeze an object which means no changes can be done after freezing an object
// Object.freeze(use/r)
// user.email = "suraj@facebook.com"
console.log(user);

user.greeting = function() {
    console.log("Hello JS user");
}
user.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(user.greeting());
console.log(user.greetingTwo());