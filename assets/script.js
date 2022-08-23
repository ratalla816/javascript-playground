alert("live to code, code to live");

console.log("code to live?");

window.alert("git push, get paid")

/*

Multi-line comment

*/

// A variable is a container for storing data
// A variable behaves as if it was the value that it contains 

// Two steps: 
// 1. Declaration (var, let, const)
// 2. Assignment (= assignment operator)

// let age; 
// age = 21;

let firstName = "Rob"; //string
// let age = "21"; //string (concatenated - age will show 211)
let age = 21; //number
let student = true; //boolean

age = age + 1;

console.log("hello", firstName);
console.log("you are", age);
console.log("enrolled:", student);

document.getElementById("p1").innerHTML = "hello " + firstName;
document.getElementById("p2").innerHTML = "you are " + age + " years old";
document.getElementById("p3").innerHTML = "enrolled: " + student;