// alert("live to code, code to live");

console.log("code to live?");

// window.alert("git push, get paid")

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
// let age = 21; //number
let student = true; //boolean

// age = age + 1;

console.log("hello", firstName);
// console.log("you are", age);
console.log("enrolled:", student);

document.getElementById("p1").innerHTML = "hello " + firstName;
// document.getElementById("p2").innerHTML = "you are " + age + " years old";
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

// let username = window.prompt("What's your name?");
// console.log(username);


// Using an HTML textbox
let username;

document.getElementById("myButton").onclick = function() {

    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username;
};

// Type Conversion = change the datatype of a value to another
// (strings, numbers, booleans)

let age = window.prompt("How old are you?");

// age += 1; WRONG - concatination will only add the number to end of the string

// We need to use a number constructor 
console.log(typeof age); // tells us the data type of the variable
age = Number(age);
console.log(typeof age);
age += 1; 

console.log("Happy Birthday! You are", age, "years old");

let x; 
let y; 
let z; 

x = Number("3.14");
y = String(3.14);
// z = Boolean(3.14); //True 
z = Boolean(""); //False
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

// const = a variable that cannot be changed

const PI = 3.14159; // const naming convention should be ALL CAPS
let radius; 
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

circumference = 2 * PI * radius;

console.log("The circumference is:", circumference);


// MATH

let a = 3.14;
a = Math.round(a);
console.log(a);

let b = 3.14;
b = Math.floor(b);
console.log(b);

let c = 3.14;
c = Math.ceil(c);
console.log(c);

let d = 3.14;
d = Math.pow(d, 2);
console.log(d);

let e = 3.14;
e = Math.sqrt(e);
console.log(e);

let f = -3.14;
f = Math.abs(f);
console.log(f);

let g = -3.14;
let h = 5; 
let i = 9; 
let maximum; 
let minimum; 
maximum = Math.max(g, h, i);
console.log(maximum);
minimum = Math.min(g, h, i);
console.log(minimum);
a = Math.PI; 
console.log(a); 


