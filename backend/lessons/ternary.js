// Ternary operator
// condition ? valueIfTrue : valueIfFalse
// Use only when one thing happens in 'Yes' case and some other one thing happens in 'No' case

// Old if ... else way
// const age = 21;
// if (age >= 18) {
//     console.log('You may purchase beer.')
// } else {
//     console.log('You may not purchase beer.')
// }

// Variable declared on separate line and later tested in condition 
// const age = 21;
// age >= 18 ? console.log('You may purchase beer.') : console.log('No beer for you.');
// Outputs: "You may purchase beer."

const age = 21 >= 18 ? console.log("You may purchase beer.") : console.log("No beer for you.");


const number = 64;
const result = number > 0 ? "Positive number" : "Negative number";
console.log(result ); // Outputs: "Positive number"

// Variable declared on separate line
const weather1 = "rainy";
weather1 === "sunny" ? console.log("Go out.") : console.log("Stay home.");
// Outputs: "Stay home."

// Variable declared and tested on same line
// The test condition is "rainy" === "sunny"
const weather2 = "rainy" === "sunny" ? console.log("Go out.") : console.log("Stay home.");
// Outputs: "Stay home."



// The test condition is 5 > 12
const msg = 5 > 12 ? "First number is bigger." : "Second number is bigger.";
console.log(msg);  // Outputs: Second number if bigger."

// Test variable with boolean value
const isMember = true;
const price = isMember ? 9.99 : 12.99;
console.log(price);  // Outputs: 9.99

// Test string variable for empty value
const userInput = '';
const name = userInput ? userInput : "Guest";
console.log(name);  // Outputs: "Guest"

// Test object for NULL value
const exampleObject = { value: true };
exampleObject ? exampleObject.value : "Value not set";
console.log(exampleObject.value);  // Outputs: true

// Also ternary with functions
// Also ternary with map method of arrays
// Tech with Nader - https://www.youtube.com/watch?v=4hYyY1q2DVU


const firstCheck = false;
const secondCheck = false;   

const grantAccess = firstCheck 
    ? "Access denied" 
    : secondCheck 
        ? "Access granted" 
        : "Access denied";

console.log(grantAccess);

let isThereSoup;
let response = isThereSoup ? "Yes, we have soup": "Default soup."
console.log(response);
// Outputs: "Default soup."

const userInput1 = null;
const result1 = userInput1 !== null ? userInput1 : "Some default value";
console.log(result1); // Output: "Some default value"

let userEmail = '';
let response2 = userEmail ? userEmail: "No email supplied."
console.log(response2);
// Outputs: "No email supplied."

const myNumber = 10;
let testNum = myNumber === 0 
    ? "You have nothing" 
    : myNumber > 10 
        ? "You have a lot"
        : "You have a little"

console.log(testNum);
// Outputs: "You have a little"