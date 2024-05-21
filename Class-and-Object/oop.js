const user = {
    username : "Suraj",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        // console.log('Got user details');
        console.log(`Username : ${this.username}`);
        // console.log(this);
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this);

// // Constructor function
// const promiseOne = new Promise()
// const date = new Date()
function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User('Suraj',12, true)
const userTwo = new User('Amit',10, true)
console.log(userOne.constructor);
// console.log(userTwo.greeting());