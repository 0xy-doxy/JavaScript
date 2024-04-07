function setUsername(username){
    // complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){

    setUsername.call(this, username)
    this.email = email
    this.password = password

}

let user = new createUser("chai", "abc@gmail.com",123)
console.log(user);