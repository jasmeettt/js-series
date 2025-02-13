// this is how we import a default function through es module
import mul from "./EsModule.mjs";

// this is how we import a named function through es module
import { add,sub } from "./EsModule.mjs";

console.log(mul(2,3))
console.log(add(2,3))
console.log(sub(2,3))


// this is how we import a named function through common js module
const operations = require("./commonJs.js")
console.log(operations.add(4,6))