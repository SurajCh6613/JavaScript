function myName(){
    console.log('S');
    console.log('u');
    console.log('r');
    console.log('a');
    console.log('j');
}

// myName();
// Fuction without return
// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }

// addTwoNumbers(3,4)          //7
// addTwoNumbers(3,'4')        //34
// addTwoNumbers(3,'a')        //3a
// addTwoNumbers(3,null)       //3

// const result = addTwoNumbers(3,4)       //print 7 by function body
// console.log("Result: ",result);         //print undefined due to no return from function body

// Fuction with return
function addTwoNumbers(num1,num2){
    // let result = num1 + num2
    // return result
    return num1+num2
}

// const result = addTwoNumbers(3,4)       //return 7 by function body to result variable
// console.log("Result: ",result);         //print 7

function loginUserMessage(username = 'suraj'){
    if(username === undefined){         //or if(!undefined){    }
        console.log("Please enter user name:");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());        //suraj just logged in
// console.log(loginUserMessage("Vikrant"));        //Vikrant just logged in by override

// Rest operator for multiple values pass //Returns array 
function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(20));
// console.log(calculateCartPrice(20,40,60));

const user = {
    username:"Suraj",
    id:103
}
const user2 = {
    username:"Suraj",
    ids:103
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and id is ${anyObject.id}`);
}

// handleObject(user) // Print:--> Username is Suraj and id is 103
// handleObject(user2) // Print:--> Username is Suraj and id is undefined due to "ids"

// Passing Direct object in function
handleObject({
    username:"Ram",
    id:111
})

const newArray = [200,100,400,455]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(newArray));       // Print 400

//Passing Direct Array in function
// console.log(returnSecondValue([200,300,400,500,600,100]));      //Print 400