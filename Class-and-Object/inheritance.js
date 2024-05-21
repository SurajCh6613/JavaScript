class User{
    constructor(username){
        this.username = username
    }
    printMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const userOne = new Teacher('Suraj', 'suraj@gmail.com', '1234')
// userOne.addCourse()
// userOne.printMe()

// const secondUser = new User('Amit')
// // secondUser.addCourse()
// secondUser.printMe()

// console.log(userOne === secondUser);
// console.log(userOne === Teacher);
// console.log(userOne instanceof Teacher);