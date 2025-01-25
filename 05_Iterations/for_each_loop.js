const coding = ["html", "css", "js", "python", "nodejs"]

// coding.forEach(function (key){
//     console.log(key)
// });

// coding.forEach(key => {
//     console.log(key)
// });

// function printMe (item) {
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach( (a,b,c) => {
//     console.log(a,b,c);
// })

const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "JS"
    },
    {
        languageName : "Python",
        languageFileName : "PS"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    }
];

myCoding.forEach((item)=>{
    console.log(item.languageFileName)
})