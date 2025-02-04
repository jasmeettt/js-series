
// behind the scene

// function user (username){
    //     this.username = username;
    // }
    // function Teacher (username,email,password){
        //     user.call(this,username)
        //     this.email = email
        //     this.password  = password
        
        //     function addCourse(){
            //         console.log(`Course has been added by ${this.username}`)
            //     }
            // }
            
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
                addCourse (){
                    console.log(`A new course was added by ${this.username}`);
                    
                }
            }


const Bingo = new Teacher("Bingo", "bi@gmaol.com","123");
const chai = new user("Chai");
console.log(Bingo)
Bingo.addCourse()
chai.logMe()
Bingo.logMe() // because it was extended through the user so thats why it can use this function