class user {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email (){
        return this._email.toUpperCase();  // get always get returned 
    }
    set email (value){  //set doesnt needs return
        this._email =value
    }
    get password (){
        return this._password.toUpperCase();  // 
    }
    set password (value){
        this._password =value
    }
}

const Hero = new user("Thor@ai","abc");
console.log(Hero)