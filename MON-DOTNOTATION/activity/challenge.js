// activity 1

let age = 21
let place = "UK";

if(age <= 17 && place == "UK") {
    console.log("We cannot serve you!");
} 
else if(age >= 18 && place == "UK" ) {
    console.log("We can serve you");
}

// activity 2

let topping = "Pepperoni" 

switch(topping) {
    case "Pepperoni":
    case "Mozzarella":
        console.log("These are important Ingredients for my Pizza!")
        break;
    case "Pepperoni":
    case "Sausage":
    case "Onions":
        console.log("I don't mind having Onions on my Pizza")

}

// password generator
// let password = Math.random().toString(36).slice(2, 10)
// console.log(password)

// activity 3
var password = "hbilevrw"

// console.log("Password ", password); DEBUG LINE
if (password.length < 8) {
    console.log("Password is too short");
} else {
    console.log("Password is long enough");
}

// -- Activity 4 --
let num = 48;

if(num % 3 === 0) {
    console.log(`${num} is divisible by three`)
} else if(num % 5 === 0) {
    console.log(`${num} is not divisible by five`);
} else {                                                        // if number is not divisible by either 3 or 5 return that it is not
    console.log(`${num} is not divisible by three or five`)
}

// -- Acitivity 4 --
let num5 = 25;

if(num5 % 3 === 0) {
    console.log("FIZZ");
} else if(num5 % 5 === 0) {
    console.log("BUZZ")
} else {
    console.log("not divisible")
}

// -- Acitivity 6 --
let num3 = 2022;
let numString = String(num3); // Convert number to string
let reversedString = ""; // Initialize empty string for reversed number

// Reverse the number string by iterating over it backwards
for (let i = num3.length - 1; i >= 0; i--) {
  reversedString += num3[i];
}

// Compare the original string with the reversed string using an if-else statement
if (num3 === reversedString) {
  console.log(`${num3} is a palindrome`);
} else {
  console.log(`${num3} is not a palindrome`);
}

// -- Activity 7 -- 
let placeOfWork = "The Office";
let townOfHome = "London";
let time = 0900;

if(time < 0830) {
    console.log(`I'm at home in ${townOfHome}`);
} else if(time < 0900) {
    console.log("I'm communting");
} else if(time >= 0900) {
    console.log(`I'm currently at work at ${placeOfWork}`)
} else if(time > 1730) {
    console.log(`i'm currently at home in ${townOfHome}`)
} else {
    console.log("I'm out right now")
}

// -- Activity 8 --
let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
const strArr = str.split(" ").reverse();
let vowels = ['a','e','i','o','u'];

let arr = str.split("").reverse();
let indexOfLastVowel = arr.findIndex(e => vowels.includes(e))


if(indexOfLastVowel != -1) {
    let index = str.length-1-indexOfLastVowel
    console.log(`Last vowel found at index ${index}: ${str[index]}`)
}

// -- Activity 9 --
let word = "book";

if(word[0] == word[word.length - 1]) {
    ans = true;
} else {
    ans = false;
}

console.log(ans)

// -- Acitivity 10 --
let num1 = 10;
let num2 = 4;
let result = [num1, num2]

if(result % 2 === 0) {
    console.log(result)
} else {
    console.log(num1 * num2)
}
