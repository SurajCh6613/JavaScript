class User{
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const suraj = new User('Suraj')
// console.log(suraj.createId());       // Not accessible

class Teacher extends User{
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const phone = new Teacher('redmi','redmi@mi.com')
phone.logMe()
// console.log(phone.createId());  // Not accessible