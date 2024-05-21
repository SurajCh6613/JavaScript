// let myName = 'Suraj          '
// let anotherName = 'Ram         '

// console.log(myName.trueLength);

let myHeros = ['Thor', 'Spiderman']

let heroPower = {
    thor : "hammer",
    spiderman: "sling",

    getspiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.suraj = function(){
    console.log(`Suraj is present in all Objects`);
}

Array.prototype.heySuraj  = function(){
    console.log(`Suraj says Hello`);
}
// heroPower.suraj()
// myHeros.suraj()
// myHeros.heySuraj()
// heroPower.heySuraj()    // give error

// inheritance
const User ={
    name : 'Suraj',
    email: 'suraj@gmail.com'
}
const Teacher = {
    makeVideo: true
}

const TeachingSuppoprt = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS Assignment',
    fullTime : true,
    __proto__:TeachingSuppoprt
}

Teacher.__proto__ = User

// MOdern Syntax
Object.setPrototypeOf(TeachingSuppoprt,Teacher)

let anotherUserName = 'Amit     '

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is :${this.trim().length}`);
}

anotherUserName.trueLength()
"Suraj".trueLength()
"HeySuraj".trueLength()