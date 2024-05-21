function SetUsername(username){
    // Complex DB Calls
    this.username = username
    console.log('called');
}

function createUser(username, email, password){
    SetUsername.call(this, username)      //Explicitly call

    this.email = email
    this.password = password
}

const userOne = new createUser('Suraj','suraj@gmail.com','123')
console.log(userOne);