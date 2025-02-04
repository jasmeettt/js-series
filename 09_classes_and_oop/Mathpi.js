const descriptor =Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(descriptor)

const chai = {
    name : 'chai',
    price : 250,
    isAvailable : true
}

console.log(chai)

// Object.defineProperty(chai, "name", {
//     writable : false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(chai, "name" ));

for (let [key,value] of Object.entries(chai)) {
    console.log(`${key} : ${value}`);
    
}