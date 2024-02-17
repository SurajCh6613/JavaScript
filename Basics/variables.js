const userId = 6613;
let userName = "Suraj Chaudhary";
let userEmail = "suraj@gmail.com";
var userPassword = "Suraj@1234";
userCity = "Lucknow";
let userState;

console.log("Before any Changes");
console.log(userId);
console.table([userId, userName, userEmail, userCity, userPassword, userState]);// Print Values in Table form

//Trying to change values of variables

// userId = 223    // Can't change a constant value
userEmail = "newEmail@gmail.com";
userPassword = "newPassword@1234";
userCity = "Basti";
userName = "Suraj Patel"
userState = "Uttar Pradesh";

console.log("After Changes");
console.log(userId);
console.table([userId, userName, userEmail, userCity, userPassword, userState]);// Print Values in Table form
