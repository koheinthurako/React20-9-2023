// var

// Global scope
// var a = "Hello";
// console.log(a);

// for(let i = 0; i <= 5; i++) console.log(a);

// // Function Scope
// function test() {
//     var b = "Testing";
//     console.log(a, b);
// }

// test();



// var, let, const
var a = "Hello";
let b = "Thet";
const c = "Hein";

// var a = "World"; // this is ok
a = "World";
// let b = "Zaw"; // this is not ok
// c = "Ko"; // this is not ok

console.log(a);
console.log(b);
console.log(c);

const mySelf = {
    name: "Thet Zaw Hein",
    age: 24,
    gender: "male"
}

mySelf.name = "Ko Hein"; // This is ok for mySelf properties

// mySelf = { // This is not ok for entire data
//     name: "Thura"
// }
