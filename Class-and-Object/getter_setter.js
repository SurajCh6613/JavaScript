class User{
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}suraj`
    }
    set password(value){
        this._password = value 
    }
}

const suraj = new User('suraj@gmail.com', 'abc')
console.log(suraj.email);
console.log(suraj.password);