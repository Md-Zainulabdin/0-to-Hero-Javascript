// Loops, Conditions, & Functions

// var name = "zain"; // ES5

// let name1 = "zain"; // ES6
// const name2 = "zain"; // ES6

// name2 = "afgfdsfg";
// console.log(name1);

// Loop

// for loop

// for (let i = 0; i < 20; i++) {
//     // debugger
//     console.log("Hello World");
// }

// while loop

// let i = 0;

// while (i < 20) {
//     console.log("Hello World");
//     i++;
// }

// do while loop

// let name;

// do {
//     name = prompt("Enter your name");
// } while (!name);

// falsy value

// 0
// null
// undefined
// ""
// NAN
// []
// {}

// conditions

// logical operator 1-> OR || 2-> AND &&

// if (0 < 0 && 0 > -1) {
//     // statements
//     console.log("Thek hn bhai");
// }
// else if ("zain") {
//     console.log("Achi baat hn");
// }
// else {
//     console.log("galat hn bhai");
// }

// else if ladder

// switch
// let age = 18;

// switch (age) {
//     case "18":
//         console.log("Okay");
//         break;

//     default:
//         console.log("Not Okay");
// }

// Assignment 1
// take a character from user
// and check that is it a vowel?

// Function

// 1-> regular function / function declaration
// function greet () {
//     console.log("welcome");
// }

// 2-> function expression
// let greet = function () {
//     console.log("welcome");
// }

// 3-> Arrow function
let greet = (name, age) => {
    alert("welcome " + name + " your age is " + age);
};

let hello = prompt("Enter your name");
greet(hello, 18);