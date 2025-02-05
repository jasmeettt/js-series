// this is the old way of writing getter and setter
// we can also do this by making objects.

function user (email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this,'email',{ // no need to write underscore email js will handle it by itself
        get : function (){
            return this._email.toUpperCase()
        },
        set : function(value){
            this._email = value;
            // this.password = value;
        }
    })
    Object.defineProperty(this,'password',{ // no need to write underscore email js will handle it by itself
        get : function (){
            return this._password.toUpperCase()
        },
        set : function(value){
            this._password = value;
            // this.password = value;
        }
    })
}

const me = new user("meAsUser.ai","abc")
console.log(me)