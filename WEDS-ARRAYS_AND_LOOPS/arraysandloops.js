
// // --- Example 1 ---
// let coffeeOrder = [
//     "Alex - Cortago",
//     "Ben - Cortago",
//     "Charlie - Whatever's new"
// ];

// -- Example 2 --

// let coffeeOrder2 = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's new"
// ]

// coffeeOrder2[1] = '"Ann - Vanilla Latte';
// console.log(coffeeOrder2)

// -- Example 3 --

// let coffeeOrder3 = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's new"
// ]

// console.log(coffeeOrder3.length)

// -- Example 4 -- Adding an item with the push method

// let coffeeOrder4 = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's new"
// ];

// coffeeOrder4.push("Donna - Espresso")
// console.log(coffeeOrder4)


// -- Example 5 -- Removing an item from an Array
let coffeeOrder5 = [
    "Alex - Cortado",
    "Ben - Cortado",
    "Charlie - Whatever's new"
];

// coffeeOrder5.pop(); // Only removed the last item 
coffeeOrder5.splice(1, 1); // removes a specific item 
console.log(coffeeOrder5)

