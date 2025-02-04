class user{
    constructor(username, password, email){
        this.username =username;
        this.email =email;
        this.password = password;
    }
    encrpytPassword(){ // this is basically a function but here in classes we dont need to mention that it is function
        return `${this.password}abc`
    }
}

const bi = new user("bingo", "123", "bingo@bi.com");

console.log(bi.encrpytPassword())