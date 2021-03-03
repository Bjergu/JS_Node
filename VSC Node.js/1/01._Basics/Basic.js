console.log("-------------------- Basics --------------------");
// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constants

const firstName = "Anders";
const lastName = "Latif";

// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

console.log("\n----------Exercise 1----------");
//concantentation
console.log("Name: " + firstName);
console.log("Surname: " + lastName);

//string literal
console.log("Surname: ${lastName}");

// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2020";
const number = 1;

// Add the year plus the number
// The result should be 2021
// You cannot touch line 1 or 2

console.log("\n----------Exercise 2----------");
console.log(parseInt(year) + number);
console.log(Number(year) + number);

console.log(+ year + number);
console.log(number+ +year);

// --------------------------------------