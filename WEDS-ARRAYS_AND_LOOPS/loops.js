// // -- Example 1 -- 

// favDrinks = [
//     "Diet Coke",
//     "Watermelon Red Bull",
//     "Fanta"
// ]

// for (let i = 0; i < favDrinks.length; i++) {
//     console.log(favDrinks[i])
// }

// // -- Example 2 --

// let multiplesTwo = []

// for(let i = 0; i < 20; i++) {
//     if (1 % 2 == 0) {
//         multiplesTwo.push(i)
//     }
// }

// console.log(`Numbers divisiable by 2 between 0 and 20 are: ${multiplesTwo}`)


// -- Example 3 -- WHILE LOOPS

// let age = 16;

// while(age < 18) {

//     console.log("You're a Child")
//     age++; 
// }

// //  the while loop will run until it meets the number 18 and meets the condition

// console.log("You're an Adult")

// -- Example 4 -- Simple 4 card game - using JS and Math Libary

let cards = ['Diamond', 'Spade', 'Club', 'Heart'];
let currentCard = 'Heart'

while(currentCard != "Spade") {
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)];
}

console.log(currentCard); 