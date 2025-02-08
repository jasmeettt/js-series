class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username is ${this.username}`)
    }
    static createId(){ // this property helps in block this code from any of its instances or any other function
        return `${this.username}_123`
    }
    
}
const jasmeet = new user ("jasmeet")
// console.log(jasmeet.createId())

class Teacher extends user {
    constructor(username,email,password){
        super(username); 
        this.email = email
        this.password  = password
    }
}
const peo = new Teacher("people","people@Hm.com","123");
peo.logMe()
// console.log(peo.createId()) 


class Calculator {
    static add (a,b){
        return a+b;
    }
}
