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

console.log(loginUserMessage());        //suraj just logged in
console.log(loginUserMessage("Vikrant"));        //Vikrant just logged in by override