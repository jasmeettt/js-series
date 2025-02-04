class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username is ${this.username}`)
    }
    
}

class Teacher extends user {
    constructor(username,email,password){
        super(username) // same as call function, super keyword refers to which classes has been extended and takes its values. 
        this.email = email
        this.password  = password
    }
}