function setUserName(username){
    this.username = username
    console.log("called") // here the function is called
}

function createUser(username, email, password){
    setUserName.call(this,username) // but here it is not getting called because it is only giving the reference to the function even if we can see we have given the refernce here, so we use call function for that purpose
    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@jas", 123);
console.log(chai);
