const myObj = {
    js : "javascript",
    cpp : "c++",
    rs : "ruby",
    py : "pyhton"
}

for (const key in myObj) {
    // console.log(`${key} is shortcut for ${myObj[key]}`);
}


const myArr = ["js","cpp","ruby"];
for (const key in myArr) {
    console.log(myArr[key]);
}