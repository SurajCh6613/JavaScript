const User = {
    _email: 'suraj@google.com',
    _password: 'abc',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const amit = Object.create(User)
console.log(amit.email);