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

/*
arithmetic expressions are a combination of the following:
operands (values, variables, etc.) 
operators (+ - * / %)
that can be evaluated to a value
*/

let students = 20; 

// students = students + 1; 
// students = students - 1;
// students = students * 2;
// students = students / 2;
// let extraStudents = students % 3; 

students += 1; // augmented assignment operator
students -= 1
students *= 2
students /= 1

// console.log(extraStudents);
console.log(students);

let result = (1 + 2) * (3 + 4); //Please Excuse My Dear Aunt Sally

console.log(result);

// How to accept user input

// Using a window prompt

// Using an HTML textbox

