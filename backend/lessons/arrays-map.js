// Use the .map() method copy an array and a run function on each item in the new, copied array. The original array is unaffected.

/* =====================
EXAMPLES WITH ONE-LINE ARROW FUNCTIONS
======================== */

// Creates a new array with each string item in the copied array capitalized by the arrow function inside the loop.
// No need for parenthesis around the "item" single argument inside arrow function.

const myArray = ['apple', 'banana', 'orange'];
const myList = myArray.map(item => item.toUpperCase() );
console.log(myList);
// Outputs ['APPLE', 'BANANA', 'ORANGE']

// Each item in the copied array is doubled by the arrow function inside the loop.
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(number => number * 2);
console.log(doubled);
// Outputs [2, 4, 6, 8, 10] 

// Each item in the copied array has the number three added to it by the arrow function inside the loop.
const plusThree = numbers.map(number => number + 3);
console.log(plusThree);
// Outputs [4, 5, 6, 7, 8] 


/* =====================
EXAMPLE WITH MUTLI-LINE ARROW FUNCTION
======================== */

const celsiusTemps = [0, 25, 30, 100];

const fahrenheitTemps = celsiusTemps.map(temp => {
    const fahrenheit = (temp * 9/5) + 32;
    return `${temp}°C is ${fahrenheit}°F`;
});

console.log(fahrenheitTemps);


/* =====================
EXAMPLES THAT CALL EXTERNAL FUNCTIONS
======================== */

// Original array of radius values
const radii = [5, 10, 15];

// Function to calculate the area of a circle
function circleArea(radius) {
   return Math.PI * radius * radius;
}

// Apply the area calculation function to each item in the new array naned radii
const areas = radii.map(circleArea);

console.log(`Circle 1 radius: ${radii[0]} Circle area: ${areas[0].toFixed(4)}`);  
console.log(`Circle 2 radius: ${radii[1]} Circle area: ${areas[1].toFixed(4)}`);  
console.log(`Circle 3 radius: ${radii[2]} Circle area: ${areas[2].toFixed(4)}`);  

const areas2 = radii.map(radii => Math.PI * radii * radii);
console.log(`Circle 1 radius: ${radii[0]} Circle area: ${areas2[0].toFixed(4)}`);  
console.log(`Circle 2 radius: ${radii[1]} Circle area: ${areas2[1].toFixed(4)}`);  
console.log(`Circle 3 radius: ${radii[2]} Circle area: ${areas2[2].toFixed(4)}`);  

/* =====================
EXAMPLES THAT CALL EXTERNAL FUNCTIONS
======================== */

// Using map() with an array of objects
let users = [
    { firstName: "Susan", lastName: "Steward", age: 14, hobby: "Singing" },
    { firstName: "Daniel", lastName: "Longbottom", age: 16, hobby: "Football" },
    { firstName: "Jacob", lastName: "Black", age: 15, hobby: "Singing" }
];

// Loop through array of objects and combine the firstNames and lastNames item properties together 
let fullNames = users.map(user => console.log(`${user.firstName} ${user.lastName}`));

const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Mouse', price: 50 },
    { id: 3, name: 'Keyboard', price: 70 }
];

// Apply 10% discount to each item in the copied array
const specialOffers = products.map(product => {
    console.log(`${product.name} (id: ${product.id}) Discount price: €${product.price * 0.9}`);
});
  
  




// {
//     let fullName = user.firstName + " " + user.lastName;
//     }
// );
// Outputs:
// Susan Steward
// Daniel Longbottom
// Jacob Black


// let singleUser = users.map(user => {
//     //let's add the firstname and lastname together
//     let fullName = user.firstName + ' ' + user.lastName;
//     return `
//       <h3 class='name'>${fullName}</h3>
//       <p class="age">${user.age}</p>
//     `
// });


// const myMap = new Map([[1, 'one'], [2, 'two']]);
// const array = [...myMap] // [ [ 1, 'one' ], [ 2, 'two' ] ]



// https://legacy.reactjs.org/docs/lists-and-keys.html


// array.filter() method

// The array.filter() method a new array depending on certain criteria. 