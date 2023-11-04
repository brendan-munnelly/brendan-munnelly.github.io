// Ternary operator
// condition ? valueIfTrue : valueIfFalse

// OLD WAY with multi-line if ... else statement:

// const age = 21;
// if (age >= 18) {
//     console.log('You may purchase beer.')
// } else {
//     console.log('You may not purchase beer.')
// }
// Outputs: "You may purchase beer."


// NEW WAY with ternary operator:

///const age = 21;
// age >= 18 
//   ? console.log('You may purchase beer.') 
//   : console.log('No beer for you.');

// Outputs: "You may purchase beer."


// Multi-line, easy-to-read example

// Declare variable
const age_1 = 21;
// Test condition 
age_1 >= 18 
   // If true, execute this code
   ? console.log("You may purchase beer.") 
   // If false, execute this code
   : console.log("No beer for you.");


// Variable declaration and test condition on one line
const age_2 = 21 >= 18
   // If true, execute this code
   ? console.log("You may purchase beer.") 
   // If false, execute this code
   : console.log("No beer for you.");

// Concise version with everything in a single line of code 
const age_3 = 21 >= 18 ? console.log("You may purchase beer.") : console.log("No beer for you.");

// ====================================
// TESTING BOOLEANS WITH TERNARY OPERATOR

// Is user authenticated?
const isLoggedIn = true;
const greeting = isLoggedIn ? "Welcome back, User!" : "Please log in to continue.";
console.log(greeting);
// Outputs "Welcome back, User!"

// Is dark mode ON for this user?
const isDarkMode = true;
const toggleStatus = isDarkMode ? "Dark more is toggled ON." : "Dark more is toggled to OFF.";
console.log(toggleStatus);  // "Dark more is toggled ON."

// Cheaper price for members
const isMember = true;
const price = isMember ? "€"+9.99 : "€"+12.99;
console.log(price);
// Outputs: €9.99


// ====================================
// TESTING STRINGS WITH THE TERNARY OPERATOR

// Declaration of tested variable, test condition, and two branches on separate lines
const weather_1 = "rainy";
weather_1 === "sunny" 
   ? console.log("Go out.") 
   : console.log("Stay home.");
// Outputs: "Stay home."

// Shorter version: Tested variable declared on separate line
const weather_2 = "rainy";
weather_2 === "sunny" ? console.log("Go out.") : console.log("Stay home.");
// Outputs: "Stay home."

// One line of code
const weather_3 = "rainy" === "sunny" ? console.log("Go out.") : console.log("Stay home.");
// Outputs: "Stay home."

// Is string short or long?
const str = "Hello";
const lengthDescription = (str.length > 5) ? "long" : "short";
console.log(lengthDescription);  // "Outputs: short"


// Does string contain 'fox'?
const sentence = "The quick brown fox jumps over the lazy dog.";
const containsFox = (sentence.includes("fox")) 
   ? "contains 'fox'" 
   : "does not contain 'fox'";
console.log(containsFox);  // "Outputs: contains 'fox'"

// Does product name start with 'TV_'?
const productName = "TV_Samsung_Model_X";
const category = (productName.startsWith("TV_")) ? "Television" : "Other";
console.log(category);  // Outputs: "Television"


// ====================================
// TESTING NUMBERS WITH THE TERNARY OPERATOR

// Which of two numbers is larger?
const num1 = 10;
const num2 = 20;
const largerNumber = num1 > num2 ? num1 : num2;
console.log("The larger number is:" +largerNumber);
//Outputs: "The larger number is: 20"

// Is a number odd or even?
const number = 5;
const result = (number % 2 === 0) ? "even" : "odd";
console.log(result);  // "odd"


// ====================================
// TESTING FOR PROBLEM VARIABLES WITH THE TERNARY OPERATOR

// Is string empty?
let response_1 = userEmail ? userEmail: "No email supplied."
console.log(response_1);
// Outputs: "No email supplied."

// Is value assigned?
let isThereSoup;
let response_2 = isThereSoup ? "Yes, we have soup": "No soup today."
console.log(response_2);
// Outputs: "No soup today."


// ====================================
// CHAINING AND THE TERNARY OPERATOR

// Branching within the outer FALSE condition
const myNumber = 10;
let testNum = myNumber === 0 
   ? "You have nothing" 
   : myNumber > 10 
      ? "You have a lot"
      : "You have a little"
        
console.log(testNum);
// Outputs: "You have a little"


// Performing a double check
const firstCheck = false;
const secondCheck = false;   

const grantAccess = firstCheck 
    ? "Access denied" 
    : secondCheck
        ? "Access denied" 
        : "Access granted";

console.log(grantAccess);
// Outputs: "Access denied"
