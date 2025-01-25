// Control Flow or Logic Flow

const userLoggedIn = true;
const debitCard = true;
const loggeInFromGoogle = false;
const loggeInFromEmail = true;


if (userLoggedIn && debitCard){
    console.log("allow to buy course");
    
}

if (loggeInFromEmail || loggeInFromGoogle) {
    console.log(`user logged IN`)
}

