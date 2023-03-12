// WEEK 2 VARIABLES
// -- Activity -- 

// var text = "All Around the World!";

// console.log(text.charAt(8).toUpperCase())

// console.log("All Around the World!".charAt(7).toUpperCase())


// // -- Example 2 --

// let favouriteDrink = "Diet Coke";
// console.log(favouriteDrink)



// // -- Example 3 -- 
// let favouriteDrink2 = "Watermelon RedBull"
// console.log(`My favourite drink is ${favouriteDrink2}`)



// -- Example 4 --
// let myName = "Hollie";
// let age = 23;
// let favouriteColour = "Orange";

// console.log(`My name is ${myName} and i am ${age}. My favourite colour is ${favouriteColour}`)

// -- Activity 1 --
let name = "Conor";
let age = "26";
let favouriteColor = "Red";

console.log(`This is ${name}, they're ${26} years old and they're favourite colour is ${favouriteColor}`);

//  -- Activity 2 --
const eatenToday = [
    "Banana Oatmeal",
    "Chicken with Rice",
    "Banana Protein Shake",
    "Crisps",
    "Mango"
]

// console.log(eatenToday[1])

eatenToday.push("Cinnamon Oatmeal", "Chicken with Rice and Veg", "Banana Protein Shake", "Pizza")

console.log(eatenToday)

// -- Activity 3 --
// Set the target date
const targetDate = new Date("December 16, 1999");

// Get the current date
const currentDate = new Date();

// Calculate the difference in days
const differenceInTime = currentDate.getTime() - targetDate.getTime();
const differenceInDays = differenceInTime / (1000 * 3600 * 24);

// Output the result
console.log(`Number of days since December 16, 1999: ${differenceInDays}`)

// -- Acitivity 4 --
let board = [
    [' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ']
  ];
  
  // Printing each row of the board
  for (let row = 0; row < board[0].length; row++) {
    console.log('|   '.repeat(board.length + 1));
  
    let row_with_items = '';
    for (let col = 0; col < board.length; col++) {
      row_with_items += ('| ' + board[col][row]) + ' ';
    }
    console.log(row_with_items + '|');
  
    console.log('|   '.repeat(board.length + 1));
    
    console.log('+---'.repeat(board.length) + '+');
  }

  
  