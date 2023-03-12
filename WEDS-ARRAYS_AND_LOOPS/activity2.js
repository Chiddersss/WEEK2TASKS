const array = [
    1, 2, 3
]

console.log(array.unshift(10, 5))

console.log(array)

// -- Example --
let numbers = [2, 9, 16, 23]

let map = numbers.map(Math.sqrt)
console.log(map)

// numbers.shift()
// console.log(numbers)

// -- Example 2 --

numbers.unshift(36)
console.log(numbers)

// -- Example 3 --
numbers.splice(2, 0, "Lemon", "Kiwi")
console.log(numbers)