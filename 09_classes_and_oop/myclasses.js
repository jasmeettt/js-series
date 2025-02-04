// class user{
//     constructor(username, password, email){
//         this.username =username;
//         this.email =email;
//         this.password = password;
//     }
//     encrpytPassword(){ // this is basically a function but here in classes we dont need to mention that it is function
//         return `${this.password}abc`
//     }
//     changeUserName(){
//         return(this.username.toUpperCase())
//     }
// }

// const bi = new user("bingo", "123", "bingo@bi.com");

// console.log(bi.encrpytPassword())
// console.log(bi.changeUserName())
// this is all we did with classes

//now the behind the scenes of how classes would work.

function user(username, password, email){
        this.username =username;
        this.email =email;
        this.password = password;
}

user.prototype.encrpytPassword = ()=>{
    return `${this.password}abc`
}

user.prototype.changeUserName = ()=>{
    return `${this.username.toUpperCase()}`
}


let bi = new user("Bingo", "123", "bi@bingo.com")
console.log(bi.encrpytPassword())
console.log(bi.changeUserName())